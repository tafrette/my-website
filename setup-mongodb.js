#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 MongoDB Setup Helper');
console.log('======================\n');

// Check if .env.local already exists
const envPath = path.join(__dirname, '.env.local');
if (fs.existsSync(envPath)) {
  console.log('⚠️  .env.local already exists!');
  console.log('If you want to update your MongoDB URI, edit .env.local manually.\n');
  process.exit(0);
}

console.log('This script will help you create a .env.local file for MongoDB.\n');

// Get MongoDB URI from user
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your MongoDB URI (or press Enter to use template): ', (uri) => {
  let mongoUri = uri.trim();
  
  if (!mongoUri) {
    mongoUri = 'mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority';
    console.log('\n📝 Using template URI. You\'ll need to replace username and password with your actual credentials.');
  }
  
  const envContent = `# MongoDB Configuration
MONGODB_URI=${mongoUri}

# Get your MongoDB URI from MongoDB Atlas:
# 1. Go to https://cloud.mongodb.com/
# 2. Create a free account and cluster
# 3. Create a database user
# 4. Configure network access
# 5. Copy the connection string from "Connect your application"
`;

  try {
    fs.writeFileSync(envPath, envContent);
    console.log('\n✅ Created .env.local file successfully!');
    console.log('\n📋 Next steps:');
    console.log('1. Edit .env.local and replace the MongoDB URI with your actual credentials');
    console.log('2. Restart your development server: npm run dev');
    console.log('3. Test by submitting the contact form and checking /admin');
    console.log('\n📖 For detailed setup instructions, see MONGODB_SETUP.md');
  } catch (error) {
    console.error('\n❌ Error creating .env.local:', error.message);
  }
  
  rl.close();
});

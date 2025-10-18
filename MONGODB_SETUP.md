# MongoDB Setup Guide

## 🚀 Quick Setup (Recommended - MongoDB Atlas)

### Step 1: Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Click "Try Free" and create an account
3. Choose the **FREE** tier (M0 Sandbox)

### Step 2: Create a Cluster
1. Click "Build a Database"
2. Choose "M0 Sandbox" (Free tier)
3. Select a cloud provider and region (choose closest to you)
4. Click "Create Cluster" (takes 1-3 minutes)

### Step 3: Create Database User
1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Create username: `admin` (or any username you prefer)
5. Create a strong password (save this!)
6. Set privileges to "Read and write to any database"
7. Click "Add User"

### Step 4: Configure Network Access
1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (0.0.0.0/0)
4. Click "Confirm"

### Step 5: Get Connection String
1. Go to "Database" in the left sidebar
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Select "Node.js" and version "4.1 or later"
5. Copy the connection string

### Step 6: Configure Your App
1. Copy `env-template.txt` to `.env.local`
2. Replace the MongoDB URI with your connection string:
   ```
   MONGODB_URI=mongodb+srv://admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
   ```
3. Replace `YOUR_PASSWORD` with the password you created in Step 3

### Step 7: Test Your Setup
1. Restart your development server: `npm run dev`
2. Go to your website and submit the contact form
3. Go to `/admin` and check if the message appears
4. Messages should now persist even after server restarts!

## 🔧 Alternative: Local MongoDB

If you prefer to run MongoDB locally:

### Install MongoDB
```bash
# macOS (using Homebrew)
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community
```

### Configure Your App
1. Copy `env-template.txt` to `.env.local`
2. Use local MongoDB URI:
   ```
   MONGODB_URI=mongodb://localhost:27017/portfolio
   ```

## 🎯 What This Gives You

✅ **Persistent Storage** - Messages survive server restarts  
✅ **Real Database** - Professional MongoDB integration  
✅ **Scalable** - Can handle thousands of messages  
✅ **Secure** - Proper authentication and network security  
✅ **Free Tier** - MongoDB Atlas free tier supports up to 512MB  

## 🔍 Troubleshooting

### Common Issues:

1. **Connection Error**: Check your MongoDB URI and password
2. **Network Access**: Make sure you've allowed all IPs in MongoDB Atlas
3. **User Permissions**: Ensure your database user has read/write permissions
4. **Environment Variables**: Make sure `.env.local` is in your project root

### Test Connection:
```bash
# Check if your environment variable is loaded
echo $MONGODB_URI
```

## 📊 Database Structure

Your messages will be stored in:
- **Database**: `portfolio`
- **Collection**: `messages`
- **Fields**: `id`, `name`, `email`, `message`, `timestamp`

## 🚀 Next Steps

Once MongoDB is set up, you can:
- View messages in the MongoDB Atlas dashboard
- Add more complex queries and filtering
- Implement message categories or status tracking
- Add email notifications when new messages arrive
- Export messages to CSV or other formats

Your contact form is now production-ready! 🎉

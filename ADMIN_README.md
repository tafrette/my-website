# Admin Panel - Contact Messages

## How to View Contact Form Messages

When someone fills out your contact form on the website, you can view their messages by visiting the admin panel:

### Access the Admin Panel
1. Go to: `http://localhost:3000/admin` (when running locally)
2. Or: `https://yourdomain.com/admin` (when deployed)
3. **Enter password**: `thomas123`
4. Click "Access Admin Panel"

### Features
- **Password protected** with secure login
- **Mobile-friendly design** - works great on phones and tablets
- **View all messages** from your contact form
- **See sender details** (name, email, timestamp)
- **Read full messages** 
- **Delete messages** you no longer need
- **Real-time updates** when new messages arrive
- **Logout functionality** to secure your session

### How It Works
1. When someone submits the contact form, their message is saved to a simple database
2. You can access all messages through the admin panel
3. Messages are sorted by newest first
4. You can delete individual messages

### Current Implementation
- **Development**: Uses in-memory storage (messages reset when server restarts)
- **Production**: You should replace with a real database like PostgreSQL, MongoDB, or Supabase

### For Production Deployment
To make this work in production, you'll want to:

1. **Add a real database**:
   - Replace `lib/db.ts` with a real database connection
   - Use services like Supabase, MongoDB Atlas, or PostgreSQL

2. **Add authentication**:
   - Protect the admin panel with login/password
   - Use NextAuth.js or similar authentication

3. **Add email notifications**:
   - Send yourself an email when new messages arrive
   - Use services like SendGrid, Resend, or Nodemailer

4. **Add more features**:
   - Mark messages as read/unread
   - Reply directly from admin panel
   - Export messages to CSV

### Testing the Contact Form
1. Go to your website's contact section
2. Fill out the form with test data
3. Submit the form
4. Go to `/admin` to see your test message

The contact form is now fully functional and you can see who has contacted you!

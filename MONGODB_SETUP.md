# MongoDB Setup Guide

This guide will help you set up MongoDB for the Animal Adoption website.

## Quick Start

### 1. Install Backend Dependencies

```bash
cd server
npm install
```

### 2. Choose Your MongoDB Option

#### Option A: MongoDB Atlas (Cloud - Recommended for Beginners)

**Pros**: No local installation, free tier available, automatic backups
**Cons**: Requires internet connection

**Steps:**

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create a free account
3. Create a new cluster (choose the free M0 tier)
4. Wait for cluster to be created (2-5 minutes)
5. Click "Connect" button
6. Add your current IP address to the IP whitelist (or use 0.0.0.0/0 for development)
7. Create a database user with username and password
8. Choose "Connect your application"
9. Copy the connection string (looks like: `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/`)
10. Replace `<password>` with your database user password
11. Add database name: `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/animal-adoption?retryWrites=true&w=majority`

#### Option B: Local MongoDB

**Pros**: Works offline, faster for development
**Cons**: Requires local installation

**Installation:**

**macOS:**
```bash
# Install using Homebrew
brew tap mongodb/brew
brew install mongodb-community@7.0

# Start MongoDB
brew services start mongodb-community@7.0

# Verify it's running
brew services list
```

**Ubuntu/Debian:**
```bash
# Import MongoDB public key
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -

# Add MongoDB repository
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# Update and install
sudo apt-get update
sudo apt-get install -y mongodb-org

# Start MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod

# Verify it's running
sudo systemctl status mongod
```

**Windows:**
1. Download MongoDB Community Server from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Run the installer
3. Choose "Complete" installation
4. Install as a Windows Service
5. MongoDB will start automatically

### 3. Configure Environment Variables

1. Navigate to the root directory of the project
2. Copy the example environment file:
```bash
cp .env.example .env
```

3. Edit `.env` file and update the MongoDB connection string:

**For MongoDB Atlas:**
```env
MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.xxxxx.mongodb.net/animal-adoption?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
```

**For Local MongoDB:**
```env
MONGODB_URI=mongodb://localhost:27017/animal-adoption
PORT=5000
NODE_ENV=development
```

### 4. Start the Backend Server

```bash
cd server
npm run dev
```

You should see:
```
🚀 Server is running on port 5000
✅ MongoDB Connected Successfully
```

### 5. Start the Frontend

In a new terminal:
```bash
# From the root directory
npm start
```

## Testing the Connection

### Test 1: Health Check
Open your browser and go to: http://localhost:5000/api/health

You should see:
```json
{
  "status": "OK",
  "message": "Server is running",
  "database": "Connected"
}
```

### Test 2: Submit Contact Form
1. Go to http://localhost:3000/contact
2. Fill out the contact form
3. Submit it
4. You should see a success message

### Test 3: Verify Data in MongoDB

**For MongoDB Atlas:**
1. Go to your MongoDB Atlas dashboard
2. Click "Browse Collections"
3. You should see the `animal-adoption` database
4. Check the `contacts` collection for your submission

**For Local MongoDB:**
```bash
# Open MongoDB shell
mongosh

# Switch to database
use animal-adoption

# View contacts
db.contacts.find().pretty()

# View newsletter subscriptions
db.newsletters.find().pretty()

# Exit
exit
```

## Troubleshooting

### Error: "MongooseServerSelectionError"

**Cause**: Cannot connect to MongoDB

**Solutions:**
- **Atlas**: Check your IP whitelist, verify credentials, ensure cluster is running
- **Local**: Ensure MongoDB service is running (`brew services list` or `sudo systemctl status mongod`)

### Error: "Port 5000 already in use"

**Solution:**
```bash
# Find and kill the process
lsof -ti:5000 | xargs kill -9

# Or change the port in .env
PORT=5001
```

### Error: "CORS policy"

**Cause**: Frontend and backend are on different origins

**Solution**: The server is already configured with CORS. Ensure:
- Backend is running on port 5000
- Frontend is running on port 3000
- Both servers are running simultaneously

### Cannot see data in database

**Check:**
1. Backend server is running
2. MongoDB connection is successful (check server logs)
3. Form submission was successful (check browser console for errors)
4. You're looking at the correct database name

## API Endpoints

Once everything is set up, these endpoints will be available:

- `GET /api/health` - Server health check
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts
- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `GET /api/newsletter/subscribers` - Get all subscribers

## Next Steps

1. ✅ Set up MongoDB (Atlas or Local)
2. ✅ Configure environment variables
3. ✅ Start backend server
4. ✅ Start frontend server
5. ✅ Test contact form submission
6. ✅ Verify data in MongoDB

## Security Notes

⚠️ **Important:**
- Never commit `.env` file to version control
- Use strong passwords for MongoDB users
- In production, restrict IP whitelist to specific IPs
- Add authentication for admin routes
- Use environment-specific connection strings

## Need Help?

- Check the server logs for error messages
- Verify MongoDB connection string format
- Ensure all dependencies are installed
- Make sure both servers are running

For more details, see:
- `/server/README.md` - Backend documentation
- `/README.md` - Main project documentation

# 🚀 Quick Start Guide

## First Time Setup (5 minutes)

### 1. Install Backend Dependencies
```bash
cd server
npm install
cd ..
```

### 2. Configure MongoDB

**Easy Option - Use Local MongoDB:**
```bash
# macOS
brew install mongodb-community@7.0
brew services start mongodb-community@7.0

# .env is already configured for local MongoDB!
```

**OR Cloud Option - MongoDB Atlas:**
1. Sign up at https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Get connection string
4. Update `.env` file:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/animal-adoption
```

### 3. Start Development

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm start
```

### 4. Test It!
1. Open http://localhost:3000
2. Go to Contact page
3. Submit the form
4. Check http://localhost:5000/api/contact to see your data!

---

## Daily Development

```bash
# Terminal 1
cd server && npm run dev

# Terminal 2
npm start
```

---

## Quick Commands

```bash
# Check if backend is running
curl http://localhost:5000/api/health

# View all contact submissions
curl http://localhost:5000/api/contact

# View newsletter subscribers
curl http://localhost:5000/api/newsletter/subscribers
```

---

## Ports

- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- MongoDB: localhost:27017 (if local)

---

## Need Help?

- **Setup Issues**: See `MONGODB_SETUP.md`
- **API Testing**: See `server/test-api.md`
- **Full Details**: See `MONGODB_INTEGRATION_SUMMARY.md`
- **Backend Docs**: See `server/README.md`

---

## Troubleshooting

**MongoDB won't connect?**
```bash
# Check if MongoDB is running
brew services list | grep mongodb
```

**Port 5000 in use?**
```bash
lsof -ti:5000 | xargs kill -9
```

**Missing dependencies?**
```bash
npm install
cd server && npm install
```

---

That's it! You're ready to go! 🎉

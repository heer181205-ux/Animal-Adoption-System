# Animal Adoption Backend Server

This is the backend server for the Animal Adoption website, built with Express.js and MongoDB.

## Features

- **Contact Form API**: Store and retrieve contact form submissions
- **Newsletter API**: Manage newsletter subscriptions
- **MongoDB Integration**: Persistent data storage
- **CORS Enabled**: Allow cross-origin requests from the frontend
- **Input Validation**: Mongoose schema validation
- **Error Handling**: Comprehensive error handling middleware

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

## Installation

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env` in the root directory
   - Update the MongoDB connection string

## MongoDB Setup Options

### Option 1: MongoDB Atlas (Cloud - Recommended)

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Click "Connect" and choose "Connect your application"
4. Copy the connection string
5. Update `.env` file:
```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/animal-adoption?retryWrites=true&w=majority
```

### Option 2: Local MongoDB

1. Install MongoDB locally: https://docs.mongodb.com/manual/installation/
2. Start MongoDB service:
```bash
# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongod

# Windows
net start MongoDB
```
3. Update `.env` file:
```
MONGODB_URI=mongodb://localhost:27017/animal-adoption
```

## Running the Server

### Development Mode (with auto-restart):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:5000` (or the PORT specified in `.env`)

## API Endpoints

### Health Check
- **GET** `/api/health` - Check server and database status

### Contact Form
- **POST** `/api/contact` - Submit a contact form
  - Body: `{ name, email, phone, subject, message }`
- **GET** `/api/contact` - Get all contact submissions
- **GET** `/api/contact/:id` - Get a specific contact submission

### Newsletter
- **POST** `/api/newsletter/subscribe` - Subscribe to newsletter
  - Body: `{ email }`
- **GET** `/api/newsletter/subscribers` - Get all active subscribers

## Database Models

### Contact Model
```javascript
{
  name: String (required),
  email: String (required),
  phone: String,
  subject: String (required, enum),
  message: String (required),
  status: String (default: 'new'),
  createdAt: Date
}
```

### Newsletter Model
```javascript
{
  email: String (required, unique),
  subscribedAt: Date,
  isActive: Boolean (default: true)
}
```

## Testing the API

You can test the API using curl, Postman, or any HTTP client:

```bash
# Health check
curl http://localhost:5000/api/health

# Submit contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+91 98765 43210",
    "subject": "adoption",
    "message": "I am interested in adopting a pet."
  }'

# Subscribe to newsletter
curl -X POST http://localhost:5000/api/newsletter/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "subscriber@example.com"}'
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| MONGODB_URI | MongoDB connection string | - |
| PORT | Server port | 5000 |
| NODE_ENV | Environment (development/production) | development |

## Security Notes

⚠️ **Important for Production:**
- Add authentication middleware for admin routes (GET endpoints)
- Implement rate limiting to prevent abuse
- Use HTTPS in production
- Never commit `.env` file to version control
- Implement proper CORS configuration for production domains
- Add input sanitization for XSS prevention
- Implement CSRF protection

## Troubleshooting

### MongoDB Connection Issues
- Verify MongoDB is running (local) or credentials are correct (Atlas)
- Check firewall settings
- Ensure IP address is whitelisted in MongoDB Atlas

### Port Already in Use
- Change the PORT in `.env` file
- Or kill the process using port 5000:
```bash
# macOS/Linux
lsof -ti:5000 | xargs kill -9

# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

## License

ISC

# API Testing Guide

Use these commands to test your API endpoints.

## Prerequisites

Make sure the backend server is running:
```bash
cd server
npm run dev
```

## Test Commands

### 1. Health Check

```bash
curl http://localhost:5000/api/health
```

**Expected Response:**
```json
{
  "status": "OK",
  "message": "Server is running",
  "database": "Connected"
}
```

---

### 2. Submit Contact Form

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "+91 98765 43210",
    "subject": "adoption",
    "message": "I am interested in adopting a dog. Can you provide more information?"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Thank you for contacting us! We will get back to you soon.",
  "data": {
    "id": "...",
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
}
```

---

### 3. Get All Contact Submissions

```bash
curl http://localhost:5000/api/contact
```

**Expected Response:**
```json
{
  "success": true,
  "count": 1,
  "data": [
    {
      "_id": "...",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "+91 98765 43210",
      "subject": "adoption",
      "message": "I am interested in adopting a dog...",
      "status": "new",
      "createdAt": "2025-10-12T06:00:52.000Z"
    }
  ]
}
```

---

### 4. Get Single Contact Submission

```bash
# Replace {id} with actual contact ID
curl http://localhost:5000/api/contact/{id}
```

---

### 5. Subscribe to Newsletter

```bash
curl -X POST http://localhost:5000/api/newsletter/subscribe \
  -H "Content-Type: application/json" \
  -d '{
    "email": "subscriber@example.com"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Thank you for subscribing to our newsletter!"
}
```

---

### 6. Get All Newsletter Subscribers

```bash
curl http://localhost:5000/api/newsletter/subscribers
```

**Expected Response:**
```json
{
  "success": true,
  "count": 1,
  "data": [
    {
      "_id": "...",
      "email": "subscriber@example.com",
      "subscribedAt": "2025-10-12T06:00:52.000Z",
      "isActive": true
    }
  ]
}
```

---

## Testing with Different Scenarios

### Test Validation Errors

**Missing Required Fields:**
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe"
  }'
```

**Invalid Email:**
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "invalid-email",
    "subject": "adoption",
    "message": "Test message"
  }'
```

**Duplicate Newsletter Subscription:**
```bash
# Subscribe first time
curl -X POST http://localhost:5000/api/newsletter/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'

# Try subscribing again with same email
curl -X POST http://localhost:5000/api/newsletter/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'
```

---

## Using Postman

If you prefer a GUI, you can use Postman:

1. Download and install [Postman](https://www.postman.com/downloads/)
2. Create a new request
3. Set the method (GET/POST)
4. Enter the URL (e.g., `http://localhost:5000/api/contact`)
5. For POST requests:
   - Go to "Body" tab
   - Select "raw" and "JSON"
   - Paste the JSON data
6. Click "Send"

---

## Testing from Browser Console

You can also test from your browser's console:

```javascript
// Submit contact form
fetch('http://localhost:5000/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+91 98765 43210',
    subject: 'volunteer',
    message: 'I would like to volunteer at your shelter.'
  })
})
.then(res => res.json())
.then(data => console.log(data));

// Subscribe to newsletter
fetch('http://localhost:5000/api/newsletter/subscribe', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: 'newsletter@example.com' })
})
.then(res => res.json())
.then(data => console.log(data));
```

---

## Monitoring Logs

Watch the server logs in real-time:
```bash
cd server
npm run dev
```

The logs will show:
- Incoming requests
- Database operations
- Errors (if any)
- Connection status

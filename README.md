# 🐾 Animal World - Pet Adoption Website

A beautiful and modern MERN stack website for animal adoption, connecting loving homes with animals in need.

## ✨ Features

- **Home Page**: Eye-catching hero section with featured animals and adoption information
- **Browse Animals**: Filter and search through available pets by type, size, and more
- **Animal Details**: Detailed information about each animal with photos and characteristics
- **Adoption Application**: Complete adoption form with validation
- **About Us**: Information about the organization, mission, and team
- **Contact Page**: Contact form and location information
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Beautiful gradients, smooth animations, and intuitive navigation

## 🚀 Technologies Used

### Frontend
- **React.js**: UI library
- **React Router DOM**: Client-side routing
- **Custom CSS**: Modern design patterns with gradients and animations
- **Google Fonts**: Pacifico, Poppins
- **Emoji Icons**: Friendly visual elements

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management

## 📦 Installation

### Frontend Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd cat
```

2. Install frontend dependencies:
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install backend dependencies:
```bash
npm install
```

3. Set up MongoDB:
   - **Option A - MongoDB Atlas (Cloud):**
     - Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
     - Create a cluster and get your connection string
     - Update `.env` file with your connection string
   
   - **Option B - Local MongoDB:**
     - Install MongoDB locally
     - Start MongoDB service
     - Use default connection: `mongodb://localhost:27017/animal-adoption`

4. Configure environment variables:
   - Copy `.env.example` to `.env` in the root directory
   - Update `MONGODB_URI` with your MongoDB connection string

5. Start the backend server:
```bash
npm run dev
```

The backend will run on [http://localhost:5000](http://localhost:5000)

### Running Both Servers

You need to run both the frontend and backend servers simultaneously:
- **Terminal 1**: `npm start` (in root directory for React)
- **Terminal 2**: `cd server && npm run dev` (for Express server)

## 📁 Project Structure

```
cat/
├── src/                    # Frontend React application
│   ├── components/
│   │   ├── Navbar.js          # Navigation bar component
│   │   ├── Navbar.css
│   │   ├── Footer.js          # Footer with developer credits
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.js            # Landing page
│   │   ├── Home.css
│   │   ├── Animals.js         # Browse all animals
│   │   ├── Animals.css
│   │   ├── AnimalDetail.js    # Individual animal details
│   │   ├── AnimalDetail.css
│   │   ├── AdoptionForm.js    # Adoption application form
│   │   ├── AdoptionForm.css
│   │   ├── About.js           # About the organization
│   │   ├── About.css
│   │   ├── Contact.js         # Contact page (MongoDB integrated)
│   │   └── Contact.css
│   ├── data/
│   │   └── animalsData.js     # Sample animal data
│   ├── App.js                 # Main app component with routing
│   ├── App.css                # Global styles
│   ├── index.js               # Entry point
│   └── index.css              # Base styles
├── server/                 # Backend Express application
│   ├── models/
│   │   ├── Contact.js         # Contact form schema
│   │   └── Newsletter.js      # Newsletter subscription schema
│   ├── routes/
│   │   ├── contactRoutes.js   # Contact API endpoints
│   │   └── newsletterRoutes.js # Newsletter API endpoints
│   ├── server.js              # Express server setup
│   ├── package.json           # Backend dependencies
│   └── README.md              # Backend documentation
├── .env                    # Environment variables (not in git)
├── .env.example            # Environment variables template
├── package.json            # Frontend dependencies
└── README.md               # This file
```

## 🎨 Features Breakdown

### Home Page
- Hero section with call-to-action
- Why adopt section with benefits
- Featured animals showcase
- How it works process
- Call-to-action section

### Animals Listing
- Filter by animal type (Dogs/Cats)
- Filter by size (Small/Medium/Large)
- Search by name or breed
- Real-time results count
- Beautiful card-based layout

### Animal Details
- Large hero image
- Comprehensive animal information
- Adoption fee details
- Similar animals recommendations
- Direct adoption application link

### Adoption Form
- Personal information collection
- Living situation assessment
- Pet experience evaluation
- Terms and conditions agreement
- Form validation

### About Page
- Mission statement
- What we do
- Impact statistics
- Core values
- Team members
- Call-to-action

### Contact Page
- Contact information cards
- Contact form with MongoDB integration
- Form validation and error handling
- Social media links
- Map placeholder
- Operating hours
- FAQ section

## 🎯 Current Features with MongoDB

✅ **Contact Form**: Stores all contact submissions in MongoDB
✅ **Newsletter Subscriptions**: Manages email subscriptions with duplicate prevention
✅ **Data Persistence**: All form data is saved to the database
✅ **API Endpoints**: RESTful API for data operations

## 🎯 Future Enhancements

- User authentication and login system
- Admin panel for managing animals and viewing submissions
- Animal data stored in MongoDB (currently using static data)
- Real-time chat support
- Payment gateway integration
- Email notifications for form submissions
- Google Maps integration
- Image upload functionality
- User dashboard for tracking applications
- Advanced search and filtering with MongoDB queries

## 👥 Developers

**Developed with ❤️ by Heer

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

For support, email heer181205@gmail.com or visit our contact page.

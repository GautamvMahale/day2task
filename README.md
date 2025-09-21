# User Authentication System 🔐

A full-stack user authentication system built with React frontend and Express.js backend, featuring JWT authentication, PostgreSQL database, and secure password hashing.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

## ✨ Features

- **User Registration** - Sign up with name, phone, email, and password
- **User Login** - Secure authentication with JWT tokens
- **Protected Routes** - Middleware for authentication verification
- **Password Hashing** - BCrypt encryption for secure password storage
- **PostgreSQL Database** - Relational database for user management
- **React Frontend** - Modern UI with responsive design
- **RESTful API** - Clean API endpoints for authentication

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/user-auth-system.git
   cd user-auth-system
   Setup Backend

bash
cd backend
npm install
Setup Frontend

bash
cd ../frontend
npm install
Database Setup

sql
CREATE DATABASE user_auth_db;
Environment Configuration

bash
# Backend .env file (backend/.env)
DB_HOST=localhost
DB_PORT=5432
DB_NAME=user_auth_db
DB_USER=your_db_user
DB_PASSWORD=your_db_password
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=7d
PORT=4000
Running the Application
Start the Backend Server

bash
cd backend
npm start
Server will run on http://localhost:4000

Start the Frontend Development Server

bash
cd frontend
npm start
Client will run on http://localhost:3000

📁 Project Structure
text
user-auth-system/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   └── userController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── users.js
│   ├── .env.example
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
└── README.md
Example API Requests
User Registration

🎨 Frontend Pages
Landing Page - Welcome page with Sign Up and Sign In buttons

Sign Up Page - User registration form with validation

Sign In Page - User login form with validation

Home Page - Dashboard showing user profile after login

🛡️ Security Features
JWT token-based authentication

Password hashing with bcryptjs

CORS configuration for frontend-backend communication

Environment variables for sensitive data

Input validation and error handling

🧪 Testing
Backend Testing with Postman
Test user registration with new email

Test registration with existing email (should return error)

Test login with correct credentials

Test login with incorrect credentials (should return error)

Test protected routes with valid token

Test protected routes without/invalid token (should return unauthorized)

Frontend Testing
Navigate to http://localhost:3000

Test sign up and sign in flows

Verify home page displays user information after login

Test logout functionality

📸 Screenshots
Sign Up Success	Sign In Success	Home Page
https://screenshots/signup-success.png	https://screenshots/signin-success.png	https://screenshots/home-screen.png
🚀 Deployment
Backend Deployment (Heroku)
bash
# Add PostgreSQL addon
heroku addons:create heroku-postgresql:hobby-dev

# Set environment variables
heroku config:set JWT_SECRET=your_production_jwt_secret
heroku config:set NODE_ENV=production

# Deploy
git push heroku main
Frontend Deployment (Netlify/Vercel)
Build the React app: npm run build

Deploy the build folder to your preferred platform

🤝 Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Author
Gautam Vianayk Mahale - GitHub Profile

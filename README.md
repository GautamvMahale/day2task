
# User Authentication System 🔐

A **full-stack user authentication system** built with **React frontend** and **Express.js backend**, featuring **JWT authentication**, **PostgreSQL database**, and **secure password hashing**.

---

## 🛠 Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge\&logo=postgresql\&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge\&logo=JSON%20web%20tokens\&logoColor=white)

---

## ✨ Features

* 📝 **User Registration** – Sign up with name, phone, email, and password
* 🔐 **User Login** – Secure authentication with JWT tokens
* 🚦 **Protected Routes** – Middleware for authentication verification
* 🔑 **Password Hashing** – BCrypt encryption for secure password storage
* 🗄️ **PostgreSQL Database** – Relational DB for user management
* ⚛️ **React Frontend** – Modern UI with responsive design
* 🌐 **RESTful API** – Clean API endpoints for authentication

---

## 🚀 Quick Start

### 🔧 Prerequisites

* Node.js (v14 or higher)
* PostgreSQL (v12 or higher)
* npm or yarn

### ⚡ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/user-auth-system.git
   cd user-auth-system
   ```

2. **Setup Backend**

   ```bash
   cd backend
   npm install
   ```

3. **Setup Frontend**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Database Setup**

   ```sql
   CREATE DATABASE user_auth_db;
   ```

5. **Environment Configuration**

   Create `backend/.env` file:

   ```bash
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=user_auth_db
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   JWT_SECRET=your_super_secret_jwt_key
   JWT_EXPIRES_IN=7d
   PORT=4000
   ```

---

## ▶️ Running the Application

### Backend

```bash
cd backend
npm start
```

Server will run on 👉 [http://localhost:4000](http://localhost:4000)

### Frontend

```bash
cd frontend
npm start
```

Client will run on 👉 [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
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
```

---

## 📌 Example API Requests

### 📝 User Registration

```http
POST /api/users/signup
```

### 🔑 User Login

```http
POST /api/users/signin
```

### 👤 Get Current User

```http
GET /api/users/me
```

---

## 🎨 Frontend Pages

* **Landing Page** – Welcome page with Sign Up / Sign In buttons
* **Sign Up Page** – Registration form with validation
* **Sign In Page** – Login form with validation
* **Home Page** – User profile dashboard after login

---

## 🛡️ Security Features

* ✅ JWT token-based authentication
* ✅ Password hashing with `bcryptjs`
* ✅ CORS configuration for frontend-backend communication
* ✅ Environment variables for sensitive data
* ✅ Input validation and error handling

---

## 🧪 Testing

### Backend (Postman / Hoppscotch)

* ✅ Register with new email → success
* ✅ Register with existing email → error
* ✅ Login with correct credentials → success
* ✅ Login with wrong credentials → error
* ✅ Access `/me` with token → success
* ✅ Access `/me` without token → unauthorized

### Frontend

* ✅ Sign up & sign in flows
* ✅ Home page displays user info
* ✅ Logout clears token

---

## 📸 Screenshots

| Sign Up Success                                    | Sign In Success                                    | Home Page                                    |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------- |
| ![Sign Up](https://screenshots/signup-success.png) | ![Sign In](https://screenshots/signin-success.png) | ![Home](https://screenshots/home-screen.png) |

---

## 🚀 Deployment

### Backend (Heroku)

```bash
# Add PostgreSQL addon
heroku addons:create heroku-postgresql:hobby-dev

# Set environment variables
heroku config:set JWT_SECRET=your_production_jwt_secret
heroku config:set NODE_ENV=production

# Deploy
git push heroku main
```

### Frontend (Netlify/Vercel)

```bash
npm run build
```

Deploy the `build` folder to your preferred platform.

---

## 🤝 Contributing

1. Fork the project
2. Create your feature branch

   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes

   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch

   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** – see the LICENSE file for details.

---

## 👨‍💻 Author

**Gautam Vinayak Mahale**
🔗 [GitHub](https://github.com/GautamvMahale) | [LinkedIn](https://linkedin.com/in/gautam-mahale-a373b4248)

---



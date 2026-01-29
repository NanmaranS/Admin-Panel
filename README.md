# 🛠️ MERN Admin User Management – Full Stack Project

A full **MERN stack project** with **JWT authentication**, **admin panel**, **user management**, and fully structured **frontend + backend**.

This project currently allows:

- User registration  
- Admin login only (normal users cannot login yet)  
- Admin-only routes & dashboard  
- View all users (admin only)  
- Delete user by ID (admin only)  
- Protected routes with JWT  

---

## 🚀 Features

- **User Registration** (`/register`) – normal users can register  
- **Admin Login** (`/login`) – only admin can login  
- **JWT Authentication** (`jwtExistMiddleware`)  
- **Admin-only routes** (`adminMiddleware / protectedAdmin`)  
- **View all users** (`GET /admin`)  
- **Delete user by ID** (`DELETE /admin/:id`)  
- Fully structured **MERN stack project**  

---

## 📡 Backend Routes

| Method | Route           | Middleware                          | Description                     |
|--------|----------------|------------------------------------|---------------------------------|
| POST   | /register       | -                                  | Register new user               |
| POST   | /login          | -                                  | Admin login only                |
| GET    | /admin          | jwtExistMiddleware, adminMiddleware | Get all users (admin only)      |
| DELETE | /admin/:id      | jwtExistMiddleware, adminMiddleware | Delete user by ID (admin only) |

> ⚠️ Note: Normal users cannot login yet. Only admin JWT works for protected routes.

---

## ⚙️ Backend Setup

### 1️⃣ Clone Repo

```bash
git clone https://github.com/NanmaranS/Admin-Panel
cd Auth/backend
2️⃣ Install Dependencies
npm install

3️⃣ Environment Variables

Create .env file in backend/:

PORT=5001
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret

4️⃣ Start Backend Server
npm run dev


Backend will run at: http://localhost:5001

⚡ Backend Folder Structure
backend/
├─ src/
│  ├─ Config/
│  │  └─ db.js
│  ├─ Controllers/
│  │  ├─ adminController.js
│  │  ├─ loginController.js
│  │  └─ registerController.js
│  ├─ Middleware/
│  │  ├─ adminMiddleware.js
│  │  └─ jwtExistMiddleware.js
│  ├─ Models/
│  │  └─ registerModel.js
│  ├─ Routers/
│  │  ├─ adminRouter.js
│  │  ├─ loginRouter.js
│  │  └─ registerRouter.js
│  └─ main.js
├─ package.json
└─ .env

🌐 Frontend Setup
1️⃣ Navigate to Frontend
cd Auth/frontend
npm install

2️⃣ Start Frontend
npm run dev


Frontend will run at: http://localhost:3000

⚡ Frontend Folder Structure
frontend/
├─ src/
│  ├─ Pages/
│  │  ├─ Login.jsx          (admin login only)
│  │  ├─ Register.jsx       (user registration)
│  │  └─ Admins/            (Admin pages/components)
│  ├─ Components/
│  │  └─ Shared/
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ index.css
│  └─ App.css

🛠️ Technologies Used

Backend: Node.js, Express.js, MongoDB / Mongoose, JWT

Frontend: React, React Router, Axios, CSS

Authentication: JWT-based, admin & user roles

📝 Notes

Normal users can register but cannot login yet.

Only admin JWT is valid for protected routes.

Never push .env to GitHub.

Use .env.example if sharing the project.

Frontend pages are React + Axios connected to backend API.

🔮 Future Improvements

Enable login for normal users

Add frontend user dashboard

Add product & cart system

Add password hashing (bcrypt)

Add refresh tokens & role-based permissions

Add toast notifications for login/register actions

🙌 Author

Developed by Nanmaran using MERN stack.

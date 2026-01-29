# 🛠️ MERN E-Commerce & Admin Panel – Full Stack Project

A full **MERN stack project** with **JWT authentication**, **admin panel**, **user management**, **product & cart system**, and fully structured **frontend + backend**.

This project allows:

- User registration & login  
- Admin-only routes & dashboard  
- Product management & cart  
- Protected routes with JWT  
- Frontend React pages for login, register, admin dashboard, products, and cart  

---

## 🚀 Features

- **User Registration & Login** (`/register`, `/login`)  
- **JWT Authentication** (`jwtExistMiddleware`)  
- **Admin-only routes** (`adminMiddleware / protectedAdmin`)  
- **View all users** (`GET /admin`)  
- **Delete user by ID** (`DELETE /admin/:id`)  
- **Add products to cart** (`POST /cart`)  
- **View Cart** (`GET /cart`)  
- **Frontend React Pages**: login, register, admin dashboard, products, cart  
- Fully structured **MERN stack project**  

---

## 📡 Backend Routes

| Method | Route           | Middleware                          | Description                     |
|--------|----------------|------------------------------------|---------------------------------|
| POST   | /register       | -                                  | Register new user               |
| POST   | /login          | -                                  | Login user and get JWT          |
| GET    | /admin          | jwtExistMiddleware, adminMiddleware | Get all users (admin only)      |
| DELETE | /admin/:id      | jwtExistMiddleware, adminMiddleware | Delete user by ID (admin only) |
| POST   | /cart           | jwtExistMiddleware                 | Add product to cart             |
| GET    | /cart           | jwtExistMiddleware                 | Get all cart items              |

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
│  │  ├─ registerController.js
│  │  └─ productController.js
│  ├─ Middleware/
│  │  ├─ adminMiddleware.js
│  │  └─ jwtExistMiddleware.js
│  ├─ Models/
│  │  ├─ registerModel.js
│  │  └─ productModel.js
│  ├─ Routers/
│  │  ├─ adminRouter.js
│  │  ├─ loginRouter.js
│  │  ├─ registerRouter.js
│  │  └─ productRouter.js
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
│  │  ├─ Login.jsx
│  │  ├─ Register.jsx
│  │  └─ Admins/       (Admin pages/components)
│  ├─ Components/
│  │  ├─ Products/
│  │  ├─ Cart/
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
Never push .env to GitHub.

Use .env.example if sharing the project.

Admin JWT is required for all admin routes.

Frontend pages are React + Axios connected to backend API.

🔮 Future Improvements
Add password hashing (bcrypt)

Add refresh tokens

Add role-based permissions

Add frontend form validations

Add toast notifications for login/register actions

Add product CRUD from admin panel

Add orders & checkout system

🙌 Author
Developed by Nanmaran using MERN stack.

---


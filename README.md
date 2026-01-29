Admin User Management Panel

A simple Node.js + Express backend for managing users with JWT authentication and admin-only access.

This backend allows an admin to view users, delete users, and protect routes using JWT + middleware.

Features

JWT authentication (jwtExistMiddleware)

Admin-only routes (protectedAdmin)

List all users (GET /admin)

Delete user by ID (DELETE /admin/:id)

Clean and responsive API design

Ready to connect with frontend

Routes
Admin Routes
Method	Route	Middleware	Description
GET	/admin	jwtExistMiddleware, protectedAdmin	Get all users (admin only)
DELETE	/admin/:id	jwtExistMiddleware, protectedAdmin	Delete a user by ID (admin only)
Setup / Installation

Clone repo

git clone https://github.com/NanmaranS/Admin-Panel.git
cd Admin-Panel/backend


Install dependencies

npm install


Environment variables
Create .env in backend:

PORT=5001
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret


Start server

npm run dev


Server will run at: http://localhost:5001

Usage

Only admin users can access /admin routes.

JWT token must be sent in Authorization header:

Authorization: Bearer <your_token_here>


Example request to delete user:

DELETE /admin/USER_ID
Authorization: Bearer <admin_token>


Example request to get all users:

GET /admin
Authorization: Bearer <admin_token>

Folder Structure
backend/
├─ src/
│  ├─ Controllers/
│  │  ├─ adminController.js
│  │  ├─ deleteController.js
│  ├─ Middleware/
│  │  ├─ jwtExistMiddleware.js
│  │  ├─ protectedAdmin.js
│  ├─ Routers/
│  │  ├─ adminRouter.js
│  ├─ Models/
│  │  ├─ registerModel.js
│  ├─ Config/
│  │  ├─ db.js
│  └─ main.js
├─ package.json
├─ .env
└─ .gitignore

Technologies

Node.js

Express.js

MongoDB / Mongoose

JWT Authentication

Notes

Make sure .env is never pushed to GitHub.

Use .env.example for sharing environment variables.

Admin token required for all admin routes.

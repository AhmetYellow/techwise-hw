📖 Quran & Book Reading Tracker – MERN Full House
This project is part of the final homework assignment for the MERN Full House course. It demonstrates how to connect all parts of the MERN stack — from backend APIs to frontend UI and database integration.

✅ What Levels I Completed
🟢 Level 1 – Backend Bootup
Built a basic Express server

Added GET /users and POST /users routes

Sends/receives JSON

Used nodemon for development

Tested with Insomnia

🟢 Level 2 – Database Connection
Connected to MongoDB using Mongoose

Created a User model

Full API integration: GET, POST, PUT

Saved and updated user data like name, email, role, Quran pages, and book pages

🟢 Level 3 – React Frontend
Set up a React frontend using Vite

Fetched data from the backend

Displayed user dashboard with Quran and book tracking

Created forms to register and log in users

🟢 Level 4 – Full Integration
Connected frontend and backend for full CRUD

Used localStorage to simulate sessions

Added login protection, logout, and user state handling

Form UX with basic validation and feedback

🚀 How to Run It
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/mern-reading-tracker.git
cd mern-reading-tracker

2. Backend Setup
bash
Copy
Edit
cd backend
npm install
npm run dev
Runs on http://localhost:3000

Make sure MongoDB is running locally or update URI

3. Frontend Setup
bash
Copy
Edit
cd ../frontend
npm install
npm run dev
Runs on http://localhost:5173

💡 What Works
✅ User registration and login

✅ Passwords are securely hashed using bcrypt

✅ Users can:

View Quran pages read

View book pages read

Add to both from the dashboard

✅ Auth state stored in localStorage

✅ Protected dashboard with redirect if not logged in

✅ Logout functionality

⚠️ What Doesn’t Work (Yet)
❌ No JWT/session token implementation yet (localStorage only)

❌ No charts or history logs

❌ No deployment 

❌ No error styling or fancy form validation

🧩 Optional Features for Later
Track daily logs with timestamps

Add progress bars and reading goals

Add charts using Chart.js or Recharts

Move to JWT-based authentication

Deploy 
# 💼 Job Board Application

A full-stack job board web application where employers can post jobs and candidates can apply with resumes.

## 🚀 Features
- 🏠 **Home Page**: Welcome message and featured job listings  
- 📋 **Job Listings Page**: Browse all available jobs  
- 📄 **Job Detail Page**: View detailed job information  
- 🧑‍💼 **Employer Dashboard**: Manage job postings  
- 👩‍🎓 **Candidate Dashboard**: Manage profile and job applications  
- 📝 **Job Application Process**: Apply with resume upload  
- 🔍 **Search Functionality**: Find jobs quickly  
- 📧 **Email Notifications**: Get notified after successful applications  
- 🔐 **Authentication**: Secure login/signup with JWT  
- 📱 **Responsive Design**: Works on all devices  

## 🛠️ Tech Stack
**Frontend:**
- React.js  
- Framer Motion (animations)  
- Axios (API calls)  

**Backend:**
- Node.js & Express.js  
- MongoDB with Mongoose  
- Multer (resume upload)  
- JWT & bcryptjs (authentication & security)  

**Other Tools:**
- Nodemailer (email notifications)  
- Git & GitHub (version control)  

Backend Setup
bash
Copy
Edit
cd backend
npm install
Create a .env file inside backend/ with:

env
Copy
Edit
MONGO_URI=mongodb://localhost:27017/jobboard
JWT_SECRET=yourStrongSecret
PORT=5000
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=yourapppassword
Run the server:

bash
Copy
Edit
node server.js
3️Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm start
Frontend will run on http://localhost:3000
Backend will run on http://localhost:5000


🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.



<img width="875" height="744" alt="image" src="https://github.com/user-attachments/assets/8c4e9570-a3ce-498a-a267-adb2162260fd" />


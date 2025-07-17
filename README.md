# 📦 Asset Management System

![GitHub repo size](https://img.shields.io/github/repo-size/iamshubham202002/Asset-mgmtBLw)
![GitHub stars](https://img.shields.io/github/stars/iamshubham202002/Asset-mgmtBLw?style=social)
![GitHub forks](https://img.shields.io/github/forks/iamshubham202002/Asset-mgmtBLw?style=social)
![GitHub license](https://img.shields.io/github/license/iamshubham202002/Asset-mgmtBLw)

A **full-stack Asset Management System** to help organizations manage departments, products, and assets efficiently. Built with **React**, **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Features

✅ Add, update, delete, and view departments  
✅ Add, update, delete, and view products/assets  
✅ Search & filter assets easily  
✅ RESTful API backend  
✅ MongoDB database integration

---

## 🖼️ Screenshots!

![alt text](<Screenshot (68)-1.png>) ![alt text](<Screenshot (67)-1.png>)

## ⚙️ Tech Stack

| Layer    | Tech                          |
|----------|-------------------------------|
| Frontend | React, Tailwind CSS (if used) |
| Backend  | Node.js, Express.js           |
| Database | MongoDB                       |
| Tools    | Git, VS Code, npm             |

---

## 📂 Project Structure

```plaintext
Asset-mgmtBLw/
├── client/            # React frontend
│   ├── src/           # React source files
│   ├── public/        # Public assets
│   ├── package.json   # Frontend dependencies
│   └── ...
├── server/            # Node.js backend
│   ├── models/        # Mongoose models
│   ├── routes/        # Express routes
│   ├── controllers/   # Controllers
│   ├── server.js      # Entry point
│   └── ...
├── .env               # Environment variables
├── .gitignore
├── package.json       # Backend dependencies
├── README.md
└── ...


🛠️ Getting Started
📥 Clone the repository
bash
Copy
Edit
git clone https://github.com/iamshubham202002/Asset-mgmtBLw.git
cd Asset-mgmtBLw
⚙️ Install backend dependencies
bash
Copy
Edit
npm install
⚙️ Install frontend dependencies
bash
Copy
Edit
cd client
npm install
🗝️ Add environment variables
Create a .env file inside server/:

env
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=5000
🚀 Run the application
Backend:

bash
Copy
Edit
# In the root folder
npm run server   # If using nodemon
Frontend:

bash
Copy
Edit
cd client
npm run dev
Visit http://localhost:5173 (or your Vite port) to view the frontend.

✅ To-Do
 Add user authentication (JWT)

 Add role-based permissions (Admin/User)

 Deploy on Vercel/Render/Heroku

 Write unit tests

🤝 Contributing
Pull requests are welcome!
1️⃣ Fork the repository
2️⃣ Create your feature branch (git checkout -b feature/YourFeature)
3️⃣ Commit your changes (git commit -m 'Add some feature')
4️⃣ Push to the branch (git push origin feature/YourFeature)
5️⃣ Open a Pull Request

📜 License
This project is licensed under the MIT License — see the LICENSE file for details.

📧 Contact
Created by Shubham Pandey — feel free to connect!

⭐ Show your support
If you like this project, give it a ⭐ on GitHub!

yaml
Copy
Edit

---

## 📸 **Next Steps**

✅ **1️⃣ Add screenshots**

- Create a `screenshots/` folder in your project root.
- Save UI screenshots: `home.png`, `departments.png` etc.
- Push them so they display properly in the README.

---

✅ **2️⃣ Replace placeholders**

- Replace `your_mongodb_connection_string` with your actual MongoDB URI (but **never push the `.env`**!).
- Update the **LICENSE** if you want a license file.
- Update links if you deploy the project online.

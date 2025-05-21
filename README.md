Thanks for sharing the screenshots! You're right — the first one has a **clean, modern, and visually structured** look, while your current YAML-based README looks more like a config file than a polished GitHub presentation.

Here’s a **cleaned-up, modern, and nicely formatted Markdown README** version of your blog project, styled like the AI Article Summarizer one:

---

# 📝 Blog App

> A full-featured **Blog Application** built with **Node.js**, **Express.js**, **MongoDB**, and **EJS** for server-side rendering.

This app allows users to create, read, update, and delete blog posts with secure **JWT-based authentication**, image upload support via **Multer**, and server-rendered views with **EJS**.

---

## 🌟 Overview

This web application is designed for blogging with a full authentication and file upload system. It uses:

* **Node.js** and **Express.js** for the backend logic
* **MongoDB** for data storage
* **EJS** for server-side UI rendering
* **Multer** for handling image uploads
* **JWT** for securing routes and user sessions

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (via Mongoose ODM)
* **Templating Engine:** EJS
* **Authentication:** JWT (JSON Web Tokens)
* **File Uploads:** Multer
* **Other Tools:** dotenv, bcrypt, express-validator

---

## 📁 Project Structure

```
blog-app/
├── controllers/        # Route logic and handlers
├── models/             # Mongoose models (User, Post)
├── routes/             # Express routes
├── views/              # EJS templates
│   ├── partials/       # Header, footer, etc.
│   └── pages/          # Main view pages
├── uploads/            # Uploaded images
├── public/             # Static files (CSS, JS)
├── .env                # Environment variables
├── app.js              # App entry point
└── package.json
```

---

## 🔐 Authentication

* Uses **JWT tokens** to authenticate and authorize users.
* Protected routes require a valid token in the `Authorization` header.

---

## 📤 File Uploads

* **Multer** handles image uploads.
* Uploaded images are stored in the `/uploads` folder.

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v14+)
* MongoDB (local or Atlas)
* npm or yarn

### Installation

```bash
git clone https://github.com/anshul22-hub/Blog.git
cd Blog
npm install
```

### Environment Setup

Create a `.env` file in the root directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Run the Application

```bash
npm start
```

Visit `http://localhost:5000` in your browser.

---

## 📷 Screenshots

> *Add screenshots of your app here for a better preview.*

---

## 🤝 Contributing

Contributions and suggestions are welcome! Please open issues or submit pull requests to help improve the app.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 📬 Contact

Created by **Anshul** – feel free to reach out via [GitHub](https://github.com/anshul22-hub).

---

Let me know if you'd like a badge section, live demo link, or deployment instructions (e.g., for Render, Railway, or Vercel).

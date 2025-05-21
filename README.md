
```markdown
# 📝 Blog App

A full-featured **Blog Application** built with **Node.js**, **Express.js**, **MongoDB**, and **EJS** for server-side rendering. This application supports user authentication using **JWT**, file uploads with **Multer**, and allows users to create, view, update, and delete blog posts.

## 🚀 Features

- ✍️ Create, read, update, and delete blog posts
- 🔐 User authentication using JSON Web Tokens (JWT)
- 🖼️ Upload blog cover images with Multer
- 🧠 Server-side rendering using EJS templates
- 🗃️ MongoDB for storing user and blog data
- 📦 RESTful API architecture
- 🌐 Clean and minimal UI with EJS views

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose ODM)
- **Templating Engine:** EJS
- **Authentication:** JWT (JSON Web Tokens)
- **File Uploads:** Multer
- **Other Tools:** dotenv, bcrypt, express-validator

## 📁 Project Structure

```

blog-app/
├── controllers/        # Route logic and handlers
├── models/             # Mongoose models (User, Post)
├── routes/             # Express routes
├── views/              # EJS templates
│   ├── partials/       # Header, footer, etc.
│   └── pages/          # Individual EJS views
├── uploads/            # Uploaded images
├── public/             # Static files (CSS, JS)
├── .env                # Environment variables
├── app.js              # Entry point of the app
└── package.json

````

## 🔐 Authentication

- Uses **JWT tokens** to securely authenticate users.
- Protected routes require a valid token in the request headers.

## 📤 File Uploads

- Uses **Multer** to handle image uploads for blog posts.
- Uploaded files are stored locally in the `/uploads` directory.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

```bash
git clone https://github.com/anshul22-hub/Blog.git
cd Blog
npm install
````

### Set up Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Run the Application

```bash
npm start
```

Visit `http://localhost:5000` in your browser.

## 📷 Screenshots

*(Add some screenshots of your application UI here if available)*

## 🙌 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/anshul22-hub/Blog/issues).

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 📬 Contact

Created by [Anshul](https://github.com/anshul22-hub) – feel free to reach out!

```

---

Let me know if you want to include **screenshots**, **API documentation**, or a **Postman collection**.
```

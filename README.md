```yaml
name: Blog App
description: >
  A full-featured Blog Application built with **Node.js**, **Express.js**,
  **MongoDB**, and **EJS** for server-side rendering.  
  The app supports user authentication with **JWT**, file uploads with
  **Multer**, and lets users create, read, update, and delete blog posts.

features:
  - Create, read, update, and delete blog posts
  - User authentication using JSON Web Tokens (JWT)
  - Upload blog-cover images with Multer
  - Server-side rendering with EJS templates
  - MongoDB persistence for users and posts
  - RESTful API architecture
  - Clean, minimal UI built with EJS views

tech_stack:
  backend: Node.js & Express.js
  database: MongoDB (via Mongoose ODM)
  templating_engine: EJS
  authentication: JWT
  file_uploads: Multer
  other_tools:
    - dotenv
    - bcrypt
    - express-validator

project_structure: |
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

authentication: |
  Secures endpoints with JWTs.  
  Protected routes require a valid token in the `Authorization` header
  (`Bearer <token>`).

file_uploads: |
  Handles image uploads through Multer.  
  Uploaded files are stored locally in the `/uploads` directory (configurable).

getting_started:
  prerequisites:
    - Node.js ≥ 14
    - MongoDB (local instance or Atlas cluster)
    - npm or yarn
  installation:
    - git clone https://github.com/anshul22-hub/Blog.git
    - cd Blog
    - npm install
  environment_variables:
    - PORT=5000
    - MONGO_URI=your_mongodb_connection_string
    - JWT_SECRET=your_jwt_secret
  run:
    - npm start
    - Open <http://localhost:5000> in your browser

screenshots: "Add screenshots of the UI here (optional)"

contributing: |
  Contributions, issues, and feature requests are welcome—check the GitHub
  issues page.

license: MIT

contact:
  name: Anshul
  github: https://github.com/anshul22-hub
```


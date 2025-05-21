require('dotenv').config();

const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');

const Blog = require('./models/blog');

const userRoute = require('./routes/user');
const blogRoute = require('./routes/blog');

const { checkForAuthenticationCookie } = require("./middlewares/authentication");

const app = express();
const PORT = process.env.PORT || 8000;

//connect to mongodb
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"));

app.set("view engine" , "ejs"); // server side rendering using ejs template engine
app.set("views" , path.resolve("./views")); // path to the view folder


//middleware
app.use(express.urlencoded({ extended : true }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));



//routes
app.get("/", async (req , res) => {
  const allBlogs = await Blog.find({});
  res.render("home", {
    user: req.user,
    blogs: allBlogs,
  });
});

app.use("/user" , userRoute); 
app.use("/blog" , blogRoute); 


app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
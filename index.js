const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/connectDB");
const cors = require("cors");

const app = express();
// const dashboardRoutes = require("./api/routes/dashboard");
// const userRoutes = require("./api/routes/user");

//middleware
//pour accéder aux bodys des requests
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
// app.use("/api/user", userRoutes);
// app.use("/api/dashboard", dashboardRoutes);

const PORT = process.env.PORT || 5000;

const product = require("./api/product");

app.use("/api/product", product);

// app.listen(PORT, () => {
//   console.log(`sever is running in port ${PORT}`);
// });

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

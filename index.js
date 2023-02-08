const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const dashboardRoutes = require("./api/routes/dashboard");
const userRoutes = require("./api/routes/user");

//middleware
//pour accéder aux bodys des requests
// app.use(
//   cors({
//     origin: [
//       "http://localhost:3000",
//       "https://my-dash-board-md.vercel.app/",
//       "https://my-dashboard-1h54ooj65-matthieudegny.vercel.app",
//     ],
//   })
// );

// const corsOptions = {
//   origin: [
//     "http://localhost:3000",
//     "https://my-dash-board-md.vercel.app/",
//     "https://my-dashboard-1h54ooj65-matthieudegny.vercel.app",
//   ],
// };
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/user", userRoutes);
app.use("/api/dashboard", dashboardRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongodb connected");
    app.listen(PORT, () => {
      console.log(`Server is listening on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log({ err });
    process.exit(1);
  });

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

/* CONFIGURATIONS */

dotenv.config();
const app = express()

app.use(express.json());

// Configure CORS to allow requests from specific origins
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend's actual domain
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Add the HTTP methods you want to allow
  credentials: true, // If you're using cookies or sessions, set this to true
  optionsSuccessStatus: 204, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

// secure Express apps by setting HTTP response headers appropriately
// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy(
//     { policy: "cross-origin"}
// ))

// logging middleware
// app.use(morgan("common"));

// Parse incoming request bodies in a middleware before your controllers, 
// available under the req.body property.
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

/* ROUTES */
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/tasks", taskRoutes);

/* MONGOOSE SETUP and App listener */
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));

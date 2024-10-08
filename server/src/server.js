import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import userRoutes from "./routes/user.js";
import classRoutes from "./routes/class.js";

//* CONFIGURATIONS
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());
app.use(morgan("dev"));

//* MONGOOSE CONFIGURATION
mongoose.set("strictQuery", true);
const PORT = 6001;
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
	})
	.catch((error) => console.log(`${error} did not connect`));

//* ROUTES
app.use("/user", userRoutes);
app.use("/class", classRoutes);

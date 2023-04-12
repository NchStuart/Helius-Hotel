import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import { feedbackRoutes } from "./routes/index";
import { userRoutes } from "./routes/user";

const app = express();

app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.use(bodyParser.json());

app.use(express.static("uploads"));

app.use(cors());

app.use(morgan("dev"));

app.use("/heliusapi/v1", feedbackRoutes, userRoutes);


export { app };

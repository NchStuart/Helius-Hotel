import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import { userRoutes } from "./routes/index";

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

app.use("/heliusapi/v1", userRoutes);


export { app };

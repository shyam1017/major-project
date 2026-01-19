import connection from "./src/config/dbConfig.js";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";

dotenv.config();

const port = process.env.PORTNUM;
const app = express();


app.use(helmet());
app.use(express.json());
app.use(cookieParser);


app.listen(port, () => {
    console.log(`listning to port ${port}`);
})
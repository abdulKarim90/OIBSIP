import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());


app.use("/", (req, res) => {
  res.status(200).send("<h1>Karim</h1>");
});
export default app;

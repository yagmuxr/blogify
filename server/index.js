import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import postRoutes from "./routes/posts";

const app = express();
dotenv.config(); //.env dosyasını kullanabilmek için. process.env -> için

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    author: "coding with yagmur :(",
    message: "happy new year : ) ",
  });
});
//mesela localhost:5000/'den sonrası
app.use("/posts", postRoutes);
const PORT = process.env.Port || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.CONNECTION_URL, () => {
      console.log(`Server is running on port : ${Port}`);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });

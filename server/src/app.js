import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(cookieParser());

app.get("/", (req, res) => {
  console.log("get!");
  return res.status(200).json({ message: "하이" });
});

app.listen(4000, () => {
  console.log("Server is running...");
});

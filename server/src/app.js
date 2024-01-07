import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(cookieParser());
app.use(cors());

app.get("/", async (req, res) => {
  console.log("get!");
  try {
    throw new Error("asd");
    return res.status(200).json({ message: "asd" });
  } catch (error) {
    console.log(error.message); // error 객체 메세지를 받음
    return res.status(404).json({ message: error.message });
  }
});

app.listen(4000, () => {
  console.log("Server is running...");
});

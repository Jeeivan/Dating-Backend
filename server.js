import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import formRouter from "./routes/api/form.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/form', formRouter)

mongoose.connect(process.env.DATABASE_URL);

const port = process.env.PORT || 4000;
 
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});

app.get("/", async (req, res) => {
res.json({ message: "I will be the pirate king!" });
});
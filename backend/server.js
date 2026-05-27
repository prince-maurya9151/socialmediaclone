import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import {fileURLToPath} from 'url'
import postsRoutes from "./routes/posts.routes.js";
import userRoutes from "./routes/user.routes.js"
dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin')
  next()
})

app.use('/uploads' , express.static(path.join(__dirname,'uploads')))
app.use(postsRoutes);
app.use(userRoutes)

// app.use(express.static("uploads"))


const start = async ()=>{
  const connectDB = await mongoose.connect("mongodb+srv://princemaurya9123_db_user:PVDP27wThaVdVPk1@linkedinclone.yztzpr1.mongodb.net/?retryWrites=true&w=majority&appName=linkedinclone")

  app.listen(9090,()=>{
    console.log("Server is running on port 9090")
  })
}
start();
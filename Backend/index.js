import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import CustomerRoute from "./routes/CustomerRoute.js";

const app = express();
mongoose.connect('mongodb://localhost:27017/CustomerManagement',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(CustomerRoute);

app.listen(5000, ()=> console.log('Server up and running...'));
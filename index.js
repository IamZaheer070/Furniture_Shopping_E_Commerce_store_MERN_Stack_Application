import  express from 'express';
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js';
import morgan from 'morgan';
import routes from './routes/routes.js'
import cors from 'cors'
//object
const app = express();
//configure env
dotenv.config();
//databse connection
connectDB();
//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
//routes
app.use('/api/v1/auth',routes)
//rest api
app.get("/",(req, res)=>{
    res.send("<H1>Furniture shopping e commerce</H1>");
});
const Port = process.env.Port||8080;
app.listen(Port,()=>{
    console.log(`Server is running on ${process.env.Dev_Mode} on port ${Port}`)

});
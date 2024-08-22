import express from "express";
import {
    loginController, 
    registerController,
    testController
} from '../controller/controller.js'
import { isAdmin, requireSignIn } from "../middleware/middleware.js";
//router ob
const router = express.Router();
//routing
//register 
router.post('/register', registerController)
router.post('/login', loginController)
//test route
router.get('/test', requireSignIn, isAdmin ,testController);
//protexted routs
router.get('user-auth', requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
});
export default router
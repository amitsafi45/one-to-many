import {  NextFunction ,Request,Response} from "express";
import ErrorMsg from '../error/error.custom';
const errorHandler=async(error:ErrorMsg,req:Request,res:Response,next:NextFunction)=>{
   res.status(error.statuscode|| 500).send({"error":true,"message":error.message || "Internal Server Error"})
}
export default errorHandler
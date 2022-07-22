import { NextFunction,Request,Response } from "express"
import { userData } from "../interface/user.interface"
import userService from "../service/user.service"
import expressAsyncHandler from "express-async-handler"
class UserController{
  add=expressAsyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
       const data:userData=req.body
       const userResult= await userService.addService(data)
      res.status(200).send(userResult)
  })
}
export default new UserController()
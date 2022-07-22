import { userData, userFalseResponse, userTrueResponse } from "../interface/user.interface"
import { AppDataSource } from "../config/developent.config"
import {User} from '../entity/user.entity'
import ErrorMsg from "../error/error.custom"

class UserService{
    addService=async(data:userData):Promise<userTrueResponse|userFalseResponse>=>{
         const user=new User()
         user.name=data.name
         user.Address=data.Address
        const userRepo=await AppDataSource.getRepository(User)
        const useradd= await userRepo.save(user) 
        console.log(useradd)
         if (useradd){
           return({
            success:true,
            message:"Data Inserted",
            data:useradd
           })
         } else{
            const err=new ErrorMsg("data not insert")
            err.message="Data Not Inserted"
            err.statuscode=401
            throw err
         }

    }

}
export  default new UserService()
import {User} from '../entity/user.entity'
import ErrorMsg from '../error/error.custom'
interface userData{
    name:string
    Address:string
}
interface userTrueResponse{
    success:boolean,
    message:string,
    data:User
}
interface userFalseResponse{
   err:ErrorMsg
}
export {userData,userTrueResponse,userFalseResponse}
import express, { Application } from 'express'
import { AppDataSource } from './config/developent.config'
import errorHandler from './middleware/errorHandler.middleware'
import compression from 'compression'
import 'dotenv/config'
import morgan from 'morgan'
import userRouter from './routes/user.routes'
class Index{
    private app:Application
    constructor(){
       this.app=express()
       this.intializeMiddleWare()
       
       this.app.listen(process.env.SERVER_PORT,async()=>{
           await AppDataSource.initialize()
        console.log(`LISTENING AT ${process.env.SERVER_PORT}`)
       })
    }
    private intializeMiddleWare(){
        this.app.use(compression())
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(morgan('combined'))
        this.app.use('/api',userRouter)
        this.app.use(errorHandler)
        
    }
}
const main=new Index()
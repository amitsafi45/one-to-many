import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./user.entity"
@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    "id": number
     @Column()
    "url": string
 @ManyToOne(() => User, (user) => user.photos)
 @JoinColumn({name:"user_name",referencedColumnName: "name" })
    "user": User
}

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Photo } from "./photo.entity"
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    "id": number
    @Column({unique:true,
    nullable:false})
    "name": string
    @Column()
    "Address":string
    @OneToMany(() => Photo, (photo) => photo.user)
    "photos": Photo[]
}
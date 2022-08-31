import { Column, CreateDateColumn, Entity,  PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';


@Entity('course')
export class Course {
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:"uuid"})
    uuid:uuidv4

    @Column('text')
    course_name:string
    
    @Column('text')
    description:string

    @CreateDateColumn({type:'timestamp'})
    starting_date:Date

    @Column()
    ending_date:Date

    @Column('boolean')
    record_status:boolean

    @CreateDateColumn()
    created_at:Date

    @Column('text')
    created_by:string

    @Column()
    updated_at:Date

    @Column()
    deleted_at:Date
}

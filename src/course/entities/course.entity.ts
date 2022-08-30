import { Column, CreateDateColumn, Entity,  PrimaryGeneratedColumn } from "typeorm";

@Entity('course')
export class Course {
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:"uuid"})
    uuid:uuid

    @Column('text')
    course_name:string
    
    @Column('text')
    description:string

    @CreateDateColumn({type:'timestamp'})
    starting_date:Date

    @CreateDateColumn()
    ending_date:Date

    @Column('boolean')
    record_status:boolean

    @CreateDateColumn()
    created_at:Date

    @Column('text')
    created_by:string

    @CreateDateColumn()
    updated_at:Date

    @CreateDateColumn()
    deleted_at:Date
}

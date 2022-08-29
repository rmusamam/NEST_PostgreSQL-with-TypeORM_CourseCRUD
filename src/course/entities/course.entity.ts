import { Column, Entity,  PrimaryGeneratedColumn } from "typeorm";

@Entity('course')
export class Course {
    @PrimaryGeneratedColumn()
    id:number

    @Column('text')
    course_name:string
    
    @Column('text')
    description:string

    @Column('date')
    starting_date:Date

    @Column('date')
    ending_date:Date

    @Column('boolean')
    record_status:boolean

    @Column('date')
    created_at:Date

    @Column('text')
    created_by:string

    @Column('date')
    updated_at:Date

    @Column('date')
    deleted_at:Date
}

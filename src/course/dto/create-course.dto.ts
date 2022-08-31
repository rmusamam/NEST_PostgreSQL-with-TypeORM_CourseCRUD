import { IsNotEmpty } from "class-validator"
import { v4 as uuidv4 } from 'uuid';

export class CreateCourseDto {

    uuid:uuidv4

    @IsNotEmpty()
    course_name:string
    
    description:string

    record_status:boolean

    created_by:string

}

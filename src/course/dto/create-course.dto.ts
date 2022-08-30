import { IsNotEmpty } from "class-validator"

export class CreateCourseDto {

    uuid:string

    @IsNotEmpty()
    course_name:string
    
    description:string

    record_status:boolean

    created_by:string

}

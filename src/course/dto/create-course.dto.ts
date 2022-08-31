import { IsBoolean, IsNotEmpty, IsString } from "class-validator"
import { v4 as uuidv4 } from 'uuid';

export class CreateCourseDto {
    @IsNotEmpty()
    uuid:uuidv4

    @IsNotEmpty()
    @IsString()
    course_name:string
    
    @IsNotEmpty()
    @IsString()
    description:string

    @IsBoolean()
    record_status:boolean

    @IsNotEmpty()
    @IsString()
    created_by:string

    @IsNotEmpty()
    @IsString()
    ending_date:Date

}

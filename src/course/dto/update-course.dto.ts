import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
    course_name:string
    
    description:string

    record_status:boolean

    created_by:string
}

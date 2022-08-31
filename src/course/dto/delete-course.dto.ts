import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';

export class DeleteCourseDto extends PartialType(CreateCourseDto) {
    deleted_at:Date
}
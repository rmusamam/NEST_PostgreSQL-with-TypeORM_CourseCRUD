import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';



@Injectable()
export class CourseService {
  constructor(
  @InjectRepository(Course)
  private courseRepository: Repository<Course>,
) {}
  
  create(createCourseDto: CreateCourseDto) {
    createCourseDto.uuid=uuidv4()
    return this.courseRepository.save(createCourseDto);
  }

  findAll() {
    return this.courseRepository.find();
  }

  
  findOne(id: uuidv4): Promise<Course> {
    return this.courseRepository.findOneBy({ uuid:id });
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    console.log('this is DTO',updateCourseDto);

    const updateCourse = await this.courseRepository.update({created_by:id}, {
      course_name: updateCourseDto.course_name
    });
    console.log('this is query',updateCourse)

    return `This is updated data #${id} `;
  }

  // remove(id: number) {
  //   return `This action removes a #${id} course`;
  // }
}

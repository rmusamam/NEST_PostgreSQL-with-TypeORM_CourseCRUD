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
    console.log(typeof createCourseDto.uuid)
    return this.courseRepository.save(createCourseDto);
  }

  findAll() {
    return this.courseRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} course`;
  // }

  // update(id: number, updateCourseDto: UpdateCourseDto) {
  //   return `This action updates a #${id} course`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} course`;
  // }
}

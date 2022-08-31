import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { DeleteCourseDto } from './dto/delete-course.dto';



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

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    
      var date = new Date()
   updateCourseDto.updated_at=date

    const updateCourse = await this.courseRepository.update({id},updateCourseDto  
    );
    console.log('this is query',updateCourse)

    return `This is updated data #${id} `;
  }

  async remove(id: number) {

    const deleteCourse = await this.courseRepository.delete(id);    
    return `This action removes a record  where id is : #${id} 
    and deleted record is : ${deleteCourse}`;
  }
}

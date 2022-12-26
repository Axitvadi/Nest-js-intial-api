import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  HttpStatus,
  Res,
  Param,
  Delete,
} from '@nestjs/common';
import { Student } from 'schema/student.schema';
import { StudentsService } from 'src/students/students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  async fetchAll(@Res() response) {
    const students = await this.studentsService.readAll();
    return response.status(HttpStatus.OK).json({
      success: true,
      result: students,
    });
  }

  @Post()
  async createStudent(@Res() response, @Body() student: Student) {
    const newStudent = await this.studentsService.create(student);
    return response.status(HttpStatus.CREATED).json({
      success: true,
      result: newStudent,
    });
  }

  @Put('/:id')
  async update(@Res() response, @Param('id') id, @Body() student: Student) {
    const updateStudent = await this.studentsService.update(id, student);
    return response
      .status(HttpStatus.OK)
      .json({ success: true, result: updateStudent });
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const student = await this.studentsService.readById(id);
    return response
      .status(HttpStatus.OK)
      .json({ success: true, result: student });
  }

  @Delete('/:id')
  async deleteStudent(@Res() response, @Param('id') id) {
    const deletedStudent = await this.studentsService.delete(id);
    return response.status(HttpStatus.OK).json({
      success: true,
      result: `student data of roll number ${deletedStudent.roleNumber} is deleted successfully !`,
    });
  }
}

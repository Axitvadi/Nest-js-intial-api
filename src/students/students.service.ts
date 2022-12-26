import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from 'schema/student.schema';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private StudentModel: Model<StudentDocument>,
  ) {}

  async create(student: Student): Promise<Student> {
    const newStudent = new this.StudentModel(student);
    return newStudent.save();
  }

  async readAll(): Promise<Student[]> {
    return await this.StudentModel.find().exec();
  }

  async readById(id): Promise<Student> {
    return await this.StudentModel.findById(id).exec();
  }

  async update(id, student: Student): Promise<Student> {
    return this.StudentModel.findByIdAndUpdate(id, student, {
      new: true,
    });
  }

  async delete(id): Promise<any> {
    return this.StudentModel.findByIdAndRemove(id);
  }
}

import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';

@Module({
  providers: [StudentsService],
  controllers: [StudentsController],
})
export class StudentsModule {}

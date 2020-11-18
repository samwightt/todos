import { Module } from '@nestjs/common';
import { TasksResolver } from './tasks.resolver';

import { Task } from './entities/Task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';

@Module({
  providers: [TasksResolver, TasksService],
  exports: [TasksService],
  imports: [TypeOrmModule.forFeature([Task])],
})
export class TasksModule {}

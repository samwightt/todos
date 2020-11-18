import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskType } from './models/task.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/Task.entity';
import { TaskCreationInput } from './models/TaskCreationInput.model';
import {
  Repository,
  getConnection,
  LessThan,
  Not,
  MoreThanOrEqual,
} from 'typeorm';
import { TasksService } from './tasks.service';

@Resolver((of) => TaskType)
export class TasksResolver {
  constructor(private tasksService: TasksService) {}

  @Query((returns) => TaskType)
  async task(@Args('id', { type: () => ID }) id: string) {
    return this.tasksService.findOne(id);
  }

  @Query((returns) => [TaskType])
  async tasks() {
    return this.tasksService.findAll();
  }

  @Mutation((returns) => TaskType)
  async createTask(@Args('input') input: TaskCreationInput) {
    return this.tasksService.create(input);
  }
}

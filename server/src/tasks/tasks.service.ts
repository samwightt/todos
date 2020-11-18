import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/Task.entity';
import { getConnection, MoreThanOrEqual, Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async findOne(id: string) {
    return await this.tasksRepository.findOne(id);
  }

  async findAll() {
    return this.tasksRepository.find();
  }

  find: Repository<Task>['find'] = (...args) => {
    return this.tasksRepository.find(...args);
  };

  async create(input: Omit<Task, 'id'>) {
    const user = this.tasksRepository.create(input);

    if (!user.scheduledPosition && !user.scheduledFor) {
      user.scheduledPosition = 0;
    } else if (!user.scheduledPosition) {
      console.log(user.scheduledFor);
      const lastPosition = await this.tasksRepository.find({
        where: {
          scheduledFor: user.scheduledFor,
        },
      });
      user.scheduledPosition = lastPosition.length;
    } else {
      await getConnection()
        .getRepository(Task)
        .increment(
          {
            scheduledFor: user.scheduledFor,
            scheduledPosition: MoreThanOrEqual(user.scheduledPosition),
          },
          'scheduledPosition',
          1,
        );
    }

    return await this.tasksRepository.save(user);
  }
}

import { Day } from './models/day.model';
import { TaskType } from '../tasks/models/task.model';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { TasksService } from '../tasks/tasks.service';

@Resolver((of) => Day)
export class DayResolver {
  constructor(private tasksService: TasksService) {}

  @Query((returns) => [Day])
  async days(@Args('input', { type: () => [Date] }) input: Date[]) {
    return input.map((day) => ({
      date: day,
      id: day.toISOString(),
      tasks: [],
    }));
  }

  @Query((returns) => Day)
  async day(@Args('day', { type: () => Date }) date: Date) {
    return {
      date,
      id: date.toISOString(),
      tasks: [],
    };
  }

  @ResolveField('tasks', (returns) => [TaskType])
  async getTasks(@Parent() day: Day) {
    const { date } = day;
    return await this.tasksService.find({
      where: {
        scheduledFor: date,
      },
      order: {
        scheduledPosition: 'ASC',
      },
    });
  }
}

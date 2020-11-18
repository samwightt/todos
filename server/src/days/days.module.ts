import { Module } from '@nestjs/common';
import { DayResolver } from './days.resolver';
import { TasksModule } from '../tasks/tasks.module';

@Module({
  providers: [DayResolver],
  imports: [TasksModule],
})
export class DaysModule {}

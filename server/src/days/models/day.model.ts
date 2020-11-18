import { ObjectType, Field, ID } from '@nestjs/graphql';
import { TaskType } from '../../tasks/models/task.model';
import { Node } from 'src/relay/models/Node.model';

@ObjectType({ implements: [Node] })
export class Day extends Node {
  @Field((type) => ID)
  id: string;

  @Field()
  date: Date;

  @Field((type) => [TaskType])
  tasks: TaskType[];
}

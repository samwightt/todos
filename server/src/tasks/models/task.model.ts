import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Node } from 'src/relay/models/Node.model';

@ObjectType({ implements: [Node] })
export class TaskType extends Node {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  completed: string;

  @Field({ nullable: true })
  scheduledFor: Date;

  @Field()
  scheduledPosition: number;

  @Field({ nullable: true })
  timeEstimate: number;
}

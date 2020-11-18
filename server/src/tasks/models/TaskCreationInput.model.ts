import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TaskCreationInput {
  @Field()
  name: string;

  @Field()
  completed: boolean;

  @Field({ nullable: true })
  scheduledFor: Date;

  @Field({ nullable: true })
  scheduledPosition: number;

  @Field({ nullable: true })
  timeEstimate: number;
}

import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
@Index(['scheduledFor', 'scheduledPosition'])
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  completed: boolean;

  @Column({ nullable: true })
  scheduledFor?: Date;

  @Column()
  scheduledPosition: number;

  @Column({ nullable: true })
  timeEstimate: number;
}

import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class SubTask {
  readonly id: string;
  readonly name: string;
  readonly completed: boolean;
  readonly timeEstimate?: number;
  readonly owner?: string;
  readonly task?: Task;
  constructor(init: ModelInit<SubTask>);
  static copyOf(source: SubTask, mutator: (draft: MutableModel<SubTask>) => MutableModel<SubTask> | void): SubTask;
}

export declare class Task {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly completed: boolean;
  readonly timeEstimate?: number;
  readonly dueDate?: string;
  readonly owner?: string;
  readonly tags?: TaskTag[];
  readonly subtasks?: SubTask[];
  readonly scheduleBucket?: ScheduleBucket;
  constructor(init: ModelInit<Task>);
  static copyOf(source: Task, mutator: (draft: MutableModel<Task>) => MutableModel<Task> | void): Task;
}

export declare class TaskTag {
  readonly id: string;
  readonly owner?: string;
  readonly task: Task;
  readonly tag: Tag;
  constructor(init: ModelInit<TaskTag>);
  static copyOf(source: TaskTag, mutator: (draft: MutableModel<TaskTag>) => MutableModel<TaskTag> | void): TaskTag;
}

export declare class Tag {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly owner?: string;
  readonly tasks?: TaskTag[];
  constructor(init: ModelInit<Tag>);
  static copyOf(source: Tag, mutator: (draft: MutableModel<Tag>) => MutableModel<Tag> | void): Tag;
}

export declare class ScheduleBucket {
  readonly id: string;
  readonly name?: string;
  readonly notes?: string;
  readonly date?: string;
  readonly itemIDArray: string[];
  readonly tasks?: Task[];
  readonly owner?: string;
  constructor(init: ModelInit<ScheduleBucket>);
  static copyOf(source: ScheduleBucket, mutator: (draft: MutableModel<ScheduleBucket>) => MutableModel<ScheduleBucket> | void): ScheduleBucket;
}
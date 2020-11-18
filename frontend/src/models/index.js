// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SubTask, Task, TaskTag, Tag, ScheduleBucket } = initSchema(schema);

export {
  SubTask,
  Task,
  TaskTag,
  Tag,
  ScheduleBucket
};
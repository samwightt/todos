/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSubTaskInput = {
  id?: string | null,
  name: string,
  completed: boolean,
  timeEstimate?: number | null,
  owner?: string | null,
  taskID: string,
  _version?: number | null,
};

export type ModelSubTaskConditionInput = {
  name?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  timeEstimate?: ModelIntInput | null,
  taskID?: ModelIDInput | null,
  and?: Array< ModelSubTaskConditionInput | null > | null,
  or?: Array< ModelSubTaskConditionInput | null > | null,
  not?: ModelSubTaskConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateSubTaskInput = {
  id: string,
  name?: string | null,
  completed?: boolean | null,
  timeEstimate?: number | null,
  owner?: string | null,
  taskID?: string | null,
  _version?: number | null,
};

export type DeleteSubTaskInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateTaskInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  completed: boolean,
  timeEstimate?: number | null,
  dueDate?: string | null,
  owner?: string | null,
  scheduleBucketID: string,
  _version?: number | null,
};

export type ModelTaskConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  timeEstimate?: ModelIntInput | null,
  dueDate?: ModelStringInput | null,
  scheduleBucketID?: ModelIDInput | null,
  and?: Array< ModelTaskConditionInput | null > | null,
  or?: Array< ModelTaskConditionInput | null > | null,
  not?: ModelTaskConditionInput | null,
};

export type UpdateTaskInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  completed?: boolean | null,
  timeEstimate?: number | null,
  dueDate?: string | null,
  owner?: string | null,
  scheduleBucketID?: string | null,
  _version?: number | null,
};

export type DeleteTaskInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateTaskTagInput = {
  id?: string | null,
  taskID: string,
  tagID: string,
  owner?: string | null,
  _version?: number | null,
};

export type ModelTaskTagConditionInput = {
  taskID?: ModelIDInput | null,
  tagID?: ModelIDInput | null,
  and?: Array< ModelTaskTagConditionInput | null > | null,
  or?: Array< ModelTaskTagConditionInput | null > | null,
  not?: ModelTaskTagConditionInput | null,
};

export type UpdateTaskTagInput = {
  id: string,
  taskID?: string | null,
  tagID?: string | null,
  owner?: string | null,
  _version?: number | null,
};

export type DeleteTaskTagInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateTagInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  owner?: string | null,
  _version?: number | null,
};

export type ModelTagConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
};

export type UpdateTagInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  owner?: string | null,
  _version?: number | null,
};

export type DeleteTagInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateScheduleBucketInput = {
  id?: string | null,
  name?: string | null,
  notes?: string | null,
  date?: string | null,
  itemIDArray: Array< string >,
  owner?: string | null,
  _version?: number | null,
};

export type ModelScheduleBucketConditionInput = {
  name?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  date?: ModelStringInput | null,
  itemIDArray?: ModelStringInput | null,
  and?: Array< ModelScheduleBucketConditionInput | null > | null,
  or?: Array< ModelScheduleBucketConditionInput | null > | null,
  not?: ModelScheduleBucketConditionInput | null,
};

export type UpdateScheduleBucketInput = {
  id: string,
  name?: string | null,
  notes?: string | null,
  date?: string | null,
  itemIDArray?: Array< string > | null,
  owner?: string | null,
  _version?: number | null,
};

export type DeleteScheduleBucketInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelSubTaskFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  timeEstimate?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  taskID?: ModelIDInput | null,
  and?: Array< ModelSubTaskFilterInput | null > | null,
  or?: Array< ModelSubTaskFilterInput | null > | null,
  not?: ModelSubTaskFilterInput | null,
};

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  timeEstimate?: ModelIntInput | null,
  dueDate?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  scheduleBucketID?: ModelIDInput | null,
  and?: Array< ModelTaskFilterInput | null > | null,
  or?: Array< ModelTaskFilterInput | null > | null,
  not?: ModelTaskFilterInput | null,
};

export type ModelTaskTagFilterInput = {
  id?: ModelIDInput | null,
  taskID?: ModelIDInput | null,
  tagID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelTaskTagFilterInput | null > | null,
  or?: Array< ModelTaskTagFilterInput | null > | null,
  not?: ModelTaskTagFilterInput | null,
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export type ModelScheduleBucketFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  date?: ModelStringInput | null,
  itemIDArray?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelScheduleBucketFilterInput | null > | null,
  or?: Array< ModelScheduleBucketFilterInput | null > | null,
  not?: ModelScheduleBucketFilterInput | null,
};

export type CreateSubTaskMutationVariables = {
  input: CreateSubTaskInput,
  condition?: ModelSubTaskConditionInput | null,
};

export type CreateSubTaskMutation = {
  createSubTask:  {
    __typename: "SubTask",
    id: string,
    name: string,
    completed: boolean,
    timeEstimate: number | null,
    owner: string | null,
    taskID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    task:  {
      __typename: "Task",
      id: string,
      name: string,
      description: string | null,
      completed: boolean,
      timeEstimate: number | null,
      dueDate: string | null,
      owner: string | null,
      scheduleBucketID: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      subtasks:  {
        __typename: "ModelSubTaskConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      tags:  {
        __typename: "ModelTaskTagConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      scheduleBucket:  {
        __typename: "ScheduleBucket",
        id: string,
        name: string | null,
        notes: string | null,
        date: string | null,
        itemIDArray: Array< string >,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
  } | null,
};

export type UpdateSubTaskMutationVariables = {
  input: UpdateSubTaskInput,
  condition?: ModelSubTaskConditionInput | null,
};

export type UpdateSubTaskMutation = {
  updateSubTask:  {
    __typename: "SubTask",
    id: string,
    name: string,
    completed: boolean,
    timeEstimate: number | null,
    owner: string | null,
    taskID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    task:  {
      __typename: "Task",
      id: string,
      name: string,
      description: string | null,
      completed: boolean,
      timeEstimate: number | null,
      dueDate: string | null,
      owner: string | null,
      scheduleBucketID: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      subtasks:  {
        __typename: "ModelSubTaskConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      tags:  {
        __typename: "ModelTaskTagConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      scheduleBucket:  {
        __typename: "ScheduleBucket",
        id: string,
        name: string | null,
        notes: string | null,
        date: string | null,
        itemIDArray: Array< string >,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
  } | null,
};

export type DeleteSubTaskMutationVariables = {
  input: DeleteSubTaskInput,
  condition?: ModelSubTaskConditionInput | null,
};

export type DeleteSubTaskMutation = {
  deleteSubTask:  {
    __typename: "SubTask",
    id: string,
    name: string,
    completed: boolean,
    timeEstimate: number | null,
    owner: string | null,
    taskID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    task:  {
      __typename: "Task",
      id: string,
      name: string,
      description: string | null,
      completed: boolean,
      timeEstimate: number | null,
      dueDate: string | null,
      owner: string | null,
      scheduleBucketID: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      subtasks:  {
        __typename: "ModelSubTaskConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      tags:  {
        __typename: "ModelTaskTagConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      scheduleBucket:  {
        __typename: "ScheduleBucket",
        id: string,
        name: string | null,
        notes: string | null,
        date: string | null,
        itemIDArray: Array< string >,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
  } | null,
};

export type CreateTaskMutationVariables = {
  input: CreateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type CreateTaskMutation = {
  createTask:  {
    __typename: "Task",
    id: string,
    name: string,
    description: string | null,
    completed: boolean,
    timeEstimate: number | null,
    dueDate: string | null,
    owner: string | null,
    scheduleBucketID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    subtasks:  {
      __typename: "ModelSubTaskConnection",
      items:  Array< {
        __typename: "SubTask",
        id: string,
        name: string,
        completed: boolean,
        timeEstimate: number | null,
        owner: string | null,
        taskID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    tags:  {
      __typename: "ModelTaskTagConnection",
      items:  Array< {
        __typename: "TaskTag",
        id: string,
        taskID: string,
        tagID: string,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    scheduleBucket:  {
      __typename: "ScheduleBucket",
      id: string,
      name: string | null,
      notes: string | null,
      date: string | null,
      itemIDArray: Array< string >,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      tasks:  {
        __typename: "ModelTaskConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateTaskMutationVariables = {
  input: UpdateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type UpdateTaskMutation = {
  updateTask:  {
    __typename: "Task",
    id: string,
    name: string,
    description: string | null,
    completed: boolean,
    timeEstimate: number | null,
    dueDate: string | null,
    owner: string | null,
    scheduleBucketID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    subtasks:  {
      __typename: "ModelSubTaskConnection",
      items:  Array< {
        __typename: "SubTask",
        id: string,
        name: string,
        completed: boolean,
        timeEstimate: number | null,
        owner: string | null,
        taskID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    tags:  {
      __typename: "ModelTaskTagConnection",
      items:  Array< {
        __typename: "TaskTag",
        id: string,
        taskID: string,
        tagID: string,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    scheduleBucket:  {
      __typename: "ScheduleBucket",
      id: string,
      name: string | null,
      notes: string | null,
      date: string | null,
      itemIDArray: Array< string >,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      tasks:  {
        __typename: "ModelTaskConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteTaskMutationVariables = {
  input: DeleteTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type DeleteTaskMutation = {
  deleteTask:  {
    __typename: "Task",
    id: string,
    name: string,
    description: string | null,
    completed: boolean,
    timeEstimate: number | null,
    dueDate: string | null,
    owner: string | null,
    scheduleBucketID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    subtasks:  {
      __typename: "ModelSubTaskConnection",
      items:  Array< {
        __typename: "SubTask",
        id: string,
        name: string,
        completed: boolean,
        timeEstimate: number | null,
        owner: string | null,
        taskID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    tags:  {
      __typename: "ModelTaskTagConnection",
      items:  Array< {
        __typename: "TaskTag",
        id: string,
        taskID: string,
        tagID: string,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    scheduleBucket:  {
      __typename: "ScheduleBucket",
      id: string,
      name: string | null,
      notes: string | null,
      date: string | null,
      itemIDArray: Array< string >,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      tasks:  {
        __typename: "ModelTaskConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null,
  } | null,
};

export type CreateTaskTagMutationVariables = {
  input: CreateTaskTagInput,
  condition?: ModelTaskTagConditionInput | null,
};

export type CreateTaskTagMutation = {
  createTaskTag:  {
    __typename: "TaskTag",
    id: string,
    taskID: string,
    tagID: string,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    task:  {
      __typename: "Task",
      id: string,
      name: string,
      description: string | null,
      completed: boolean,
      timeEstimate: number | null,
      dueDate: string | null,
      owner: string | null,
      scheduleBucketID: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      subtasks:  {
        __typename: "ModelSubTaskConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      tags:  {
        __typename: "ModelTaskTagConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      scheduleBucket:  {
        __typename: "ScheduleBucket",
        id: string,
        name: string | null,
        notes: string | null,
        date: string | null,
        itemIDArray: Array< string >,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      description: string | null,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      tasks:  {
        __typename: "ModelTaskTagConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
  } | null,
};

export type UpdateTaskTagMutationVariables = {
  input: UpdateTaskTagInput,
  condition?: ModelTaskTagConditionInput | null,
};

export type UpdateTaskTagMutation = {
  updateTaskTag:  {
    __typename: "TaskTag",
    id: string,
    taskID: string,
    tagID: string,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    task:  {
      __typename: "Task",
      id: string,
      name: string,
      description: string | null,
      completed: boolean,
      timeEstimate: number | null,
      dueDate: string | null,
      owner: string | null,
      scheduleBucketID: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      subtasks:  {
        __typename: "ModelSubTaskConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      tags:  {
        __typename: "ModelTaskTagConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      scheduleBucket:  {
        __typename: "ScheduleBucket",
        id: string,
        name: string | null,
        notes: string | null,
        date: string | null,
        itemIDArray: Array< string >,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      description: string | null,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      tasks:  {
        __typename: "ModelTaskTagConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
  } | null,
};

export type DeleteTaskTagMutationVariables = {
  input: DeleteTaskTagInput,
  condition?: ModelTaskTagConditionInput | null,
};

export type DeleteTaskTagMutation = {
  deleteTaskTag:  {
    __typename: "TaskTag",
    id: string,
    taskID: string,
    tagID: string,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    task:  {
      __typename: "Task",
      id: string,
      name: string,
      description: string | null,
      completed: boolean,
      timeEstimate: number | null,
      dueDate: string | null,
      owner: string | null,
      scheduleBucketID: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      subtasks:  {
        __typename: "ModelSubTaskConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      tags:  {
        __typename: "ModelTaskTagConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      scheduleBucket:  {
        __typename: "ScheduleBucket",
        id: string,
        name: string | null,
        notes: string | null,
        date: string | null,
        itemIDArray: Array< string >,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      description: string | null,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      tasks:  {
        __typename: "ModelTaskTagConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
  } | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag:  {
    __typename: "Tag",
    id: string,
    name: string,
    description: string | null,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    tasks:  {
      __typename: "ModelTaskTagConnection",
      items:  Array< {
        __typename: "TaskTag",
        id: string,
        taskID: string,
        tagID: string,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag:  {
    __typename: "Tag",
    id: string,
    name: string,
    description: string | null,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    tasks:  {
      __typename: "ModelTaskTagConnection",
      items:  Array< {
        __typename: "TaskTag",
        id: string,
        taskID: string,
        tagID: string,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag:  {
    __typename: "Tag",
    id: string,
    name: string,
    description: string | null,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    tasks:  {
      __typename: "ModelTaskTagConnection",
      items:  Array< {
        __typename: "TaskTag",
        id: string,
        taskID: string,
        tagID: string,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type CreateScheduleBucketMutationVariables = {
  input: CreateScheduleBucketInput,
  condition?: ModelScheduleBucketConditionInput | null,
};

export type CreateScheduleBucketMutation = {
  createScheduleBucket:  {
    __typename: "ScheduleBucket",
    id: string,
    name: string | null,
    notes: string | null,
    date: string | null,
    itemIDArray: Array< string >,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    tasks:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        name: string,
        description: string | null,
        completed: boolean,
        timeEstimate: number | null,
        dueDate: string | null,
        owner: string | null,
        scheduleBucketID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type UpdateScheduleBucketMutationVariables = {
  input: UpdateScheduleBucketInput,
  condition?: ModelScheduleBucketConditionInput | null,
};

export type UpdateScheduleBucketMutation = {
  updateScheduleBucket:  {
    __typename: "ScheduleBucket",
    id: string,
    name: string | null,
    notes: string | null,
    date: string | null,
    itemIDArray: Array< string >,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    tasks:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        name: string,
        description: string | null,
        completed: boolean,
        timeEstimate: number | null,
        dueDate: string | null,
        owner: string | null,
        scheduleBucketID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type DeleteScheduleBucketMutationVariables = {
  input: DeleteScheduleBucketInput,
  condition?: ModelScheduleBucketConditionInput | null,
};

export type DeleteScheduleBucketMutation = {
  deleteScheduleBucket:  {
    __typename: "ScheduleBucket",
    id: string,
    name: string | null,
    notes: string | null,
    date: string | null,
    itemIDArray: Array< string >,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    tasks:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        name: string,
        description: string | null,
        completed: boolean,
        timeEstimate: number | null,
        dueDate: string | null,
        owner: string | null,
        scheduleBucketID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type GetSubTaskQueryVariables = {
  id: string,
};

export type GetSubTaskQuery = {
  getSubTask:  {
    __typename: "SubTask",
    id: string,
    name: string,
    completed: boolean,
    timeEstimate: number | null,
    owner: string | null,
    taskID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    task:  {
      __typename: "Task",
      id: string,
      name: string,
      description: string | null,
      completed: boolean,
      timeEstimate: number | null,
      dueDate: string | null,
      owner: string | null,
      scheduleBucketID: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      subtasks:  {
        __typename: "ModelSubTaskConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      tags:  {
        __typename: "ModelTaskTagConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      scheduleBucket:  {
        __typename: "ScheduleBucket",
        id: string,
        name: string | null,
        notes: string | null,
        date: string | null,
        itemIDArray: Array< string >,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
  } | null,
};

export type ListSubTasksQueryVariables = {
  filter?: ModelSubTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubTasksQuery = {
  listSubTasks:  {
    __typename: "ModelSubTaskConnection",
    items:  Array< {
      __typename: "SubTask",
      id: string,
      name: string,
      completed: boolean,
      timeEstimate: number | null,
      owner: string | null,
      taskID: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      task:  {
        __typename: "Task",
        id: string,
        name: string,
        description: string | null,
        completed: boolean,
        timeEstimate: number | null,
        dueDate: string | null,
        owner: string | null,
        scheduleBucketID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncSubTasksQueryVariables = {
  filter?: ModelSubTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSubTasksQuery = {
  syncSubTasks:  {
    __typename: "ModelSubTaskConnection",
    items:  Array< {
      __typename: "SubTask",
      id: string,
      name: string,
      completed: boolean,
      timeEstimate: number | null,
      owner: string | null,
      taskID: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      task:  {
        __typename: "Task",
        id: string,
        name: string,
        description: string | null,
        completed: boolean,
        timeEstimate: number | null,
        dueDate: string | null,
        owner: string | null,
        scheduleBucketID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetTaskQueryVariables = {
  id: string,
};

export type GetTaskQuery = {
  getTask:  {
    __typename: "Task",
    id: string,
    name: string,
    description: string | null,
    completed: boolean,
    timeEstimate: number | null,
    dueDate: string | null,
    owner: string | null,
    scheduleBucketID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    subtasks:  {
      __typename: "ModelSubTaskConnection",
      items:  Array< {
        __typename: "SubTask",
        id: string,
        name: string,
        completed: boolean,
        timeEstimate: number | null,
        owner: string | null,
        taskID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    tags:  {
      __typename: "ModelTaskTagConnection",
      items:  Array< {
        __typename: "TaskTag",
        id: string,
        taskID: string,
        tagID: string,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    scheduleBucket:  {
      __typename: "ScheduleBucket",
      id: string,
      name: string | null,
      notes: string | null,
      date: string | null,
      itemIDArray: Array< string >,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      tasks:  {
        __typename: "ModelTaskConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null,
  } | null,
};

export type ListTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTasksQuery = {
  listTasks:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      id: string,
      name: string,
      description: string | null,
      completed: boolean,
      timeEstimate: number | null,
      dueDate: string | null,
      owner: string | null,
      scheduleBucketID: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      subtasks:  {
        __typename: "ModelSubTaskConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      tags:  {
        __typename: "ModelTaskTagConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      scheduleBucket:  {
        __typename: "ScheduleBucket",
        id: string,
        name: string | null,
        notes: string | null,
        date: string | null,
        itemIDArray: Array< string >,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTasksQuery = {
  syncTasks:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      id: string,
      name: string,
      description: string | null,
      completed: boolean,
      timeEstimate: number | null,
      dueDate: string | null,
      owner: string | null,
      scheduleBucketID: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      subtasks:  {
        __typename: "ModelSubTaskConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      tags:  {
        __typename: "ModelTaskTagConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      scheduleBucket:  {
        __typename: "ScheduleBucket",
        id: string,
        name: string | null,
        notes: string | null,
        date: string | null,
        itemIDArray: Array< string >,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncTaskTagsQueryVariables = {
  filter?: ModelTaskTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTaskTagsQuery = {
  syncTaskTags:  {
    __typename: "ModelTaskTagConnection",
    items:  Array< {
      __typename: "TaskTag",
      id: string,
      taskID: string,
      tagID: string,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      task:  {
        __typename: "Task",
        id: string,
        name: string,
        description: string | null,
        completed: boolean,
        timeEstimate: number | null,
        dueDate: string | null,
        owner: string | null,
        scheduleBucketID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      tag:  {
        __typename: "Tag",
        id: string,
        name: string,
        description: string | null,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type ListTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsQuery = {
  listTags:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      name: string,
      description: string | null,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      tasks:  {
        __typename: "ModelTaskTagConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetTagQueryVariables = {
  id: string,
};

export type GetTagQuery = {
  getTag:  {
    __typename: "Tag",
    id: string,
    name: string,
    description: string | null,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    tasks:  {
      __typename: "ModelTaskTagConnection",
      items:  Array< {
        __typename: "TaskTag",
        id: string,
        taskID: string,
        tagID: string,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type SyncTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTagsQuery = {
  syncTags:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      name: string,
      description: string | null,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      tasks:  {
        __typename: "ModelTaskTagConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type ListScheduleBucketsQueryVariables = {
  filter?: ModelScheduleBucketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListScheduleBucketsQuery = {
  listScheduleBuckets:  {
    __typename: "ModelScheduleBucketConnection",
    items:  Array< {
      __typename: "ScheduleBucket",
      id: string,
      name: string | null,
      notes: string | null,
      date: string | null,
      itemIDArray: Array< string >,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      tasks:  {
        __typename: "ModelTaskConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetScheduleBucketQueryVariables = {
  id: string,
};

export type GetScheduleBucketQuery = {
  getScheduleBucket:  {
    __typename: "ScheduleBucket",
    id: string,
    name: string | null,
    notes: string | null,
    date: string | null,
    itemIDArray: Array< string >,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    tasks:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        name: string,
        description: string | null,
        completed: boolean,
        timeEstimate: number | null,
        dueDate: string | null,
        owner: string | null,
        scheduleBucketID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type SyncScheduleBucketsQueryVariables = {
  filter?: ModelScheduleBucketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncScheduleBucketsQuery = {
  syncScheduleBuckets:  {
    __typename: "ModelScheduleBucketConnection",
    items:  Array< {
      __typename: "ScheduleBucket",
      id: string,
      name: string | null,
      notes: string | null,
      date: string | null,
      itemIDArray: Array< string >,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      tasks:  {
        __typename: "ModelTaskConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type OnCreateSubTaskSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateSubTaskSubscription = {
  onCreateSubTask:  {
    __typename: "SubTask",
    id: string,
    name: string,
    completed: boolean,
    timeEstimate: number | null,
    owner: string | null,
    taskID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    task:  {
      __typename: "Task",
      id: string,
      name: string,
      description: string | null,
      completed: boolean,
      timeEstimate: number | null,
      dueDate: string | null,
      owner: string | null,
      scheduleBucketID: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      subtasks:  {
        __typename: "ModelSubTaskConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      tags:  {
        __typename: "ModelTaskTagConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      scheduleBucket:  {
        __typename: "ScheduleBucket",
        id: string,
        name: string | null,
        notes: string | null,
        date: string | null,
        itemIDArray: Array< string >,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateSubTaskSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateSubTaskSubscription = {
  onUpdateSubTask:  {
    __typename: "SubTask",
    id: string,
    name: string,
    completed: boolean,
    timeEstimate: number | null,
    owner: string | null,
    taskID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    task:  {
      __typename: "Task",
      id: string,
      name: string,
      description: string | null,
      completed: boolean,
      timeEstimate: number | null,
      dueDate: string | null,
      owner: string | null,
      scheduleBucketID: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      subtasks:  {
        __typename: "ModelSubTaskConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      tags:  {
        __typename: "ModelTaskTagConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      scheduleBucket:  {
        __typename: "ScheduleBucket",
        id: string,
        name: string | null,
        notes: string | null,
        date: string | null,
        itemIDArray: Array< string >,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteSubTaskSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteSubTaskSubscription = {
  onDeleteSubTask:  {
    __typename: "SubTask",
    id: string,
    name: string,
    completed: boolean,
    timeEstimate: number | null,
    owner: string | null,
    taskID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    task:  {
      __typename: "Task",
      id: string,
      name: string,
      description: string | null,
      completed: boolean,
      timeEstimate: number | null,
      dueDate: string | null,
      owner: string | null,
      scheduleBucketID: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      subtasks:  {
        __typename: "ModelSubTaskConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      tags:  {
        __typename: "ModelTaskTagConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      scheduleBucket:  {
        __typename: "ScheduleBucket",
        id: string,
        name: string | null,
        notes: string | null,
        date: string | null,
        itemIDArray: Array< string >,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
  } | null,
};

export type OnCreateTaskSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateTaskSubscription = {
  onCreateTask:  {
    __typename: "Task",
    id: string,
    name: string,
    description: string | null,
    completed: boolean,
    timeEstimate: number | null,
    dueDate: string | null,
    owner: string | null,
    scheduleBucketID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    subtasks:  {
      __typename: "ModelSubTaskConnection",
      items:  Array< {
        __typename: "SubTask",
        id: string,
        name: string,
        completed: boolean,
        timeEstimate: number | null,
        owner: string | null,
        taskID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    tags:  {
      __typename: "ModelTaskTagConnection",
      items:  Array< {
        __typename: "TaskTag",
        id: string,
        taskID: string,
        tagID: string,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    scheduleBucket:  {
      __typename: "ScheduleBucket",
      id: string,
      name: string | null,
      notes: string | null,
      date: string | null,
      itemIDArray: Array< string >,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      tasks:  {
        __typename: "ModelTaskConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateTaskSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateTaskSubscription = {
  onUpdateTask:  {
    __typename: "Task",
    id: string,
    name: string,
    description: string | null,
    completed: boolean,
    timeEstimate: number | null,
    dueDate: string | null,
    owner: string | null,
    scheduleBucketID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    subtasks:  {
      __typename: "ModelSubTaskConnection",
      items:  Array< {
        __typename: "SubTask",
        id: string,
        name: string,
        completed: boolean,
        timeEstimate: number | null,
        owner: string | null,
        taskID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    tags:  {
      __typename: "ModelTaskTagConnection",
      items:  Array< {
        __typename: "TaskTag",
        id: string,
        taskID: string,
        tagID: string,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    scheduleBucket:  {
      __typename: "ScheduleBucket",
      id: string,
      name: string | null,
      notes: string | null,
      date: string | null,
      itemIDArray: Array< string >,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      tasks:  {
        __typename: "ModelTaskConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteTaskSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteTaskSubscription = {
  onDeleteTask:  {
    __typename: "Task",
    id: string,
    name: string,
    description: string | null,
    completed: boolean,
    timeEstimate: number | null,
    dueDate: string | null,
    owner: string | null,
    scheduleBucketID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    subtasks:  {
      __typename: "ModelSubTaskConnection",
      items:  Array< {
        __typename: "SubTask",
        id: string,
        name: string,
        completed: boolean,
        timeEstimate: number | null,
        owner: string | null,
        taskID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    tags:  {
      __typename: "ModelTaskTagConnection",
      items:  Array< {
        __typename: "TaskTag",
        id: string,
        taskID: string,
        tagID: string,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    scheduleBucket:  {
      __typename: "ScheduleBucket",
      id: string,
      name: string | null,
      notes: string | null,
      date: string | null,
      itemIDArray: Array< string >,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      tasks:  {
        __typename: "ModelTaskConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateTaskTagSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateTaskTagSubscription = {
  onCreateTaskTag:  {
    __typename: "TaskTag",
    id: string,
    taskID: string,
    tagID: string,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    task:  {
      __typename: "Task",
      id: string,
      name: string,
      description: string | null,
      completed: boolean,
      timeEstimate: number | null,
      dueDate: string | null,
      owner: string | null,
      scheduleBucketID: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      subtasks:  {
        __typename: "ModelSubTaskConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      tags:  {
        __typename: "ModelTaskTagConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      scheduleBucket:  {
        __typename: "ScheduleBucket",
        id: string,
        name: string | null,
        notes: string | null,
        date: string | null,
        itemIDArray: Array< string >,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      description: string | null,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      tasks:  {
        __typename: "ModelTaskTagConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
  } | null,
};

export type OnUpdateTaskTagSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateTaskTagSubscription = {
  onUpdateTaskTag:  {
    __typename: "TaskTag",
    id: string,
    taskID: string,
    tagID: string,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    task:  {
      __typename: "Task",
      id: string,
      name: string,
      description: string | null,
      completed: boolean,
      timeEstimate: number | null,
      dueDate: string | null,
      owner: string | null,
      scheduleBucketID: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      subtasks:  {
        __typename: "ModelSubTaskConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      tags:  {
        __typename: "ModelTaskTagConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      scheduleBucket:  {
        __typename: "ScheduleBucket",
        id: string,
        name: string | null,
        notes: string | null,
        date: string | null,
        itemIDArray: Array< string >,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      description: string | null,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      tasks:  {
        __typename: "ModelTaskTagConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
  } | null,
};

export type OnDeleteTaskTagSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteTaskTagSubscription = {
  onDeleteTaskTag:  {
    __typename: "TaskTag",
    id: string,
    taskID: string,
    tagID: string,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    task:  {
      __typename: "Task",
      id: string,
      name: string,
      description: string | null,
      completed: boolean,
      timeEstimate: number | null,
      dueDate: string | null,
      owner: string | null,
      scheduleBucketID: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      subtasks:  {
        __typename: "ModelSubTaskConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      tags:  {
        __typename: "ModelTaskTagConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      scheduleBucket:  {
        __typename: "ScheduleBucket",
        id: string,
        name: string | null,
        notes: string | null,
        date: string | null,
        itemIDArray: Array< string >,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      description: string | null,
      owner: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      tasks:  {
        __typename: "ModelTaskTagConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
  } | null,
};

export type OnCreateTagSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateTagSubscription = {
  onCreateTag:  {
    __typename: "Tag",
    id: string,
    name: string,
    description: string | null,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    tasks:  {
      __typename: "ModelTaskTagConnection",
      items:  Array< {
        __typename: "TaskTag",
        id: string,
        taskID: string,
        tagID: string,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type OnUpdateTagSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag:  {
    __typename: "Tag",
    id: string,
    name: string,
    description: string | null,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    tasks:  {
      __typename: "ModelTaskTagConnection",
      items:  Array< {
        __typename: "TaskTag",
        id: string,
        taskID: string,
        tagID: string,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type OnDeleteTagSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag:  {
    __typename: "Tag",
    id: string,
    name: string,
    description: string | null,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    tasks:  {
      __typename: "ModelTaskTagConnection",
      items:  Array< {
        __typename: "TaskTag",
        id: string,
        taskID: string,
        tagID: string,
        owner: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type OnCreateScheduleBucketSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateScheduleBucketSubscription = {
  onCreateScheduleBucket:  {
    __typename: "ScheduleBucket",
    id: string,
    name: string | null,
    notes: string | null,
    date: string | null,
    itemIDArray: Array< string >,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    tasks:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        name: string,
        description: string | null,
        completed: boolean,
        timeEstimate: number | null,
        dueDate: string | null,
        owner: string | null,
        scheduleBucketID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type OnUpdateScheduleBucketSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateScheduleBucketSubscription = {
  onUpdateScheduleBucket:  {
    __typename: "ScheduleBucket",
    id: string,
    name: string | null,
    notes: string | null,
    date: string | null,
    itemIDArray: Array< string >,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    tasks:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        name: string,
        description: string | null,
        completed: boolean,
        timeEstimate: number | null,
        dueDate: string | null,
        owner: string | null,
        scheduleBucketID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type OnDeleteScheduleBucketSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteScheduleBucketSubscription = {
  onDeleteScheduleBucket:  {
    __typename: "ScheduleBucket",
    id: string,
    name: string | null,
    notes: string | null,
    date: string | null,
    itemIDArray: Array< string >,
    owner: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    tasks:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        name: string,
        description: string | null,
        completed: boolean,
        timeEstimate: number | null,
        dueDate: string | null,
        owner: string | null,
        scheduleBucketID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

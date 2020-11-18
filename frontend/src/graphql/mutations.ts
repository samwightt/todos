/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSubTask = /* GraphQL */ `
  mutation CreateSubTask(
    $input: CreateSubTaskInput!
    $condition: ModelSubTaskConditionInput
  ) {
    createSubTask(input: $input, condition: $condition) {
      id
      name
      completed
      timeEstimate
      owner
      taskID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      task {
        id
        name
        description
        completed
        timeEstimate
        dueDate
        owner
        scheduleBucketID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        subtasks {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
        scheduleBucket {
          id
          name
          notes
          date
          itemIDArray
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const updateSubTask = /* GraphQL */ `
  mutation UpdateSubTask(
    $input: UpdateSubTaskInput!
    $condition: ModelSubTaskConditionInput
  ) {
    updateSubTask(input: $input, condition: $condition) {
      id
      name
      completed
      timeEstimate
      owner
      taskID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      task {
        id
        name
        description
        completed
        timeEstimate
        dueDate
        owner
        scheduleBucketID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        subtasks {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
        scheduleBucket {
          id
          name
          notes
          date
          itemIDArray
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const deleteSubTask = /* GraphQL */ `
  mutation DeleteSubTask(
    $input: DeleteSubTaskInput!
    $condition: ModelSubTaskConditionInput
  ) {
    deleteSubTask(input: $input, condition: $condition) {
      id
      name
      completed
      timeEstimate
      owner
      taskID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      task {
        id
        name
        description
        completed
        timeEstimate
        dueDate
        owner
        scheduleBucketID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        subtasks {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
        scheduleBucket {
          id
          name
          notes
          date
          itemIDArray
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      name
      description
      completed
      timeEstimate
      dueDate
      owner
      scheduleBucketID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      subtasks {
        items {
          id
          name
          completed
          timeEstimate
          owner
          taskID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      tags {
        items {
          id
          taskID
          tagID
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      scheduleBucket {
        id
        name
        notes
        date
        itemIDArray
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        tasks {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      name
      description
      completed
      timeEstimate
      dueDate
      owner
      scheduleBucketID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      subtasks {
        items {
          id
          name
          completed
          timeEstimate
          owner
          taskID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      tags {
        items {
          id
          taskID
          tagID
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      scheduleBucket {
        id
        name
        notes
        date
        itemIDArray
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        tasks {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      name
      description
      completed
      timeEstimate
      dueDate
      owner
      scheduleBucketID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      subtasks {
        items {
          id
          name
          completed
          timeEstimate
          owner
          taskID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      tags {
        items {
          id
          taskID
          tagID
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      scheduleBucket {
        id
        name
        notes
        date
        itemIDArray
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        tasks {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const createTaskTag = /* GraphQL */ `
  mutation CreateTaskTag(
    $input: CreateTaskTagInput!
    $condition: ModelTaskTagConditionInput
  ) {
    createTaskTag(input: $input, condition: $condition) {
      id
      taskID
      tagID
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      task {
        id
        name
        description
        completed
        timeEstimate
        dueDate
        owner
        scheduleBucketID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        subtasks {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
        scheduleBucket {
          id
          name
          notes
          date
          itemIDArray
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      tag {
        id
        name
        description
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        tasks {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateTaskTag = /* GraphQL */ `
  mutation UpdateTaskTag(
    $input: UpdateTaskTagInput!
    $condition: ModelTaskTagConditionInput
  ) {
    updateTaskTag(input: $input, condition: $condition) {
      id
      taskID
      tagID
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      task {
        id
        name
        description
        completed
        timeEstimate
        dueDate
        owner
        scheduleBucketID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        subtasks {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
        scheduleBucket {
          id
          name
          notes
          date
          itemIDArray
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      tag {
        id
        name
        description
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        tasks {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteTaskTag = /* GraphQL */ `
  mutation DeleteTaskTag(
    $input: DeleteTaskTagInput!
    $condition: ModelTaskTagConditionInput
  ) {
    deleteTaskTag(input: $input, condition: $condition) {
      id
      taskID
      tagID
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      task {
        id
        name
        description
        completed
        timeEstimate
        dueDate
        owner
        scheduleBucketID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        subtasks {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
        scheduleBucket {
          id
          name
          notes
          date
          itemIDArray
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      tag {
        id
        name
        description
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        tasks {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      name
      description
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tasks {
        items {
          id
          taskID
          tagID
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      name
      description
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tasks {
        items {
          id
          taskID
          tagID
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      name
      description
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tasks {
        items {
          id
          taskID
          tagID
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createScheduleBucket = /* GraphQL */ `
  mutation CreateScheduleBucket(
    $input: CreateScheduleBucketInput!
    $condition: ModelScheduleBucketConditionInput
  ) {
    createScheduleBucket(input: $input, condition: $condition) {
      id
      name
      notes
      date
      itemIDArray
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tasks {
        items {
          id
          name
          description
          completed
          timeEstimate
          dueDate
          owner
          scheduleBucketID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateScheduleBucket = /* GraphQL */ `
  mutation UpdateScheduleBucket(
    $input: UpdateScheduleBucketInput!
    $condition: ModelScheduleBucketConditionInput
  ) {
    updateScheduleBucket(input: $input, condition: $condition) {
      id
      name
      notes
      date
      itemIDArray
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tasks {
        items {
          id
          name
          description
          completed
          timeEstimate
          dueDate
          owner
          scheduleBucketID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteScheduleBucket = /* GraphQL */ `
  mutation DeleteScheduleBucket(
    $input: DeleteScheduleBucketInput!
    $condition: ModelScheduleBucketConditionInput
  ) {
    deleteScheduleBucket(input: $input, condition: $condition) {
      id
      name
      notes
      date
      itemIDArray
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tasks {
        items {
          id
          name
          description
          completed
          timeEstimate
          dueDate
          owner
          scheduleBucketID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;

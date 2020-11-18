/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSubTask = /* GraphQL */ `
  subscription OnCreateSubTask($owner: String) {
    onCreateSubTask(owner: $owner) {
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
export const onUpdateSubTask = /* GraphQL */ `
  subscription OnUpdateSubTask($owner: String) {
    onUpdateSubTask(owner: $owner) {
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
export const onDeleteSubTask = /* GraphQL */ `
  subscription OnDeleteSubTask($owner: String) {
    onDeleteSubTask(owner: $owner) {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($owner: String) {
    onCreateTask(owner: $owner) {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($owner: String) {
    onUpdateTask(owner: $owner) {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($owner: String) {
    onDeleteTask(owner: $owner) {
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
export const onCreateTaskTag = /* GraphQL */ `
  subscription OnCreateTaskTag($owner: String) {
    onCreateTaskTag(owner: $owner) {
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
export const onUpdateTaskTag = /* GraphQL */ `
  subscription OnUpdateTaskTag($owner: String) {
    onUpdateTaskTag(owner: $owner) {
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
export const onDeleteTaskTag = /* GraphQL */ `
  subscription OnDeleteTaskTag($owner: String) {
    onDeleteTaskTag(owner: $owner) {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($owner: String) {
    onCreateTag(owner: $owner) {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($owner: String) {
    onUpdateTag(owner: $owner) {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($owner: String) {
    onDeleteTag(owner: $owner) {
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
export const onCreateScheduleBucket = /* GraphQL */ `
  subscription OnCreateScheduleBucket($owner: String) {
    onCreateScheduleBucket(owner: $owner) {
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
export const onUpdateScheduleBucket = /* GraphQL */ `
  subscription OnUpdateScheduleBucket($owner: String) {
    onUpdateScheduleBucket(owner: $owner) {
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
export const onDeleteScheduleBucket = /* GraphQL */ `
  subscription OnDeleteScheduleBucket($owner: String) {
    onDeleteScheduleBucket(owner: $owner) {
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

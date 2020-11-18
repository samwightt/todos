/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSubTask = /* GraphQL */ `
  query GetSubTask($id: ID!) {
    getSubTask(id: $id) {
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
export const listSubTasks = /* GraphQL */ `
  query ListSubTasks(
    $filter: ModelSubTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSubTasks = /* GraphQL */ `
  query SyncSubTasks(
    $filter: ModelSubTaskFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSubTasks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
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
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTasks = /* GraphQL */ `
  query SyncTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTasks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTaskTags = /* GraphQL */ `
  query SyncTaskTags(
    $filter: ModelTaskTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTaskTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
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
export const syncTags = /* GraphQL */ `
  query SyncTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const listScheduleBuckets = /* GraphQL */ `
  query ListScheduleBuckets(
    $filter: ModelScheduleBucketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listScheduleBuckets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getScheduleBucket = /* GraphQL */ `
  query GetScheduleBucket($id: ID!) {
    getScheduleBucket(id: $id) {
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
export const syncScheduleBuckets = /* GraphQL */ `
  query SyncScheduleBuckets(
    $filter: ModelScheduleBucketFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncScheduleBuckets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;

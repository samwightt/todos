import { useState, Suspense, useEffect, unstable_useTransition } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Tag, Task, TaskTag } from "models";
import {
  tagsWithBools,
  filteredTasksByTag,
  selectedTagsAtom,
  allTagsAtom,
} from "store";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Layout from "components/Layout";

const ListTags = () => {
  const tags = useRecoilValue(tagsWithBools);
  const setTags = useSetRecoilState(selectedTagsAtom);

  return (
    <div>
      <h1 className="text-xl">Tasks</h1>
      {tags.map((item, index) => (
        <>
          <h1 key={index}>{item.tag.name}</h1>
          <input
            type="checkbox"
            checked={item.selected}
            onChange={(e) =>
              setTags((prev) => {
                const newSet = new Set(prev);
                if (newSet.has(item.tag.id)) newSet.delete(item.tag.id);
                else newSet.add(item.tag.id);
                return newSet;
              })
            }
          />
          <br />
          <button onClick={() => DataStore.delete(item.tag)}>Delete</button>
        </>
      ))}
    </div>
  );
};

const NewTagsComponent = () => {
  const [text, setText] = useState("");
  const [startTransition] = unstable_useTransition({
    timeoutMs: 1000,
  } as any);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (text.length > 0) {
          startTransition(() => {
            DataStore.save(
              new Tag({
                name: text,
              })
            );
            setText("");
          });
        }
      }}
      className="flex flex-row space-x-4"
    >
      <input
        className="border border-gray-500 py-2 px-3 rounded"
        type="text"
        placeholder="Tag name"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-3 py-2 rounded"
      >
        Create tag
      </button>
    </form>
  );
};

const TasksListComponent = () => {
  const tasks = useRecoilValue(filteredTasksByTag);
  console.log(tasks);

  return (
    <div>
      <h1 className="text-2xl">Tasks</h1>
      {tasks.map((task, index) => (
        <div key={index}>
          <p>{task.name}</p>
          <p>{task.owner}</p>
          <p>{task.tags?.length}</p>
          <button onClick={() => DataStore.delete(task)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

const NewTasksComponent = () => {
  const [name, setName] = useState("");
  const tags = useRecoilValue(allTagsAtom);
  const [tagIndex, setTagIndex] = useState(-1);
  const [startTransition] = unstable_useTransition({
    timeoutMs: 1000,
  } as any);

  useEffect(() => {
    setTagIndex(-1);
  }, [tags]);

  const createTask = async () => {
    const tag = tags[tagIndex];
    const task = await DataStore.save(
      new Task({
        completed: false,
        name,
      })
    );
    const connector = await DataStore.save(
      new TaskTag({
        tag,
        task,
      })
    );
    setName("");
  };

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (tagIndex > -1 && tagIndex < tags.length && name.length > 0) {
          startTransition(() => {
            createTask();
          });
        }
      }}
    >
      <input
        type="text"
        placeholder="Task name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select
        value={tagIndex}
        onChange={(e) => setTagIndex(parseInt(e.target.value))}
      >
        <option value={-1}>Select a tag...</option>
        {tags.map((tag, index) => (
          <option key={index} value={index}>
            {tag.name}
          </option>
        ))}
      </select>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default function Home() {
  return (
    <Layout>
      <Suspense fallback={<h1>Loading...</h1>}>
        {/* <NewTagsComponent />
        <ListTags />
        <NewTasksComponent />
        <TasksListComponent /> */}
      </Suspense>
    </Layout>
  );
}

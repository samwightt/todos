import { useState, FC, unstable_useTransition } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { ScheduleBucket, Task } from "models";
import { formatISO } from "date-fns";

interface TaskCreationCardProps {
  date: Date;
}

const TaskCreationCard: FC<TaskCreationCardProps> = (props) => {
  const [text, setText] = useState("");
  const [startTransition] = unstable_useTransition({
    busyDelayMs: 2000,
    busyMinDurationMs: 2000,
  });

  const dedupScheduleBuckets = async (date: Date) => {
    const isoDate = formatISO(date, {
      representation: "date",
    });
    const scheduleBuckets = await DataStore.query(ScheduleBucket, (c) =>
      c.date("eq", isoDate)
    );

    if (scheduleBuckets.length > 1) {
      const first = scheduleBuckets[0];
      for (let i = 1; i < scheduleBuckets.length; i++) {
        const item = scheduleBuckets[i];

        await DataStore.save(
          ScheduleBucket.copyOf(first, (draft) => {
            draft.itemIDArray = draft.itemIDArray.concat(item.itemIDArray);
          })
        );

        for (let j = 0; j < item.itemIDArray.length; j++) {
          const task = await DataStore.query(Task, item.itemIDArray[j]);

          await DataStore.save(
            Task.copyOf(task, (draft) => {
              draft.scheduleBucket = first;
            })
          );
        }

        DataStore.delete(item);
      }
    }
  };

  const getScheduleBucket = async (date: string) => {
    const list = await DataStore.query(ScheduleBucket, (c) =>
      c.date("eq", date)
    );
    if (list.length === 0) {
      return await DataStore.save(
        new ScheduleBucket({
          itemIDArray: [],
          date,
        })
      );
    } else return list[0];
  };

  const saveTask = async () => {
    dedupScheduleBuckets(props.date);

    const isoDate = formatISO(props.date, {
      representation: "date",
    });

    const scheduleBucket = await getScheduleBucket(isoDate);

    const task = await DataStore.save(
      new Task({
        completed: false,
        name: text,
        scheduleBucket,
      })
    );

    await DataStore.save(
      ScheduleBucket.copyOf(scheduleBucket, (draft) => {
        draft.itemIDArray = [task.id, ...draft.itemIDArray];
      })
    );

    setText("");
  };

  return (
    <form
      className="bg-white shadow-md py-3 px-3"
      onSubmit={(e) => {
        e.preventDefault();

        startTransition(() => {
          saveTask();
          setText("");
        });
      }}
    >
      <input
        className="text-sm"
        type="text"
        placeholder="Create a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default TaskCreationCard;

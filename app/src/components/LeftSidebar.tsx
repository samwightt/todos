import React from 'react';
import { useState } from 'react';
import DayPicker from 'react-day-picker';
import { useRecoilState } from 'recoil';
import { add } from 'date-fns';

import { useRelayEnvironment, fetchQuery } from 'react-relay/hooks';

import ColumnsListRefetchQuery, {
  ColumnsListRefetchQuery as ColumnsListRefetchQueryType,
} from '../__generated__/ColumnsListRefetchQuery.graphql';

const getDays = (date: Date) => {
  let arr: Date[] = [];
  for (let i = 0; i < 5; i++)
    arr.push(
      add(date, {
        days: i,
      }),
    );
  return arr;
};

const LeftSidebar = () => {
  const [date, setDate] = useState(new Date());
  const [hoverRange, setHoverRange] = useState<
    undefined | { from: Date; to: Date }
  >(undefined);

  const environment = useRelayEnvironment();

  const getHoverRange = (date: Date) => {
    return {
      from: date,
      to: add(date, {
        days: 4,
      }),
    };
  };

  const selectedRange = {
    from: date,
    to: add(date, {
      days: 4,
    }),
  };

  return (
    <div className="w-64 bg-white flex-col border-gray-400 border-r flex-none hidden lg:flex">
      <div className="w-full">
        {/* <DayPicker
          onDayClick={(day) => {
            setDate(day);

            fetchQuery<ColumnsListRefetchQueryType>(
              environment,
              ColumnsListRefetchQuery,
              {
                days: getDays(day),
              },
            )
              .toPromise()
              .then((result) => console.log(result))
              .catch((e) => console.log(e));
          }}
          selectedDays={date}
          modifiers={{
            hoverRange,
            hoverRangeStart: hoverRange && hoverRange.from,
            hoverRangeEnd: hoverRange && hoverRange.to,
            selectedRange,
            selectedRangeStart: date,
            selectedRangeEnd: add(date, {
              days: 4,
            }),
          }}
          onDayMouseEnter={(date) => setHoverRange(getHoverRange(date))}
          onDayMouseLeave={() => setHoverRange(undefined)}
        />
      </div> */}
      </div>
      <div className="h-full bg-gray-100"></div>
    </div>
  );
};

export default LeftSidebar;

import { useState } from "react";
import DayPicker from "react-day-picker";
import { useRecoilState } from "recoil";
import { selectedDateAtom } from "store";
import { add } from "date-fns";

const LeftSidebar = () => {
  const [date, setDate] = useRecoilState(selectedDateAtom);
  const [hoverRange, setHoverRange] = useState<
    undefined | { from: Date; to: Date }
  >(undefined);

  const getHoverRange = (date: Date) => {
    return {
      from: date,
      to: add(date, {
        days: 4,
      }),
    };
  };

  console.log(hoverRange);

  const selectedRange = {
    from: date,
    to: add(date, {
      days: 4,
    }),
  };

  return (
    <div className="w-2/12 bg-white h-full flex flex-col border-gray-400 border-r">
      <div className="w-full">
        <DayPicker
          onDayClick={(day) => setDate(day)}
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
      </div>
      <div className="h-full bg-gray-100"></div>
    </div>
  );
};

export default LeftSidebar;

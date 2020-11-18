import { FC } from "react";
import { format } from "date-fns";
import { graphql, useFragment } from "react-relay/hooks";
import { ColumnFragment$key } from "__generated__/ColumnFragment.graphql";

interface ColumnProps {
  day: ColumnFragment$key;
}

const columnFragment = graphql`
  fragment ColumnFragment on Day {
    date
  }
`;

const Column: FC<ColumnProps> = ({ day }) => {
  const data = useFragment(columnFragment, day);

  const date = new Date(String(data.date));

  return (
    <div className="w-1/5 h-full border-r border-gray-400 bg-gray-100 max-h-screen">
      <div className="w-full bg-white border-b border-gray-400 shadow h-32 flex flex-col items-center justify-center">
        <h1 className="text-2xl w-full px-6">{format(date, "cccc")}</h1>
        <h2 className="w-full px-6">{format(date, "MMMM do, yyyy")}</h2>
      </div>
      <div className="px-3 py-6 space-y-4 ColumnList overflow-y-scroll">
        {/* {children} */}
      </div>
    </div>
  );
};

export default Column;

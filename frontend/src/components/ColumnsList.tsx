import { FC } from "react";
import { graphql, useFragment } from "react-relay/hooks";
import { ColumnsListFragment$key } from "__generated__/ColumnsListFragment.graphql";
import Column from "./Column";

const columnsListFragment = graphql`
  fragment ColumnsListFragment on Query
  @argumentDefinitions(days: { type: "[DateTime!]!" }) {
    days(input: $days) {
      ...ColumnFragment
    }
  }
`;

interface ColumnsListProps {
  days: ColumnsListFragment$key;
}

const ColumnsList: FC<ColumnsListProps> = (props) => {
  const data = useFragment(columnsListFragment, props.days);

  return (
    <div>
      {data.days.map((day) => (
        <Column day={day} />
      ))}
    </div>
  );
};

export default ColumnsList;

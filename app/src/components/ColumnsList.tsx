import React from 'react';
import type { FC } from 'react';
import {
  graphql,
  useFragment,
  useRefetchableFragment,
} from 'react-relay/hooks';
import type { ColumnsListFragment$key } from '../__generated__/ColumnsListFragment.graphql';
import Column from './Column';

const columnsListFragment = graphql`
  fragment ColumnsListFragment on Query
  @refetchable(queryName: "ColumnsListRefetchQuery")
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

  console.log(data);

  return (
    <div className="flex flex-row w-full">
      {data.days.map((day) => (
        <Column day={day} />
      ))}
    </div>
  );
};

export default ColumnsList;

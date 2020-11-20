/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ColumnsListFragment = {
    readonly days: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"ColumnFragment">;
    }>;
    readonly " $refType": "ColumnsListFragment";
};
export type ColumnsListFragment$data = ColumnsListFragment;
export type ColumnsListFragment$key = {
    readonly " $data"?: ColumnsListFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ColumnsListFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "days"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": require('./ColumnsListRefetchQuery.graphql.ts')
    }
  },
  "name": "ColumnsListFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "input",
          "variableName": "days"
        }
      ],
      "concreteType": "Day",
      "kind": "LinkedField",
      "name": "days",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ColumnFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'c85d583de4b257c6c4277457a8c6c7fa';
export default node;

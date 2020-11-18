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
  "metadata": null,
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
(node as any).hash = '200419c9d1aaf6cd476108abec601ded';
export default node;

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ColumnFragment = {
    readonly date: unknown;
    readonly " $refType": "ColumnFragment";
};
export type ColumnFragment$data = ColumnFragment;
export type ColumnFragment$key = {
    readonly " $data"?: ColumnFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ColumnFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ColumnFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "date",
      "storageKey": null
    }
  ],
  "type": "Day",
  "abstractKey": null
};
(node as any).hash = '5612de0b39ed9efcf6a6b4b16534bb66';
export default node;

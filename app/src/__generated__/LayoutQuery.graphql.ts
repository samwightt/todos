/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LayoutQueryVariables = {
    days: Array<unknown>;
};
export type LayoutQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"ColumnsListFragment">;
};
export type LayoutQuery = {
    readonly response: LayoutQueryResponse;
    readonly variables: LayoutQueryVariables;
};



/*
query LayoutQuery(
  $days: [DateTime!]!
) {
  ...ColumnsListFragment_2982tV
}

fragment ColumnFragment on Day {
  date
}

fragment ColumnsListFragment_2982tV on Query {
  days(input: $days) {
    ...ColumnFragment
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "days"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LayoutQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "days",
            "variableName": "days"
          }
        ],
        "kind": "FragmentSpread",
        "name": "ColumnsListFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LayoutQuery",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "date",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e0cad4f8daf74622bf96c9aaa64e3584",
    "id": null,
    "metadata": {},
    "name": "LayoutQuery",
    "operationKind": "query",
    "text": "query LayoutQuery(\n  $days: [DateTime!]!\n) {\n  ...ColumnsListFragment_2982tV\n}\n\nfragment ColumnFragment on Day {\n  date\n}\n\nfragment ColumnsListFragment_2982tV on Query {\n  days(input: $days) {\n    ...ColumnFragment\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '482ab01cbff101d851228e08f5e506a2';
export default node;

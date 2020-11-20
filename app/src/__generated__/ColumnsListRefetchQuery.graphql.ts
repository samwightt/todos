/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ColumnsListRefetchQueryVariables = {
    days: Array<unknown>;
};
export type ColumnsListRefetchQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"ColumnsListFragment">;
};
export type ColumnsListRefetchQuery = {
    readonly response: ColumnsListRefetchQueryResponse;
    readonly variables: ColumnsListRefetchQueryVariables;
};



/*
query ColumnsListRefetchQuery(
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
    "name": "ColumnsListRefetchQuery",
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
    "name": "ColumnsListRefetchQuery",
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
    "cacheID": "3f2107f0ba758feee81aa2fd3ae88512",
    "id": null,
    "metadata": {},
    "name": "ColumnsListRefetchQuery",
    "operationKind": "query",
    "text": "query ColumnsListRefetchQuery(\n  $days: [DateTime!]!\n) {\n  ...ColumnsListFragment_2982tV\n}\n\nfragment ColumnFragment on Day {\n  date\n}\n\nfragment ColumnsListFragment_2982tV on Query {\n  days(input: $days) {\n    ...ColumnFragment\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c85d583de4b257c6c4277457a8c6c7fa';
export default node;

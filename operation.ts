const operation = {
  "variables": {
    "input": {
      "__typename": "blabla",
      "date": "2020-12-04T17:39:28.325Z",
      "description": "aze",
      "linkedTo": {
        "id": 4,
        "value": "Customer1",
        "__typename": "bmabma"
      },
      "siteId": 4,
      "source": "source2"
    }
  },
  "operationName": "createActivity",
  "query": {
    "kind": "Document",
    "definitions": [
      {
        "kind": "OperationDefinition",
        "operation": "mutation",
        "name": {
          "kind": "Name",
          "value": "createActivity"
        }
      }
    ]
  }
};

const desiredOperation = {
  "variables": {
    "input": {
      "date": "2020-12-04T17:39:28.325Z",
      "description": "aze",
      "linkedTo": {
        "id": 4,
        "value": "Customer1",
      },
      "siteId": 4,
      "source": "source2"
    }
  },
  "operationName": "createActivity",
  "query": {
    "kind": "Document",
    "definitions": [
      {
        "kind": "OperationDefinition",
        "operation": "mutation",
        "name": {
          "kind": "Name",
          "value": "createActivity"
        }
      }
    ]
  }
};

export { desiredOperation, operation };

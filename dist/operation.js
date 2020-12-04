"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operation = exports.desiredOperation = void 0;
var operation = {
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
exports.operation = operation;
var desiredOperation = {
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
exports.desiredOperation = desiredOperation;

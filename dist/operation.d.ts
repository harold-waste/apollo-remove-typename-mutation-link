declare const operation: {
    variables: {
        input: {
            __typename: string;
            date: string;
            description: string;
            linkedTo: {
                id: number;
                value: string;
                __typename: string;
            };
            siteId: number;
            source: string;
        };
    };
    operationName: string;
    query: {
        kind: string;
        definitions: {
            kind: string;
            operation: string;
            name: {
                kind: string;
                value: string;
            };
        }[];
    };
};
declare const desiredOperation: {
    variables: {
        input: {
            date: string;
            description: string;
            linkedTo: {
                id: number;
                value: string;
            };
            siteId: number;
            source: string;
        };
    };
    operationName: string;
    query: {
        kind: string;
        definitions: {
            kind: string;
            operation: string;
            name: {
                kind: string;
                value: string;
            };
        }[];
    };
};
export { desiredOperation, operation };

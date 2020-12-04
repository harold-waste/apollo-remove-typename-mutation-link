/// <reference types="zen-observable" />
import { ApolloLink, Operation, NextLink } from '@apollo/client';
declare const removeTypenameFromMutation: (operation: Operation, forward: NextLink) => import("zen-observable")<import("@apollo/client").FetchResult<{
    [key: string]: any;
}, Record<string, any>, Record<string, any>>>;
declare const removeTypenameFromMutationLink: ApolloLink;
export { removeTypenameFromMutationLink, removeTypenameFromMutation, };

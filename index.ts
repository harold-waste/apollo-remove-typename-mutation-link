import { ApolloLink, Operation, NextLink, RequestHandler } from '@apollo/client';
import omitDeep from 'omit-deep-lodash';

type OperationTypeNode = 'query' | 'mutation' | 'subscription';

const removeTypenameFromMutation = (operation: Operation, forward: NextLink) => {
  const definition = operation?.query?.definitions.filter((def) => def.kind === 'OperationDefinition')?.[0];
  const mutation: OperationTypeNode = 'mutation';
  if (definition?.kind == 'OperationDefinition' && definition?.operation === mutation) {
    operation.variables = omitDeep(operation.variables, '__typename');
    return forward(operation);
  }
  return forward(operation);
};


const removeTypenameFromMutationLink = new ApolloLink(removeTypenameFromMutation);

export {
  removeTypenameFromMutationLink,
  removeTypenameFromMutation,
};

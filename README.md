# apollo-remove-typename-mutation-link

Link to remove `__typename` on mutations only for apollo client v3. It is very important to keep `__typename` on queries
but for mutation it is more a pain to remove this key during data manipulation.


This library will automatically
remove every nested `__typename` key it finds in the variables given to apollo mutation.

# Installation

Using NPM

```
  npm install apollo-remove-typename-mutation-link
```

Using Yarn

```
  yarn add apollo-remove-typename-mutation-link
```

Then import removeTypenameFromMutationLink and add it at the beginning of your link concatenation.

```
import { ApolloClient, createHttpLink } from '@apollo/client';
import { removeTypenameFromMutationLink } from 'apollo-remove-typename-mutation-link';

const httpLink = createHttpLink({ uri: process.env.REACT_APP_BASE_URL_API });

const link = from([removeTypenameFromMutationLink, myOtherLink, httpLink]);

const client = new ApolloClient({
  // cache,
  link,
});

```

# Issues

If you find a bug, please file an issue on our [issue tracker on GitHub.](https://github.com/harold-waste/apollo-remove-typename-mutation-link/issues)


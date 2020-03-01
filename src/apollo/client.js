import ApolloClient from 'apollo-boost';

import { resolvers } from './resolvers';

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    resolvers
});

export default client;

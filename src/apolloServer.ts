import { ApolloServer } from 'apollo-server'

import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'

export const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
})

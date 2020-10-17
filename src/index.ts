import { apolloServer } from './apolloServer'

apolloServer.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})

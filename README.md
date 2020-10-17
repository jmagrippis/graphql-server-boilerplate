# Graphql Server Boilerplate

Get your graphql server started with dev quality of life in mind.

## Prep

You will need a version of Node installed: it is recommended to use [nvm] for hassle-free node version management.

[Yarn v1] is recommended for installing this project's dependencies. [npm] which would have been installed alongside node should work almost just as well.

Assuming you went with yarn, go to the root of the project and run:

```sh
yarn
```

... and everything you need to run this project and its tests will be downloaded for you. Prep complete!

[nvm]: https://github.com/nvm-sh/nvm 'bash script to manage multiple active node.js versions'
[yarn v1]: https://classic.yarnpkg.com/en/docs/install 'because they dropped the ball with v2'
[npm]: https://www.npmjs.com/ 'it once was THE javascript package manager'

## Starting the dev server

If you clone this project and go to the root directory, running:

```sh
yarn dev
```

Will spin up the dev server, running on port 4000. Visiting http://localhost:4000 will get you to the amazing [GraphQL Playground]

[graphql playground]: https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/ 'Documentation as a first class citizen'

## Running tests

Regardless if you’ve got the server running, the following command will start the test runner:

```sh
yarn test --watch
```

Tests will rerun when any code changes, so you may start adding `myNewResolver.test.ts` files with expectations, and see the terminal turn from red to green as you fulfill the spec.

The testing framework of choice is [Jest].

[jest]: https://jestjs.io/ 'testing framework with a focus on simplicity'

## Notable tech used

- [Typescript]
- [GraphQL] via [Apollo Server]
- [GraphQL Codegen] for auto-generated typescript types based on the GraphQL schema
- [Prettier] for code formatting

[typescript]: https://www.typescriptlang.org/ 'Javascript that scales'
[graphql]: https://graphql.org/ 'A query language for your API'
[apollo server]: https://www.apollographql.com/docs/apollo-server/getting-started/ 'the best GraphQL implementations in Javascript/Typescript'
[prettier]: https://prettier.io/ 'never nit-pick on code formatting again!'

## License

For learning purposes, this repo is licensed under the [MIT license].

[mit license]: http://opensource.org/licenses/MIT "Everyone's favourite license"

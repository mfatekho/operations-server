# Intento Task - Server Application

## Task Description

Create the table of operations entities, which contains two columns [name, status]. When a user clicks by "Create"
button, he sees the operation creation modal. User can input the name of the new operation. After clicking the "Create"
button in the modal, a new operation appears in the table with the status In Progress. The Backend service must finish
the new operation with Done or Failed after 5 seconds. You decide on your own how the user will know about the updates
of the status column in the operations list.

## Implementation Details

Technologies:

- [Nest](https://github.com/nestjs/nest)
- [Sql.js](https://github.com/sql-js/sql.js/)
- [Typeorm](https://typeorm.io/#/)
- [Nest - CRUD](https://github.com/nestjsx/crud)
- [TypeScript](https://www.typescriptlang.org/)


## Deploy:
Server is deployed on Heroku: [https://operations-intento.herokuapp.com/](https://operations-intento.herokuapp.com/)

## Note:

Included clients `build` folder for deploy purposes, as heroku slug is limited in memory and this limit is exceeded during the
step on installing clients' dependencies


## Init client submodule

```bash
$ git submodule update --init --recursive
```


## Install clients deps and build

```bash
$ npm run build-client
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

// Update with your config settings.

const pw = process.env.THING
module.exports = {

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
    useNullAsDefault: true
  },

  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: 5482,
      database: 'sf-test',
      user: 'postgres',
      password: 'test'

    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
    useNullAsDefault: true
  },

};

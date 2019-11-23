// Update with your config settings.

const sfData = {
  host: 'ec2-54-221-214-3.compute-1.amazonaws.com',
  port: 5432,
  database: 'd17gghmi3acgna',
  user: 'jcjhsmwnuruptm',
  password: '4e45728d904ca1ea5aa8a70b1c4a9f13cbac4f042d43c9f71430512260dbd605'
}

const pgConnection = process.env.DATABASE_URL || sfData

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
    connection:'postgres://localhost/sf-test',
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
    useNullAsDefault: true
  },

};

module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'mongoose',
        settings: {
          client: 'mongo',
          host: env.int('PRODUCTION_DATABASE_HOST', '127.0.0.1'),
          port: env.int('PRODUCTION_DATABASE_PORT', 27017),
          database: env.int('PRODUCTION_DATABASE_NAME', 'criptoArtBR'),
          username: env.int('PRODUCTION_DATABASE_USERNAME', 'CriptoAdmin'),
          password: env.int('PRODUCTION_DATABASE_PASSWORD', 'cripto@artBR@2021'),
        },
        options: {
          authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
          ssl: env.bool('DATABASE_SSL', false),
        },
      },
    },
  });
  
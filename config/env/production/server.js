module.exports = ({ env }) => ({
    host: env.int('PROD_HOST', '0.0.0.0'),
    port: env.int('PROD_PORT', 1337),
    "cron": {
      "enabled": true
    },
  });
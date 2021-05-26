module.exports = ({ env }) => ({
  host: env.int('PROD_HOST', '127.0.0.1'),
  port: env.int('PROD_PORT', 1337),
  "cron": {
    "enabled": true
  },
});
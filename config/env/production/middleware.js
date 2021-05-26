module.exports = {
  timeout: 100,
  load: {
    //before: ['responseTime', 'logger', 'cors', 'responses', 'gzip'],
    order: [
      "session", "logger", "parser","gzip","responseTime","poweredBy","csp","p3p","hsts","xframe","xss","cors","ip"
    ],
    //after: ['parser', 'router'],
  },
  settings: { 
      "session": {
        "enabled": true,
        "client": "cookie",
        "key": "strapi.sid",
        "prefix": "strapi:sess:",
        "secretKeys": ["criptoArtBR", "criptoArtBR@2021"],
        "httpOnly": true,
        "maxAge": 86400000,
        "overwrite": true,
        "signed": false,
        "rolling": false
      },
      "logger": {
        "level": "debug",
        "exposeInContext": true,
        "requests": true
      },
      "parser": {
        "enabled": true,
        "multipart": true,
        "formidable": {
          "maxFileSize": 20000000 // defaults to 200mb
        }
      },
      "gzip": {
        "enabled": false
      },
      "responseTime": {
        "enabled": false
      },
      "poweredBy": {
        "enabled": true,
        "value": "criptoArtBR <criptoArtBR>"
      },
        "csp": {
          "enabled": true,
          "policy": ["block-all-mixed-content"]
        },
        "p3p": {
          "enabled": false,
          "value": ""
        },
        "hsts": {
          "enabled": true,
          "maxAge": 31536000,
          "includeSubDomains": true
        },
        "xframe": {
          "enabled": true,
          "value": "SAMEORIGIN"
        },
        "xss": {
          "enabled": true,
          "mode": "block"
        },
        "cors": {
          "enabled": true,
          "origin": "*",
          "headers": [
              "Content-Type",
              "Authorization",
              "X-Frame-Options",
              "Origin",
              "X-Requested-With",
              "Accept",
              "Client-Security-Token",
              "Accept-Encoding",
              "X-Auth-Token",
              "content-type"
          ]
      },
        "ip": {
          "enabled": false,
          "whiteList": [],
          "blackList": []
        }
  },
};
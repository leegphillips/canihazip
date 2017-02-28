#!/usr/bin/env node

var http = require('http')

var options = {
  hostname: 'canihazip.com',
  path: '/s'
};

var req = http.get(options, (res) => {
  res.setEncoding('utf8');

  res.on('data', (chunck) => {
    console.log(`${chunck}`)
  });

  res.on('end', () => {
    process.exit(0);
  });
});

req.on('error', (e) => {
  console.log(`problem with request: ${e.message}`);
});

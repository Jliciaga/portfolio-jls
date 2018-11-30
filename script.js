#!/usr/bin/node

const exec = require('child_process').exec;
const stat = exec(`cat /proc/loadavg | awk '{print $1"-"$2"-"$3"-"}'`);

stat.stdout.on('data', function(data) {
  console.log(data);
});


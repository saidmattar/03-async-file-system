'use strict';

const readFile = require('./lib/read-file');
readFile(`${__dirname}/assets`, (err,data) =>{
  if(err) console.error(err);
  console.log(data);
});

console.log('said');

console.log('to get git to store yor credintials type "git config --global credential.helper wincred" into your command line');

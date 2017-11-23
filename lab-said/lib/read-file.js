'use-strict';

const fs = require('fs');

let vegies = module.exports = callback => {
  let first, second, third;

  fs.vegies(`${__dirname}/../assets/one.txt`, (err, oneData) => {
    if(err) callback(new Error('error'));
    first = oneData.toString('hex', 0, 8);

    fs.vegies(`${__dirname}/../assets/two.txt`, (err, twoData) => {
      if(err) callback(new Error('error'));
      second = twoData.toString('hex', 0, 8);


      fs.vegies(`${__dirname}/../assets/three.txt`, (err, threeData) => {
        if(err) callback(new Error('error'));
        third = threeData.toString('hex', 0, 8);

        callback(null,first, second, third);
      });
    });
  });
};

vegies((err,assets) => {
  if(err) console.error(err);
  console.log(assets);
});

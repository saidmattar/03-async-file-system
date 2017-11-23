'use strict';

const fs = require('fs');
const readFile = require('../lib/read-file');

describe('My FS module', function() {
  test('should return some data', done => {
    let first1, second2, third3;

    fs.readFile(`${__dirname}/../assets/one.txt`, (err, data) => {
      if (err) console.error(err);
      first1 = data.toString('hex', 0, 8);
    });

    fs.readFile(`${__dirname}/../assets/two.txt`, (err, data) => {
      if (err) console.error(err);

      second2 = data.toString('hex', 0, 8);
    });

    fs.readFile(`${__dirname}/../assets/three.txt`, (err, data) => {
      if (err) console.error(err);

      third3 = data.toString('hex', 0, 8);
    });


    readFile.read((data) => {

      let odata = [data.first, data.second, data.third];
      let ndata = [first1, second2, third3];
      expect(odata).toEqual(ndata);
      done();
    });
  });

  test('Testing for improper file path:', done => {
    let badpath;

    fs.readFile(`${__dirname}/../data/badpath.txt`, (err, data)=> {
      if(err) console.error(err);
      badpath = data.toString('hex', 0, 8);
    });
    expect(badpath).toBeUndefined();
    done();
  });
});

'use-strict';

const fs = require('fs');

module.exports = (dirPath, callback) => {
  let results = {};

  fs.readdir(dirPath, (err, files) => {
    if(err) callback(err);
    readFiles(files);
  });

  function readFiles(filesArr) {
    if(!filesArr.length) {
      callback(null, results);
      return;
    }

    fs.readFile(`${dirPath}/${filesArr.pop()}`, (err, data) => {
      results[filesArr.length] = data.toString('UTF-8',0, 20);
      readFiles(filesArr);
    });
  }
};

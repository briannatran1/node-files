'use strict';

const fsP = require('fs/promises');

const argv = process.argv;

/** Reads file in one.txt */

async function cat(path) {
  try {
    let contents = await fsP.readFile(path, 'utf8');
    console.log('file content =', contents);
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }
}

// cat(path);
cat(argv[2]);
'use strict';

const fsP = require('fs/promises');

const argv = process.argv;


/** if given text file, will read it,
 * otherwise will return an error
*/

async function cat(path) {

  try {
    let contents = await fsP.readFile(path, 'utf8');
    console.log('file content =', path);
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }

}


cat(argv[2]);
'use strict';

const fsP = require('fs/promises');

const argv = process.argv;

// const url = new URL(argv[2])

/** if given valid url, will log
 * html template received form fetch request
 */
async function webCat(url) {
  // const url = new URL(url)
  const response = await fetch(`${url}`);
  const data = await response.text()

  console.log(data);
}

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

// console.log(new URL(argv[2]));
// cat(argv[2]);

if(Boolean(new URL(argv[2])) === true){
  // TODO: look up method on URL object to return boolean
  console.log(`going to webCat`);
  webCat(argv[2]);
}else{
  console.log(`going to cat`);
  cat(argv[2]);
}
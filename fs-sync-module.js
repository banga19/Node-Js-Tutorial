// !! synchronus method
// >> fs: file system 
const {readFileSync, writeFileSync} = require('fs')
//  reading a file 
const first = readFileSync('./content/subfolder/first.txt', 'utf-8');
// console.log(first);
console.log('start');
writeFileSync(
    './content/subfolder/result-sync.txt', 
    `click here: ${first} text file`,
    {flag:'a'}, // to append a new item to the text file
) 

console.log('Done with this task');
console.log('starting the next task');

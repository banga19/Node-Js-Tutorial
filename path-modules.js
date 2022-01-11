// path in-built module
const path =require('path')
// console.log(path.sep);

// used to show normalized file path 
const filePath =path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath);

// to show name of last folder in path 
const base = path.basename(filePath)
// console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
// console.log(absolute); // to show absolute path of a folder

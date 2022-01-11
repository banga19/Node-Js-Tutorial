// setInterval( () => 
// {console.log("hello world"), 1000
// });


// !! combining a function with variables 
const john= "jon"
const sayHi = (name) => {
    // console.log(`hello there ${name}`);
}
sayHi("susaan");
sayHi(john);

// !! importing AND exporting objects in modules from another .js file 
// ! METHOD1  Import side
const Person = require("./intro"); // imports FirstName & LastName objects from intro.js file 
// console.log(Person);

// ! METHOD 2 import side linked to alternative-flavor.js
// const data = require('./imports_exports') 
// console.log(data);

// !! code below is linked to function.js and is used to execute a function by using require and __filename ie:
// require("./functions")

//  installing and using external dependancies using npm 
const _ = require('lodash')

const items = [1,2,3,4]
const newItems = _.flattenDeep(items)
console.log(newItems);




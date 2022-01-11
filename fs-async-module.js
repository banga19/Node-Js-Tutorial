
// !! >>fs-module async method where we use callback functions 
const {readFile, writeFile} = require('fs')

console.log('start');
readFile('./content/subfolder/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    const first = result
    readFile(
        './content/subfolder/second.txt', 'utf8', (err, result) => {
            if(err) {
                console.log(err);
                return
            }
            const Second = result
            writeFile(
                './content/subfolder/result-async',
                `here is the result: ${first}, ${Second}`,
                (err,result) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log('Done with this task');
                }
            )
        }
    )
})
console.log(' start the next task');

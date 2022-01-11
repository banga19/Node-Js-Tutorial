
// !! code to import in-built modules like OS,
const os = require('os')
const user = os.userInfo() // code will display user info
// console.log(user);

// !! method below to display system uptime in seconds
// console.log(`the system has been up and runing since: ${os.uptime()} in seconds`)

// !! code to display current os info
const CurrentUserOs = {
    name : os.type(),
    release : os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
// console.log(CurrentUserOs.name);


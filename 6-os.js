const os=require('os')
//About the user
console.log(os.userInfo())
console.log(os.uptime())
const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
}
console.log(currentOS)
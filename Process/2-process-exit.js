//User defined event: process.on
setTimeout(() => process.exit(), 2000);

//Asynchronous 
process.on('exit',()=>{
    console.log('Process will exit now. See you later!!');
});

console.log('Hello!');
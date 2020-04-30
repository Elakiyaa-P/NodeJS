const EventEmitter=require('events');
const myEmitter=new EventEmitter();

setImmediate(()=>{
    myEmitter.emit("TEST_EVENT");
})
// myEmitter.emit("TEST_EVENT");

myEmitter.on("TEST_EVENT",()=>{
    console.log("TEST_EVENT was fired");
});

//Different files can have different implementation for the event

myEmitter.on("TEST_EVENT",()=>{
    console.log("TEST_EVENT was fired");
});

myEmitter.on("TEST_EVENT",()=>{
    console.log("TEST_EVENT was fired");
});

// myEmitter.emit("TEST_EVENT");

//Streams are Event Emitters
//process.stdin.process.stdout

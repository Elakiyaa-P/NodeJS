//setTimeout is only a request it is not a command
setTimeout(
    ()=>console.log('Hello after 0.5 sec... MAYBE!'),
    500
);

for(let i=0;i<1e10;i++){            //1e10:10000 times
    //Block Node Synchronously
}
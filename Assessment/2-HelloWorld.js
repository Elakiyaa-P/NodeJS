let count=0;
const interval=setInterval(()=>{
    console.log('Hello World');
    count++;
    if(count===5){
        console.log('Done');
        clearInterval(interval);
    }
},1000);
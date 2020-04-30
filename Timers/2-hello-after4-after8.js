//Exercise
const func = time => {
    console.log('Hello After ' + time + ' seconds');
}
setTimeout(func, 4*1000, 4);
setTimeout(func, 8*1000, 8);
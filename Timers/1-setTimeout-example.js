setTimeout(
    ()=>{
        console.log('Hello After 5 sec');
    },
    5*1000 //in milliseconds
)

//setTimeout with function
// const func = () => {
//     console.log('Hello after 3 sec');
// };
// setTimeout(func, 3 * 1000);

// For: func(arg1, arg2, arg3, ...)
//We can use: setTimeout(func, delay, arg1, arg2, arg3, ...)

//setTimeout with function and arguments
// const rocks = who => {          //Here who is the parameter
//     console.log(who + 'JS');
// };
// setTimeout(rocks, 2*1000, 'Node');

//Two ways of calling an API
const https = require('http');

//Method 1: Promise

function fetch(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (rd) => data = data + rd);
            res.on('end', () => resolve(data));
            res.on('error', reject);
        });
    });
}
fetch('http://dummy.restapiexample.com/api/v1/employees')
    .then(data=>{
        let limit=JSON.parse(data).data.length;
        for(let i=0;i<limit;i++){
        console.log(JSON.parse(data).data[i].employee_name, JSON.parse(data).data[i].employee_salary);}
    });

//Method 2: Async Await

(async function read(){
    const data = await fetch('http://dummy.restapiexample.com/api/v1/employees');
    console.log(data.length);
})();
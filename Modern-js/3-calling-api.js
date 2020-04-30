//Two ways of calling an API
const https = require('https');

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
fetch('https://nodejs.org/en/docs/')
    .then(data=>{
        console.log(data.length);
    });

//Method 2: Async Await

(async function read(){
    const data = await fetch('https://nodejs.org/en/docs/');
    console.log(data.length);
})();
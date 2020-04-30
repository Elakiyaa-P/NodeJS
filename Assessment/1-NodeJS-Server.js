const http = require('http');

const requestListener = function (req, res) {
    res.writeHead(200);

    fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(data => {
            let limit = JSON.parse(data).data.length;
            for (i = 0; i <= limit; i++) {
                res.write('Employee Name:' + JSON.parse(data).data[i].employee_name +' '+
                    'Employee Salary:' + JSON.parse(data).data[i].employee_salary +' '+
                    'Employee Age:' + JSON.parse(data).data[i].employee_age)+'<br>';
            }
        });
}

function fetch(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let data = '';
            res.on('data', (rd) => data = data + rd);
            res.on('end', () => resolve(data));
            res.on('error', reject);
        });
    });
}

const server = http.createServer(requestListener);
server.listen(3000);
const path = require('path');
const fs = require('fs');

const files = ['.bash_history.txt', 'Elite', '.dbshell.txt'];

files.forEach(file => {
    try {
        const filePath = path.resolve(require('os').homedir(), file);
        const data = fs.readFileSync(filePath);
        console.log('File data is', data);
    }
    catch (err) {
        console.log('File Not Found!');
    }
});

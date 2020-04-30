const path = require('path');
const fs = require('fs');

const files = ['.bash_history', '.dbshell'];

files.forEach(file => {
    const filePath = path.resolve(require('os').homedir(), file);
    const data=fs.readFileSync(filePath);
    console.log('File data is',data);
});
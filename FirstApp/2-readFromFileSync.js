var fs=require('fs');
//Synchronous method
var content = fs.readFileSync('writeToConsole.js','utf-8');

console.log("File contents are:");
console.log(content);


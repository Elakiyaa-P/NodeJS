var fs=require('fs');
//AsSynchronous method
fs.readFile('writeToConsole.js','utf-8', function OnFileRead(err,data){
    if(err){
        throw err;
    }
    console.log("File contents are:");
    console.log(data);
})

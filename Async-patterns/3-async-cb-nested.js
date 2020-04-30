const fs=require('fs');

fs.readFile(__filename,function cb1(err,data){
    fs.writeFile(__filename+'.copy',data,function cb2(err){
        //Nest More callbacks here...
    console.log('File data is', data);
    });
});
console.log('TEST');
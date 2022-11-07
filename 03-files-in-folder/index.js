const fs = require('fs');
const path = require('path')

fs.readdir('03-files-in-folder/secret-folder', {withFileTypes: true}, (err, text) => {
text.forEach( file=>{
     
    if(file.isFile()!=false){
    fs.stat(`03-files-in-folder/secret-folder/${file.name}`, (err, stat)=>
    console.log(`${file.name.split('.')[0]} - ${file.name.split('.')[1]} - ${stat.size/1000} kB`)
    )}
    
})
    })
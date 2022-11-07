const fs = require('fs');
const path = require('path')
try{
fs.readdir('04-copy-directory/files-copy', (err, text) => {if(text!=undefined){
    text.forEach( file =>{ 
        fs.unlink(`04-copy-directory/files-copy/${file}`, (err) => {
            if (err) throw err;
          });

    })}})}finally{
fs.mkdir('04-copy-directory/files-copy', { recursive: true }, (err) => {
    if (err) throw err;}) 
fs.readdir('04-copy-directory/files', (err, text) => {
    text.forEach( file =>{
        fs.copyFile(`04-copy-directory/files/${file}`, `04-copy-directory/files-copy/${file}`, (err) => {
            if (err) throw err;})
}, (err) => {
    if (err) throw err;
  })})}

const fs = require('fs');
const path = require('path')
var a = ''
fs.readdir('05-merge-styles/styles', {withFileTypes: true}, (err, text) => {
text.forEach( file=>{
    if (file.name.split('.')[1]=='css'){console.log(file.name)
        const stream = fs.createReadStream(`05-merge-styles/styles/${file.name}`, 'utf-8');
        stream.on('data', chunk =>{ a += chunk
        console.log(a)
            fs.writeFile('05-merge-styles/project-dist/bundle.css', '\r\n'+ '\r\n'+ a, (err)=>{
                 if (err){console.log('error')}})
            });

    }
})
    })
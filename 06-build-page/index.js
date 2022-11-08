const fs = require('fs');
fs.mkdir('06-build-page/project-dist', { recursive: true }, (err) => {
    if (err) throw err;})
fs.mkdir('06-build-page/project-dist/assets', { recursive: true }, (err) => {
    if (err) throw err;})

//copy assets and folders
try{fs.readdir(`06-build-page/project-dist/assets`,  (err, t) =>{
    t.forEach(fold=>{
        fs.readdir(`06-build-page/project-dist/assets/${fold}`, (err, tex) => {if(tex!=undefined){
            tex.forEach( file =>{ 
                fs.unlink(`06-build-page/project-dist/assets/${fold}/${file}`, (err) => {
                    if (err) throw err;
                  });
        
        })}})
    })})}finally{

fs.readdir('06-build-page/assets', (err, text) => {
    text.forEach( folder =>{
        fs.mkdir(`06-build-page/project-dist/assets/${folder}`,{ recursive: true } , (err) => {
            if (err) throw err;})
        fs.readdir(`06-build-page/assets/${folder}`, (err, text) => {
            for(file in text){
                fs.copyFile(`06-build-page/assets/${folder}/${text[file]}`, `06-build-page/project-dist/assets/${folder}/${text[file]}`, (err) => {
                    if (err) throw err;})}}, (err) =>{if (err) throw err})
}, (err) => {
    if (err) throw err;
  })})}

// css builder
var a=''
fs.readdir('06-build-page/styles', {withFileTypes: true}, (err, text) => {
    text.forEach( file=>{
        if (file.name.split('.')[1]=='css'){
            const stream = fs.createReadStream(`06-build-page/styles/${file.name}`, 'utf-8');
            stream.on('data', chunk =>{ 
                a+='\r\n'+ '\r\n'
                a += chunk 
                fs.writeFile('06-build-page/project-dist/style.css','\n'+'\n'+ a, (err)=>{
                     if (err){console.log('error')}})
                });
        }
    })
        })

// HTML builder


fs.readdir('06-build-page/components', {withFileTypes: true}, (err, data) => {
    var db = []
    data.forEach( c=>{
        db.push(`{{${c.name.split('.')[0]}}}`)
            }) 
    fs.readFile('06-build-page/template.html', (err, template)=>{

        var str = template.toString()
        var arr = str.split("\r\n")
        
    function replace(data, arr, db){
        for(y in arr){
                if(arr[y]===''){
   
                    arr[y] = data
                    break       
                }
        }
    fs.writeFile('06-build-page/project-dist/index.html', arr.join('\r\n'), (err) => {
        if (err) throw err;})
    } 
    for(i in arr){
        for(j of db){
            if(j === arr[i].trim()){
                arr[i]='' 
                fs.readFile(`06-build-page/components/${j.slice(2, j.length-2)}.html`,{encoding: 'utf-8'}, (err, data)=>{
                    replace(data, arr, db)
                    })
            }
        }
    }

})
        
  })
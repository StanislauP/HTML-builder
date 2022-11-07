const fs = require('fs');
//fs.writeFile('02-write-file/text.txt', (err)=>{
//    if (err){console.log('error')}
//});

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

let a = 'exit'
 

rl.question('Write your meeseage  ', function ask(answer) {
  // TODO: Log the answer in a database
  if(answer === a){
    console.log('good bye!')
    rl.close()
}
  fs.write('02-write-file/text.txt', answer, (err)=>{
    if (err){console.log('error')}

});
rl.close()
});

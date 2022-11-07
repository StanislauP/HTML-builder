const fs = require('fs');

fs.readdir('01-read-file', (err, text) => {
    const stream = fs.createReadStream('01-read-file/text.txt', 'utf-8');
    let data = '';
    stream.on('data', chunk => data += chunk);
    stream.on('end', () => console.log(data));
    stream.on('error', error => console.log('Error', error.message));
    })
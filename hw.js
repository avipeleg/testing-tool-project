const fs = require('fs');

const write_file = fs.writeFileSync('fileOne.txt', 'Node JS - writting a file', 'utf8');
const read_file = fs.readFileSync('/fileOne.txt', 'uft8');
console.log('read_file');


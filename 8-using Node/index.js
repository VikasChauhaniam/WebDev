const fs = require('fs');

fs.writeFile("message.txt","bhaiiiiiiii", (err) => {
    if (err) throw err;
    console.log('file has been saved man');
  });
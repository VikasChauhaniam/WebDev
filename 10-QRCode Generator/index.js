import rl from 'readline';
import qr from 'qr-image';
import fs from 'fs'; 


const readline = rl.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);

    const myText = name;

var qr_svg = qr.image(myText, { type: 'png' });
qr_svg.pipe(fs.createWriteStream('V.svg'));

fs.writeFile("message.txt",myText, (err) => {
    if (err) throw err;
    console.log('file has been saved man');
  });

    readline.close();
  });





 
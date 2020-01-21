const fs = require('fs');
const ls = () => {


  process.stdin.on('data', (data)=> {
    const cmd = data.toString().trim();
    process.stdout.write(data);

    if (cmd === 'ls'){
      // process.stdout.write('HELLO');

      process.stdout.write(process.ls());
    }


  });
}
module.exports = ls;

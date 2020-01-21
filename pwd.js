const pwd = () => {
  process.stdin.on('data', (data)=> {
    const cmd = data.toString().trim();

    if (cmd === 'pwd'){
      // process.stdout.write('HELLO');
      process.stdout.write(process.cwd() + '\n');
    }

    //Output a prompt
    process.stdout.write('prompt > ');
  });
}

module.exports = pwd;

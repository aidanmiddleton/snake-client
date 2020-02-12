const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data) => {
    handleUserInput(data);
    // client.write(data);
    
  });
  const handleUserInput = (data) => {
    if (data === '\u0003') {
      process.exit();
    }
  };
  return stdin;
}

module.exports = { setupInput };
let connection;

const setupInput = function(conn) {
  connection = conn;
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
    if (data === 'w') {
      connection.write('Move: up');
    }
    if (data === 'a') {
      connection.write('Move: left');
    }
    if (data === 's') {
      connection.write('Move: down');
    }
    if (data === 'd') {
      connection.write('Move: right');
    }
    if (data === 'q') {
      connection.write("Say: GG EZ")
    }
  };
  return stdin;
}

module.exports = { setupInput };
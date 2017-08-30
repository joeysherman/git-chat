const initSocket = function (io) {
  io.on('connection', (socket) => {
    console.log('a new connection')
    socket.on('test', (msg) => {
      console.log(`test - ${msg}`);
    });
  });
};

module.exports = initSocket;


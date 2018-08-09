import openSocket from 'socket.io-client';
import config from '../../config.json';

const  socket = openSocket(config.socketUrl);

function subscribeToLoggedUser(loggedUsers) {
  socket.on('loggedUser', loggedUsers => {
    console.log(loggedUsers);
  });
}

function sendLogged(userData) {
  socket.emit('logged', userData);
}

export { sendLogged, subscribeToLoggedUser };
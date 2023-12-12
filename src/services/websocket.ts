import { io } from 'socket.io-client';

const socket = io('https://6npvxhld-3030.brs.devtunnels.ms/', { autoConnect: false });

socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;
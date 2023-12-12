import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_URL_API, { autoConnect: false });

socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;
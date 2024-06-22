const io = require("socket.io-client");
const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("connected to server");
});

socket.on("disconnect", () => {

  console.log("disconnected from server");
});

socket.on("chat message", msg => {
    console.log(msg);
  });
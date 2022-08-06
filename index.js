import MessageService from "./message-service.js";

let userId = "Ogomes21";
const messageService = new MessageService();

window.addEventListener("load", function () {
document.getElementById("greeting").innerHTML = `Welcome, ${userId}!`;
messageService.getAllMessages();
});
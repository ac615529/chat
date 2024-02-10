function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var message = messageInput.value;

    if (message.trim() !== "") {
        var messageDiv = document.createElement("div");
        messageDiv.innerText = message;
        document.getElementById("messages").appendChild(messageDiv);
        messageInput.value = "";
    } else {
        alert("Please type a message.");
    }
}

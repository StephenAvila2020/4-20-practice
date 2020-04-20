const messageInputField = document.querySelector("#message");

messageInputField.addEventListener("keyup",
    function (){
       const messageInput = messageInputField.value;
       document.querySelector("#blue-input").textContent = messageInput;
       document.querySelector("#green-input").textContent = messageInput;
    }
)
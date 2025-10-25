const messageInput = document.getElementById("messageInput");
const shiftInput = document.getElementById("shiftInput");
const encryptBtn = document.getElementById("encryptBtn");
const decryptBtn = document.getElementById("decryptBtn");
const result = document.getElementById("result");


function encrypt() {
    let messageVal = messageInput.value;
    if (messageVal === "") {
        result.innerText = "Please enter a message.";
        return;
    }
    function isLetter(char) {
        return char.length === 1 && /[a-zA-Z]/.test(char);
    }
    for (let i = 0; i < messageVal.length; i++) {
        if (isLetter(messageVal[i])) {
            console.log();
        } else {
            console.log("no");
        }
    }
}

function decrypt() {

}

//Encrypt
encryptBtn.addEventListener("click", encrypt);
encryptBtn.addEventListener("click", decrypt);

encryptBtn.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        encrypt();
    }
});

encryptBtn.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        decrypt();
    }
});




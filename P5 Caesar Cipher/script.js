const messageInput = document.getElementById("messageInput");
const shiftInput = document.getElementById("shiftInput");
const encryptBtn = document.getElementById("encryptBtn");
const decryptBtn = document.getElementById("decryptBtn");
const result = document.getElementById("result");


function encrypt() {
    let mVal = messageInput.value;
    if (mVal === "") {
        result.innerText = "Please enter a message.";
        return;
    }
        
    function isLetter(char) {
        const cleaned = char.replace(/[^a-zA-Z\s]/g, '');
        return cleaned;
    }

    result.innerText = "";

    for (let i = 0; i < mVal.length; i++) { 
        if (isLetter(mVal[i])) {
            let shift = mVal.charCodeAt(i) + Number(shiftInput.value);
            result.innerText += String.fromCharCode(shift); 
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

console.log("z".charCodeAt())


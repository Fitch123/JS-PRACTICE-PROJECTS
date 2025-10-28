const messageInput = document.getElementById("messageInput");
const shiftInput = document.getElementById("shiftInput");
const encryptBtn = document.getElementById("encryptBtn");
const decryptBtn = document.getElementById("decryptBtn");
const result = document.getElementById("result");


function encrypt() {
    let mVal = messageInput.value;
    if (mVal.trim() === "") {
        result.innerText = "Please enter a message.";
        return;
    }

    result.innerText = "";

    for (let i = 0; i < mVal.length; i++) { 
            let curr = mVal.charCodeAt(i);
            let shift;
            let normalized;

        if (curr >= 65 && curr <= 90) {
            curr -= 65
            shift = curr + Number(shiftInput.value);
            let upperC = shift % 26;
            normalized = upperC + 65;
            result.innerText += String.fromCharCode(normalized);
        } else if (curr >= 97 && curr <= 122) {
            curr -= 97;
            shift = curr + Number(shiftInput.value);
            let lowerC = shift % 26;
            normalized = lowerC + 97;
            result.innerText += String.fromCharCode(normalized);
        } else {
            result.innerText += mVal[i];
        }
    }
    messageInput.value = "";
}

function decrypt() {
    let mVal = messageInput.value;
    if (mVal.trim() === "") {
        result.innerText = "Please enter a message.";
        return;
    }

    result.innerText = "";

    for (let i = 0; i < mVal.length; i++) { 
            let curr = mVal.charCodeAt(i);
            let shift;
            let normalized;

        if (curr >= 65 && curr <= 90) {
            curr -= 65
            shift = curr - Number(shiftInput.value);
            let upperC = (shift + 26) % 26;
            normalized = upperC + 65;
            result.innerText += String.fromCharCode(normalized);
        } else if (curr >= 97 && curr <= 122) {
            curr -= 97;
            shift = curr - Number(shiftInput.value);
            let lowerC = (shift + 26) % 26;
            normalized = lowerC + 97;
            result.innerText += String.fromCharCode(normalized);

        } else {
            result.innerText += mVal[i];
        }
    }
    messageInput.value = "";
}

//Encrypt
encryptBtn.addEventListener("click", encrypt);
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        encrypt();
    }
});

//Decrypt
decryptBtn.addEventListener("click", decrypt);
decryptBtn.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        decrypt();
    }
});



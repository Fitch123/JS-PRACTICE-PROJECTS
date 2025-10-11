const input = document.getElementById("userInput");
const result = document.getElementById("result");
const checkBtn = document.getElementById("checkBtn");

function checker() {
    let val = input.value;
    let cleaned = val.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversed = cleaned.split("").reverse().join("");
    
    if (val === "") {
        result.innerText = "Please enter a text"
        return;
    } 

    if (cleaned === reversed) {
        result.innerText = val + " is a palindrome";
        result.style.color = '#6F0';
    } else {
        result.innerText = val + " is not a palindrome";
        result.style.color = 'red';
    }

}

checkBtn.addEventListener("click", checker);








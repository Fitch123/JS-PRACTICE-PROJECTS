const input = document.getElementById("numberInput");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

const romanNumerals = [
    {value: 1000, symbol:"M"},
    {value: 900, symbol:"CM"},
    {value: 500, symbol:"D"},
    {value: 400, symbol:"CD"},
    {value: 100, symbol:"C"},
    {value: 90, symbol:"XC"},
    {value: 50, symbol:"L"},
    {value: 40, symbol:"XL"},
    {value: 10, symbol:"X"},
    {value: 9, symbol:"IX"},
    {value: 5, symbol:"V"},
    {value: 4, symbol:"IV"},
    {value: 1, symbol:"I"}
];

function romanConverter () {
    let inputVal = input.value;

    if (inputVal > 3999 || inputVal < 1) {
            result.innerText =  "Choose a number between 1 and 3999";
            return;
        } 

    result.innerText = "";

    for (let i = 0; i < romanNumerals.length; i++) {
        while (inputVal >= romanNumerals[i].value) {
            result.innerText += romanNumerals[i].symbol;
            inputVal -= romanNumerals[i].value;
        }
        if (inputVal === 0) {
            break;
        } 
    }
}

convertBtn.addEventListener("click", romanConverter)

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        romanConverter();
    }
})

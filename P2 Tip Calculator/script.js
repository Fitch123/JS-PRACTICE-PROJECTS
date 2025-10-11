const billAmount = document.getElementById("billAmount");
const tipPercentage = document.getElementById("tipPercent");
const numPeople = document.getElementById("numPeople");
const result = document.getElementById("result");
const calculateBtn = document.getElementById("calculate");

function calculateTip() {

    const bill = parseFloat(billAmount.value);
    const tipPercent = parseFloat(tipPercentage.value);
    const people = parseFloat(numPeople.value) || 1;

    if (isNaN(bill) || isNaN(tipPercent) || bill < 0 || tipPercent < 0) {
        result.innerText = "⚠️ Please enter valid numbers!";
        return;
    }

    const tip = (tipPercent * 0.01) * bill;
    const totalPlusTip = tip + bill;
    const perPerson = totalPlusTip / people;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    result.innerText = `Tip Total: ${formatter.format(tip)} 
                        Total Amount: ${formatter.format(totalPlusTip)}
                        Total Per Person: ${formatter.format(perPerson)}`;

}

calculateBtn.addEventListener("click", calculateTip);

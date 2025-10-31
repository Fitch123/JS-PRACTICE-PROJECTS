const price = document.getElementById("price");
const cash = document.getElementById("cash");
const checkBtn = document.getElementById("checkBtn");
const output = document.getElementById("output");

const denominationValues = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
};


const cashRegister = {
    status: "OPEN", // OPEN, CLOSED, INSUFFICIENT_FUNDS
    cid: [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.10],
        ["QUARTER", 4.25],
        ["ONE", 90.00],
        ["FIVE", 55.00],
        ["TEN", 20.00],
        ["TWENTY", 60.00],
        ["ONE HUNDRED", 100.00]
    ]
}

function checker() {
    if (price.value.trim() === "" || 
        cash.value.trim() === "" || 
        isNaN(price.value) || 
        isNaN(cash.value)) {
        output.innerText = "Please enter a valid number.";
        return;
    }
}

let changeDue = cash.value - price.value;

function checkCashRegister(price, cash, cid) {
    let changeDue = cash - price;

    if (changeDue < 0) {
        output.innerText = "ERROR";
        return;
    } else if (changeDue === 0) {
        output.innerText = "No change is needed.";
    } else {
        for (let i = cashRegister.cid.length - 1; i >= 0; i--) {
            let denomName = cashRegister.cid[i][0];
            let denomAmount = cashRegister.cid[i][1];
            
        }
    }
}

checkBtn.addEventListener("click", () => {
    const priceVal = price.value;
    const cashVal = cash.value;
    checker();
    checkCashRegister(priceVal, cashVal, cashRegister.cid);
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const priceVal = price.value;
        const cashVal = cash.value;
        checker();
        checkCashRegister(priceVal, cashVal, cashRegister.cid);
    }
});


// TEST
for (let i = cashRegister.cid.length - 1; i >= 0; i--) {
    let price = 10;
    let cash = 20;    
    let changeDue = cash - price;
    let denomName = cashRegister.cid[i][0];
    let denomAmount = cashRegister.cid[i][1];
}
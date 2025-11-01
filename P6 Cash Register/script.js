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

function checkCashRegister(price, cash, cid) {
    const changeArray = [];

    let changeDue = cash - price;

    if (changeDue < 0) {
        output.innerText = "ERROR";
        return;
    } else if (changeDue === 0) {
        output.innerText = "No change is needed.";
    } else {
        //FOR LOOP STARTS FROM THE LAST TO THE FIRST ARRAY
        for (let i = cid.length - 1; i >= 0; i--) {
            let denomName = cid[i][0];
            let denomAmount = cid[i][1];
            // denomValue USES THE DENOMINATION NAME TO SELECT THE KEY
            let denomValue = denominationValues[denomName];
            let changeGiven = 0;
            while (changeDue >= denomValue && denomAmount > 0) {
                changeDue -= denomValue;
                denomAmount -= denomValue;
                changeGiven += denomValue;
                changeDue = Math.round(changeDue * 100) / 100;
            }

            //STORES DENOMINATION NAME AND CHANGE GIVEN TO THE changeArray[]
            if (changeGiven > 0) {
                changeGiven = Math.round(changeGiven * 100) / 100;
                changeArray.push([denomName, changeGiven]);
            }

            //UPDATES THE denomAmount TO NEW AMOUNT AFTER WHILE LOOP
            denomAmount = Math.round(denomAmount * 100) / 100;
            cid[i][1] = denomAmount;
        }

        changeDue = Math.round(changeDue * 100) / 100;
        
        //RETURNS TRUE IF EVERY CID[1] HAS ANY AMOUN IF NONE HAS RETURNS FALSE
        let allEmpty = cid.every(item => item[1] <= 0.001);

        //STATUS UPDATE + OUTPUT
        if (allEmpty && changeDue === 0) {
            cashRegister.status = "CLOSED";
            output.innerHTML = `Status: <span class="status-closed">${cashRegister.status}</span><br>`;
        } else if (changeDue > 0) {
            cashRegister.status = "INSUFFICIENT FUNDS";
            output.innerHTML = `Status: <span class="status-insufficient">${cashRegister.status}</span>`;
            return;
        } else {
            cashRegister.status = "OPEN"
            output.innerHTML = `Status: <span class="status-open">${cashRegister.status}</span><br>`;
        }

        output.innerHTML += "Change given: ";
        for (let i = 0; i < changeArray.length; i++) {
            output.innerHTML += "<br>- " + changeArray[i][0] + ": " + changeArray[i][1];
        }
    }
}

function handleCashRegister() {
    const priceVal = price.value;
    const cashVal = cash.value;
    checker();
    checkCashRegister(priceVal, cashVal, cashRegister.cid);
}
checkBtn.addEventListener("click", handleCashRegister);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        handleCashRegister();
    }
});

    //Test for CLOSED
  /*["PENNY", 0.50],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]*/
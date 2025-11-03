
document.addEventListener("DOMContentLoaded", () => {
    // Code
    const numbers = document.querySelectorAll(".number");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#times");
const divide = document.querySelector("#divide");
const del = document.querySelector(".delete-button");
const reset = document.querySelector(".reset-button");
const equal = document.querySelector(".equals-button");
const displayText = document.querySelector(".calculator-screen-text");
const historyList = document.querySelector(".history-list");

numbers.forEach((number) => {
    // Event Listener
    number.addEventListener("click", (e) => {
        if (checkError()) {
            displayText.innerHTML = "";
        }
        displayText.innerHTML += number.innerHTML;

        const firstNumber = displayText.innerHTML.split(/[\+\-\*\/]/)[0];
        const secondNumber = displayText.innerHTML.split(/[\+\-\*\/]/)[1];
        
        if(firstNumber?.length > 9 || secondNumber?.length > 9){
        displayText.innerHTML = displayText.innerHTML.slice(0, -1);
        }
        
        const dotsFirst = firstNumber.match(/\./g);
        if (dotsFirst && dotsFirst.length > 1) {
        displayText.innerHTML = displayText.innerHTML.slice(0, -1);
        }
        if (secondNumber) {
        const dotsSecond = secondNumber.match(/\./g);
      
        if (dotsSecond && dotsSecond.length > 1) {
          displayText.innerHTML = displayText.innerHTML.slice(0, -1);
        }
        }
    });
    
});

const operators = {
    plus,
    minus,
    multiply,
    divide,
};

for (const operator in operators) {
    operators[operator].addEventListener("click", () => {
        // Code
        if (!checkError() && displayText.innerHTML !== "") {
            displayText.innerHTML += operators[operator].innerHTML;
        }
        const operatorsInDisplay = displayText.innerHTML.match(/[\+\-\*\/]/g);
        if (operatorsInDisplay && operatorsInDisplay.length > 1) {
            displayText.innerHTML = displayText.innerHTML.slice(
              0,
              displayText.innerHTML.length - 1
            );
        }
});
}

del.addEventListener("click", () => {
    if (!checkError()) {
      displayText.innerHTML = displayText.innerHTML.slice(0, -1);
    }
});

reset.addEventListener("click", () => {
    displayText.innerHTML = "";
});

equal.addEventListener("click", () => {
    operateAndShow();
});

const calculate = (a, b, operator) => {
    // Switch
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
    }
};

const checkError = () => {
    // If code
    if (
        displayText.innerHTML === "Error" ||
        displayText.innerHTML === "Infinity" ||
        displayText.innerHTML === "undefined" ||
        displayText.innerHTML === "NaN"
    ) {
        return true;
    }
      
};

const operateAndShow = () => {
    try {
      // Code
        const firstNumber = displayText.innerHTML.split(/[\+\-\*\/]/)[0];
        const secondNumber = displayText.innerHTML.split(/[\+\-\*\/]/)[1];

        const operator = displayText.innerHTML.match(/[\+\-\*\/]/)[0];

        const result = calculate(
            parseFloat(firstNumber),
            parseFloat(secondNumber),
            operator
        );

        const roundedResult = Math.round(result * 10000) / 10000;   

        if (!checkError()) {
            displayText.innerHTML = roundedResult;
            // History item and render code must be added bellow
            const historyItem = `${firstNumber} ${operator} ${secondNumber} = ${roundedResult}`;
            renderHistoryItem(historyItem);

            addHistoryItemToLocalStorage(historyItem);
      }
    } catch (e) {
      // Code
      displayText.innerHTML = "";
    }
};

const renderHistoryItem = (item) => {
    // Code
    const historyItem = document.createElement("li");
    historyItem.classList.add("history-item");
    historyItem.innerHTML = item;

    if (!checkError()) {
        historyList.prepend(historyItem);
    }
    
    if (historyList.children.length > 9) {
        historyList.removeChild(historyList.lastChild);
    }
};

const getHistoryItemsFromLocalStorage = () => {
    // Code
    const historyItems = JSON.parse(localStorage.getItem("historyItems")) || [];
    return historyItems;
};

const addHistoryItemToLocalStorage = (item) => {
    // Code
    if (!checkError()) {
        // Code
        const historyItems = getHistoryItemsFromLocalStorage();
        historyItems.push(item);
    }
    if (historyItems.length > 9) {
        historyItems.shift();
    }
    localStorage.setItem("historyItems", JSON.stringify(historyItems));

    
};



    const historyItems = getHistoryItemsFromLocalStorage();
    historyItems.forEach((item) => renderHistoryItem(item));
    
});
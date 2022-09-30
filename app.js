// GLOBAL VARs
let balance = document.querySelector("#balance");
let transactions = document.querySelector("#transactions");
let total = 0;

// ADD expense button event listener
let addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", addExpense);

// Funtion to ADD expense
function addExpense() {
  let newExpense = document.querySelector("#new-expense");
  let newExpenseItem = document.querySelector("#new-expense-item");

  expense = {
    item: newExpenseItem.value,
    amount: +newExpense.value,
  };

  if (expense.item && expense.amount != "") {
    total -= expense.amount;

    newExpense.value = "";

    balance.innerHTML = `$${total.toFixed(2)}`;

    let listItem = document.createElement("li");
    listItem.classList.add("red");

    transactions.appendChild(listItem).innerHTML = `${
      expense.item
    }: $${expense.amount.toFixed(2)}`;

    newExpenseItem.value = "";
  } else {
    alert("ENTER NAME & AMOUNT");
  }
}

// ADD earnings button event listener
let addEarningBtn = document.querySelector("#add-earning-btn");
addEarningBtn.addEventListener("click", addEarning);

function addEarning() {
  let newEarning = document.querySelector("#new-earning");

  let newDate = new Date();
  let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  earning = {
    date: `${month}/${day}/${year}`,
    amount: +newEarning.value,
  };

  if (earning.amount != "") {
    total += earning.amount;

    newEarning.value = "";
    balance.innerHTML = `$${total.toFixed(2)}`;

    let listItem = document.createElement("li");
    listItem.classList.add("green");

    transactions.appendChild(listItem).innerHTML = `${
      earning.date
    }: $${earning.amount.toFixed(2)}`;
  } else {
    alert("ENTER EARNINGS!");
  }
}

// CLEAR BUTTON event listener
let clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clear);

// Clear Function
function clear() {
  while (transactions.firstChild) {
    transactions.removeChild(transactions.firstChild);
  }
  total = 0;
  balance.innerHTML = `$${total.toFixed(2)}`;
}

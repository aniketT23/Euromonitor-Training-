let main = document.getElementById("cont1");
let container = document.getElementById("info");
let data = JSON.parse(localStorage.getItem("showDetails"));
const displayDetails = () => {
  //   console.log(data);
  let name = document.createElement("h5");
  let email = document.createElement("h5");
  let account = document.createElement("h5");
  let accountType = document.createElement("h5");
  let balance = document.createElement("h5");
  name.innerHTML = "Name: " + data.name;
  email.innerHTML = "Email: " + data.email;
  account.innerHTML = "Account Number: " + data.accountNo;
  accountType.innerHTML = "Account Type: " + data.accountType;
  balance.innerHTML = "Balance: ₹" + data.deposit;
  container.append(name, email, account, accountType, balance);
};

displayDetails();

let countW = 0;
let countD = 0;
const withDraw = () => {
  if (countW > 0) {
    return;
  } else {
    let amountField = document.createElement("input");
    let btn = document.createElement("button");
    btn.innerHTML = "Withdraw";
    amountField.setAttribute("type", "number");
    btn.addEventListener("click", function decrementMoney() {
      let amount = amountField.value;
      // console.log("money:-", amount);
      withDrawProcess(amount);
    });
    main.append(amountField, btn);
    countW++;
  }
};

let accountDetails = JSON.parse(localStorage.getItem("accountDetails"));

function withDrawProcess(amount) {
  if (Number(amount) > Number(data.deposit)) {
    alert("you cannot withdraw the amount due to insufficient balance");
  } else {
    data.deposit = Number(data.deposit) - Number(amount);
    localStorage.setItem("showDetails", JSON.stringify(data));
    for (let i = 0; i < accountDetails.length; i++) {
      if (accountDetails[i].accountNo == data.accountNo) {
        accountDetails[i].deposit = data.deposit;
      }
    }
    localStorage.setItem("accountDetails", JSON.stringify(accountDetails));
    window.location.href = "../src/dashboard.html";
  }
}

const deposit = () => {
  if (countD > 0) {
    return;
  } else {
    let amountField = document.createElement("input");
    let btn = document.createElement("button");
    btn.innerHTML = "Deposit";
    amountField.setAttribute("type", "number");
    btn.addEventListener("click", function incrementMoney() {
      let amount = amountField.value;

      depositProcess(amount);
    });

    main.append(amountField, btn);
    countD++;
  }
};

function depositProcess(amount) {
  if (data.accountType == "Current") {
    if (amount < 1000) {
      alert("Minimum balance should not be less than 1000");
    } else {
      data.deposit = Number(amount) + Number(data.deposit);
    }
  } else {
    data.deposit = Number(data.deposit) + Number(amount);

  }
  localStorage.setItem("showDetails", JSON.stringify(data));
  for (let i = 0; i < accountDetails.length; i++) {
    if (accountDetails[i].accountNo == data.accountNo) {
      accountDetails[i].deposit = data.deposit;
    }
  }
  localStorage.setItem("accountDetails", JSON.stringify(accountDetails));
  window.location.href = "../src/dashboard.html";
}

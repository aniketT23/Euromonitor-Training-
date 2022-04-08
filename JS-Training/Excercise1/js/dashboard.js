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
      console.log("money:-",amount);
     withDrawProcess(amount )
    });
    main.append(amountField, btn);
    countW++;
  }
};

const deposit = () => {
  if (countD > 0) {
    return;
  } else {
    let amountField = document.createElement("input");
    let btn = document.createElement("button");
    btn.innerHTML = "Deposit";
    amountField.setAttribute("type", "number");
    main.append(amountField, btn);
    countD++;
  }
};

let accountDetails = JSON.parse(localStorage.getItem("accountDetails"));

function withDrawProcess(amount) {
  for (let i = 0; i < accountDetails.length; i++) {
    if (accountDetails[i].accountNo == data.accountNo) {
      accountDetails[i].deposit = Number(accountDetails[i].deposit) - amount;
      data.deposit = Number(data.deposit) - amount;
    }
  }
  console.log("working");
  
}

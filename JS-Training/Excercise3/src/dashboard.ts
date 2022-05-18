var readlineSync = require("readline-sync");
const axios = require("axios").default;

import * as trailData from "./login";

const getData = async () => {
  let AccountData = await trailData.sendData;
  let AccountNO = trailData.accData.accountNo;
  let res = await axios.get(
    `http://localhost:3000/Users?accountNo=${AccountNO}`
  );
  let data = await res.data[0];
  let id = data.id;

  // console.log(data);

  let choice = readlineSync.question(
    "Please Select a Option: \n 1.Withdraw \n 2.Deposit "
  );
  if (+choice == 1) {
    //Withdraw
    let amount = readlineSync.question("Enter Amount you want to Withdraw: ");
    withDraw(amount, data, id);
  } else if (+choice == 2) {
    //Deposit
    let amount = readlineSync.question("Enter Amount you want to Deposit: ");
    deposit(amount, data, id);
  } else {
    throw "Choose a Valid Option";
  }
};
getData();

async function withDraw(amount: any, data: any, id: number) {
  if (+amount > +data.amount) {
    throw "you cannot withdraw the amount due to insufficient balance";
  } else {
    data.amount = +data.amount - +amount;
    // postData(data,url);
    await axios.put(`http://localhost:3000/Users/${id}`, data);
    console.log("User Data: ", data);
  }
}

async function deposit(amount: any, data: any, id: number) {
  if (data.account == "Current") {
    updateAmount(amount, 1000, data);
  } else {
    updateAmount(amount, 500, data);
  }
  await axios.put(`http://localhost:3000/Users/${id}`, data);
  console.log("User Data: ", data);
}

let updateAmount = (amount: any, definedAmount: number, data: any) => {
  if (+amount < definedAmount) {
    throw `Minimum balance should not be less than ${definedAmount}`;
  } else {
    data.amount = +data.amount + +amount;
  }
};
export {};

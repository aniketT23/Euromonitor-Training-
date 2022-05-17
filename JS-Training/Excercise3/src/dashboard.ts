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
  let id=data.id;
 
// console.log(data);

  let choice = readlineSync.question(
    "Please Select a Option: \n 1.Withdraw \n 2.Deposit "
  );
  if (+choice == 1) { //Withdraw
    let amount = readlineSync.question("Enter Amount you want to Withdraw: ");
    if (+amount > +data.amount) {
      throw "you cannot withdraw the amount due to insufficient balance";
    } else {
      data.amount = +data.amount - +amount;
      // postData(data,url);
      await axios.put(`http://localhost:3000/Users/${id}`, data);
      console.log("User Data: ", data);
    }
  } else if (+choice == 2) { //Deposit
    let amount = readlineSync.question("Enter Amount you want to Deposit: ");
    if (data.account == "Current") {
      if (+amount < 1000) {
        throw "Minimum balance should not be less than 1000";
      } else {
        data.amount = +data.amount + +amount;
      }
    } else {
      if (+amount < 500) {
        throw "Minimum balance should not be less than 500";
      } else {
        data.amount = +data.amount + +amount;
      }
    }
    await axios.put(`http://localhost:3000/Users/${id}`, data);
    console.log("User Data: ", data);
  } else {
    throw "Choose a Valid Option";
  }
};
getData();



export {};

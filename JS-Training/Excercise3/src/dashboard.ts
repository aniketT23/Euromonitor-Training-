// import * as readline from "readline";

// import { stdin, stdout } from "process";

// const rl = readline.createInterface({
//   input: stdin,
//   output: stdout,
// });

// let data = {
//   name: "Aniket Tiwari",
//   email: "tiwarianiket91@gmail.com",
//   password: "Aniket@123",
//   accountNo: "Sav9208650280",
//   accountType: "Saving",
//   deposit: 7200,
// };

// function BankingProcess() {
//   rl.question("Please Select a Option: \n 1.Withdraw \n 2.Deposit", (value) => {
//     if (+value == 1) {
//       rl.question("Enter Amount you want to Withdraw: ", (amount1) => {
//         if (+amount1 > data.deposit) {
//           console.log(
//             "you cannot withdraw the amount due to insufficient balance"
//           );
//         } else {
//           data.deposit = data.deposit - +amount1;
//           console.log("Your Account Info: ", data);
//         }
//       });
//     }
//     if (+value == 2) {
//       rl.question("Enter Amount you want Deposit: ", (amount2) => {
//         if (data.accountType == "Current") {
//           if (+amount2 < 1000) {
//             console.log("Minimum balance should not be less than 1000");
//           } else {
//             data.deposit = data.deposit + +amount2;
//             console.log("Amount Depositied Succesfully");
//           }
//         } else {
//           if (+amount2 < 500) {
//             console.log("Minimum balance should not be less than 1000");
//           } else {
//             data.deposit = data.deposit + +amount2;
//             console.log("Amount Depositied Succesfully");
//           }
//         }
//         console.log("Your Account Info: ", data);
//       });
//     }
//   });
// }

// BankingProcess();

var readlineSync = require("readline-sync");
const axios = require("axios").default;

const getData = async () => {
  let res = await axios.get("http://localhost:3000/Users/1");

  let choice = readlineSync.question(
    "Please Select a Option: \n 1.Withdraw \n 2.Deposit "
  );
  if (+choice == 1) {
    let amount = readlineSync.question("Enter Amount you want to Withdraw: ");
    if (+amount > +res.deposit) {
      throw "you cannot withdraw the amount due to insufficient balance";
    } else {
      res.deposit = +res.deposit - +amount;
      // postData(res)
      console.log("User Data: ", res.deposit);
    }
  } else if (+choice == 2) {
    let amount = readlineSync.question("Enter Amount you want to Deposit: ");
    if (res.account == "Current") {
      if (+amount < 1000) {
        throw "Minimum balance should not be less than 1000";
      }
    } else {
      if (+amount < 500) {
        throw "Minimum balance should not be less than 500";
      }
    }
    console.log("User Data: ", res);
  } else {
    throw "Choose a Valid Option";
  }
};
getData();

// const postData= async(data:{})=>{
//   return await axios.put("http://localhost:3000/Users/1",data)
// }

export {};

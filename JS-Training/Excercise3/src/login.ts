var readlineSync = require("readline-sync");
const axios = require("axios").default;

let accData: any;
let getData = async () => {
  let res = await axios.get("http://localhost:3000/Users");
  let data = res.data;
  let accountNum = readlineSync.question("Enter your Account Number: ");
  let pass = readlineSync.question("Enter your Password : ");
  for (let i: number = 0; i < data.length; i++) {
    if (accountNum == data[i].accountNo && pass == data[i].password) {
      accData = data[i];
      return accData;
    }
  }
  console.log("Invalid Credentials");

  return;
};

let sendData = getData();

export { accData, sendData };

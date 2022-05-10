var readlineSync = require("readline-sync");
const axios = require("axios").default;

const getData = async () => {
  let res = await axios.get("http://localhost:3000/Users/1");
  let data=await res.data;
  

  let choice = readlineSync.question(
    "Please Select a Option: \n 1.Withdraw \n 2.Deposit "
  );
  if (+choice == 1) {
    let amount = readlineSync.question("Enter Amount you want to Withdraw: ");
    if (+amount > +data.amount) {
      throw "you cannot withdraw the amount due to insufficient balance";
    } else {
      data.amount = +data.amount - +amount;
      postData(data)
      console.log("User Data: ", data);
    }
  } else if (+choice == 2) {
    let amount = readlineSync.question("Enter Amount you want to Deposit: ");
    if (data.account == "Current") {
      if (+amount < 1000) {
        throw "Minimum balance should not be less than 1000";
      }else{
        data.amount=+data.amount + +amount;
      }
    } else {
      if (+amount < 500) {
        throw "Minimum balance should not be less than 500";
      }else{
        data.amount=+data.amount + +amount;
      }
    }
    postData(data)
    console.log("User Data: ", data);
  } else {
    throw "Choose a Valid Option";
  }
};
getData();

const postData= async(data:{})=>{
  return await axios.put("http://localhost:3000/Users/1",data)
}

export {};

var readlineSync = require("readline-sync");
const axios = require("axios").default;

let passRegex = new RegExp(
  "^(?=.*[0-9])" +
    "(?=.*[a-z])(?=.*[A-Z])" +
    "(?=.*[@#$%^&+=])" +
    "(?=\\S+$).{8,20}$"
);

let emailRegex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
let Year = new Date();
let currYear = Year.getFullYear();

console.log("SignUp for Banking ");

let firstName = readlineSync.question("Enter Your First Name: ");
let lastName = readlineSync.question("Enter your last Name: ");
let email = readlineSync.question("Enter your Email ID: ");
let password = readlineSync.question("Enter your password: ");
let age = readlineSync.question("Enter your Date of Birth: ");
let accountType = readlineSync.question(
  "Choose your Account Type: \n1.Saving Account \n2.Current Account "
);
let account: string;
if (accountType == 1) {
  account = "Saving";
} else if (accountType == 2) {
  account = "Current";
} else {
  throw "Please Select a Valid Option";
}
let amount = readlineSync.question("Enter the Amount you want to Deposit: ");

class FormCreation {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: string;
  account: string;
  amount: number;
  accountNo!: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    age: string,
    account: string,
    amount: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.age = age;
    this.account = account;
    this.amount = amount;
    if (this.account == "Current") {
      this.accountNo = "Curr" + Math.floor(Math.random() * 9999999999);
    } else {
      this.accountNo = "Sav" + Math.floor(Math.random() * 9999999999);
    }
  }

  validate() {
    let count: number = 0;
    if (!emailRegex.test(email) ||!passRegex.test(password) ) {
      console.log("Enter valid Credentials");
      count++;
    }
    if (!this.ageValidation()) {
      console.log("Please Enter a valid DOB");
      count++;
    }
    if (+amount < 800 && account == "Current" ||+amount < 500 && account == "Saving" ) {
      throw "Amount you have is not valid or you have entered less amount";
    }
    else if (count == 0) {
      console.log(newUser);
      return true;
    }
    return false;
  }

  async updateData() {
    if (this.validate() == true) {
      return await axios.post("http://localhost:3000/Users", newUser);
    } else {
      console.log("Something went Wrong");
      return;
    }
  }

  ageValidation() {
    let enteredDate = new Date(this.age);
    let enteredYear = enteredDate.getFullYear();
    if (currYear - enteredYear > 68 || currYear - enteredYear <= 0) {
      return false;
    }
    return true;
  }
}

const newUser = new FormCreation(
  firstName,
  lastName,
  email,
  password,
  age,
  account,
  amount
);
newUser.validate();
newUser.updateData();

export{}

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var readlineSync = require("readline-sync");
let passRegex = new RegExp("^(?=.*[0-9])" +
    "(?=.*[a-z])(?=.*[A-Z])" +
    "(?=.*[@#$%^&+=])" +
    "(?=\\S+$).{8,20}$");
let emailRegex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
let Year = new Date();
let currYear = Year.getFullYear();
console.log("SignUp for Banking ");
let firstName = readlineSync.question("Enter Your First Name");
let lastName = readlineSync.question("Enter your last Name");
let email = readlineSync.question("Enter your Email ID");
let password = readlineSync.question("Enter your password");
let age = readlineSync.question("Enter your Date of Birth");
class FormCreation {
    constructor(firstName, lastName, email, password, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.age = age;
    }
    validate() {
        if (!emailRegex.test(this.email)) {
            console.log("Enter valid Email ID");
        }
        if (!passRegex.test(this.password)) {
            console.log("Enter a Valid Password");
        }
        if (!this.ageValidation()) {
            console.log("Please Enter a valid DOB");
            return;
        }
        else {
            console.log(newUser);
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
const newUser = new FormCreation(firstName, lastName, email, password, age);
newUser.validate();
let updateData = () => __awaiter(void 0, void 0, void 0, function* () {
    let res = yield fetch(" http://localhost:3000/Users", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
    });
    console.log("Sucess");
});
updateData();

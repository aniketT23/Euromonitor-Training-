"use strict";
exports.__esModule = true;
var readline = require("readline");
var process_1 = require("process");
var rl = readline.createInterface({
    input: process_1.stdin,
    output: process_1.stdout
});
var main = document.getElementById("cont1");
var container = document.getElementById("info");
// let data = JSON.parse(localStorage.getItem("showDetails")!);
var data = {
    name: "Aniket Tiwari",
    email: "tiwarianiket91@gmail.com",
    password: "Aniket@123",
    accountNo: "Sav9208650280",
    accountType: "Saving",
    deposit: 7200
};
function BankingProcess() {
    rl.question("Please Select a Option: \n 1.Withdraw \n 2.Deposit", function (value) {
        if (+value == 1) {
            rl.question("Enter Amount you want to Withdraw: ", function (amount1) {
                if (+amount1 > data.deposit) {
                    console.log("you cannot withdraw the amount due to insufficient balance");
                }
                else {
                    data.deposit = data.deposit - +amount1;
                    console.log("Your Account Info: ", data);
                }
            });
        }
        if (+value == 2) {
            rl.question("Enter Amount you want Deposit: ", function (amount2) {
                if (data.accountType == "Current") {
                    if (+amount2 < 1000) {
                        console.log("Minimum balance should not be less than 1000");
                    }
                    else {
                        data.deposit = data.deposit + +amount2;
                        console.log("Amount Depositied Succesfully");
                    }
                }
                else {
                    if (+amount2 < 500) {
                        console.log("Minimum balance should not be less than 1000");
                    }
                    else {
                        data.deposit = data.deposit + +amount2;
                        console.log("Amount Depositied Succesfully");
                    }
                }
                console.log("Your Account Info: ", data);
            });
        }
    });
}
BankingProcess();

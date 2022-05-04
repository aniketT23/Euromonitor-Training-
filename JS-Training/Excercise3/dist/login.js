"use strict";
// let res=localStorage.getItem("accountDetails")!;
// let data:any = JSON.parse(res);
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// function OnSubmit(event:any) {
//     event.preventDefault();
//     let inputs = document.getElementsByTagName("input");
//     let account:string = inputs[0].value;
//     let password:string = inputs[1].value;
//     let count:number = 0;
//     for (let i = 0; i < data.length; i++) {
//       if (account == data[i].accountNo && password == data[i].password) {
//           let details:any=data[i];
//         localStorage.setItem("showDetails", JSON.stringify(details));
//         window.location.href = "../src/dashboard.html";
//         return;
//       } else {
//         count++;
//       }
//     }
//     alert("Invalid Details")
//   }
// Program in coonsole
const readline = __importStar(require("readline"));
const process_1 = require("process");
const rl = readline.createInterface({
    input: process_1.stdin,
    output: process_1.stdout,
});
let data = [
    {
        name: "Aniket Tiwari",
        email: "tiwarianiket91@gmail.com",
        password: "Aniket@123",
        accountNo: "Sav9208650280",
        accountType: "Saving",
        deposit: 7200,
    },
];
function OnSubmit() {
    let password;
    let account;
    let count = 0;
    rl.question("Enter your Account Number: ", (account) => {
        rl.question("Enter your Password : ", (password) => {
            for (let i = 0; i < data.length; i++) {
                if (account == data[i].accountNo && password == data[i].password) {
                    console.log("Here is your Account Details:- ", data[i]);
                }
                else {
                    count++;
                }
            }
            console.log("Exit");
        });
    });
}
OnSubmit();

"use strict";
// let res=localStorage.getItem("accountDetails")!;
// // let data:any = JSON.parse(res);
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

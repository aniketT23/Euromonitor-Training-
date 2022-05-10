// Program in coonsole

import * as readline from "readline";

import { stdin, stdout } from "process";

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

let data: any[] = [
  {
    name: "Aniket Tiwari",
    email: "tiwarianiket91@gmail.com",
    password: "Aniket@123",
    accountNo: "Sav9208650280",
    accountType: "Saving",
    deposit: 7200,
  },
];

function OnSubmit(): void {
  let password: string;
  let account: string;
  let count: number = 0;
  rl.question("Enter your Account Number: ", (account) => {
    rl.question("Enter your Password : ", (password) => {
      for (let i: number = 0; i < data.length; i++) {
        if (account == data[i].accountNo && password == data[i].password) {
          console.log("Here is your Account Details:- ", data[i]);
        } else {
          count++;
        }
      }
      console.log("Exit");
    });
  });
}

OnSubmit();

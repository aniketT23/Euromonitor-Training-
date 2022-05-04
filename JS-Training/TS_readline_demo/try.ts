import * as readline from 'readline';

import { stdin, stdout } from 'process';

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

// rl.question("What is your name? ", function (answer: string) {
//   console.log(`Oh, so your name is ${answer}`);
//   console.log("Closing the interface");
//   rl.close();
// });


rl.question('Please enter the first number : ', (answer1) => {
    rl.question('Please enter the second number : ', (answer2) => {
        var result = (+answer1) + (+answer2);
        console.log(`The sum of above two numbers is ${result}`);
        rl.close();
    });
});

// import * as readline from "readline";

// import { stdin, stdout } from "process";

// const rl = readline.createInterface({
//   input: stdin,
//   output: stdout,
// });

// let data: any[] = [
//   {
//     name: "Aniket Tiwari",
//     email: "tiwarianiket91@gmail.com",
//     password: "Aniket@123",
//     accountNo: "Sav9208650280",
//     accountType: "Saving",
//     deposit: 7200,
//   },
// ];

// function OnSubmit(): void {;
//   let count: number = 0;
//   rl.question("Enter your Account Number: ", (account:string) => {
//     rl.question("Enter your Password : ", (password:string) => {
//       for (let i: number = 0; i < data.length; i++) {
//         if (account == data[i].accountNo && password == data[i].password) {
//           console.log("Here is your Account Details:- ", data[i]);
//         } else {
//           count++;
//         }
//       }
//       console.log("Exit");
//     });
//   });
// }

// OnSubmit();
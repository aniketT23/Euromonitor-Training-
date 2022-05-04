"use strict";
exports.__esModule = true;
var readline = require("readline");
var process_1 = require("process");
var rl = readline.createInterface({
    input: process_1.stdin,
    output: process_1.stdout
});
// rl.question("What is your name? ", function (answer: string) {
//   console.log(`Oh, so your name is ${answer}`);
//   console.log("Closing the interface");
//   rl.close();
// });
rl.question('Please enter the first number : ', function (answer1) {
    rl.question('Please enter the second number : ', function (answer2) {
        var result = (+answer1) + (+answer2);
        console.log("The sum of above two numbers is ".concat(result));
        rl.close();
    });
});

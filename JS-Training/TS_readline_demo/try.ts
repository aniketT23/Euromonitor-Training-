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
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ask a question 
// wait for answer 
// log answer

rl.question("how's it going?", (answer) => {
    console.log("so its going", answer, "?");
    rl.close();
})
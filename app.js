// welcome to Node JS
const log = require("./log");
const log2 = require("./log2");
const msg = require("./message");
const data = require("./data");
const Person = require("./person");
console.log(Person);
// const http = require("http");


// log.info("Todays weather is mild");

// log.warning("Node is your new bestfriend");

// log.error("File not found");

// console.log("The message is", msg);
// log2.log("hello nodejs again");
// console.log(http);

console.log("hello Mr." + data.lastName);

const zaphod = new Person("zaphod", 100);

zaphod.greet();
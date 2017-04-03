var log = require('../utils.js').log;

let firstName = Symbol("first name");
let person = {};
person[firstName] = "Nicholas";
log(() => "first name" in person);
log(() => firstName in person);
log(() => person[firstName]);

let lastName = Symbol("last name");
person[lastName] = "Ambrosi";
log(() => person[lastName]);

let person2 = {
    "key": "value",
    [firstName]: "some",
    [lastName]: "guy"
}
log(() => person2[firstName]);
log(() => person2[lastName]);
log(() => person2);
log(() => Object.keys(person2));
log(() => Object.getOwnPropertyNames(person2));
const symbols = Object.getOwnPropertySymbols(person2);
console.log(symbols);
for (symbol in symbols) {
    console.log(symbol.toString());
}


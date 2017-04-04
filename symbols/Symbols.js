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

// use a symbol as a computed property name in an object literal
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
log(() => symbols);
for (symbol of symbols) {
    log(() => typeof symbol);
    log(() => symbol.toString());
}
log(() => symbols[0]);
log(() => symbols[1]);

// use a symbol in the Object.defineProperty and Object.defineProperties
Object.defineProperty(person2, firstName, {writable: false});
let nickname = Symbol("nickname");
Object.defineProperties(person2, {
    [nickname]: {
        value: "The machine",
        writable: false,
        enumerable: true
    },
    "otherkey": {
        value: "other value",
        enumerable: true
    },
    "otherkey-notenumerable": {
        value: "other value"
    }
});
log(() => person2[nickname]);
for(let prop in person2) {
    log(() => prop + ":" + person2[prop]);
}
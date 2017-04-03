var log = require('../utils.js').log;

let firstName = Symbol("first name");
let person = {};
person[firstName] = "Nicholas";
log(() => "first name" in person);
log(() => firstName in person);
log(() => person[firstName]);

"use strict";

function Person(name) {
    console.log(`${name} --  "typeof new.target" --> ${(typeof new.target)}`);
    console.log(`${name} --  "typeof new.target !== 'undefined'" --> ${typeof new.target !== 'undefined'}`);
    console.log(`${name} --  "typeof new.target === Person" --> ${typeof new.target === Person}`);
    console.log(`${name} --  "new.target === Person" --> ${new.target === Person}`);
}

function AnotherPerson(name) {
    Person.call(this, name);
}

var person = new Person("Person");
console.log(`"typeof Person" --> ${typeof Person}`);
console.log(`"typeof Person.constructor" --> ${typeof Person.constructor}`);
console.log(`"typeof person.constructor" --> ${typeof person.constructor}`);
console.log(`"person.constructor === Person" --> ${person.constructor === Person}`);
console.log(`"person.constructor === Person.constructor" --> ${person.constructor === Person.constructor}`);
console.log(`"Person.constructor === Person" --> ${Person.constructor === Person}`);
console.log(`"Person.constructor === Function" --> ${Person.constructor === Function}`);

var anotherPerson = new AnotherPerson("AnotherPerson");
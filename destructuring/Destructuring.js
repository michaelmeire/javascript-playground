// Destructuring in variable declarations
let node = {
    type: "identifier",
    name: "foo"
};

let {type, name} = node;

console.log(type);
console.log(name);

// Destructuring in variable assignments
let nodeV2 = {
    type: "changed identifier",
    name: "changed name"
};

// Reason for the parenthesis:
// An openng curly brace is expected to be a block statement, and a block statement cannot appear on the left side of an assignment.
// The parentheses signal that the next curly brace is not a block statement and should be interpreted as an expression, allowing the assignment to complete
({type, name} = nodeV2);
console.log(type);
console.log(name);

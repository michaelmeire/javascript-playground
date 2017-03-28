console.log(`HOISTED: ${getGreetingNotAMethodFunctionDeclaration()}`);

// not hoisted
// console.log(getGreetingNotAMethodButAnAnonymousFunctionExpression());
// console.log(getGreetingNotAMethodButANamedFunctionExpression());


// Inside an object literal
let friend = {
    getGreetingAsAConciseMethod() {
        return "I am a concise method";
    }
}

let friend2 = {
    getGreetingNotAsAConciseMethod: function() {
        return "I am not a concise method"
    }
}


// Not even a method
// It is a function definition
function getGreetingNotAMethodFunctionDeclaration() {
    return "I am not a method, but a function declaration";
}

// Not even a method
// It is an anonymous function expression
let getGreetingNotAMethodButAnAnonymousFunctionExpression =  function () {
    return "I am not a method, but an anonymous function expression";
}

// Not even a method
// It is a named function expression
let getGreetingNotAMethodButANamedFunctionExpression =  function bla () {
    return "I am not a method, but a named function expression";
}


console.log(friend.getGreetingAsAConciseMethod());
console.log(friend2.getGreetingNotAsAConciseMethod());
console.log(getGreetingNotAMethodFunctionDeclaration());
console.log(getGreetingNotAMethodButAnAnonymousFunctionExpression());
console.log(getGreetingNotAMethodButANamedFunctionExpression());

"use strict";

// you can use call(), apply() and bind() on arrow functions,
// but the this-binding of the function is not affected by that

console.log(`==== arrow function ====`)
let sum = (num1, num2) => {
    console.log(`this --> ${JSON.stringify(this)}`);
    return num1 + num2;
}
console.log(sum.call({a: 1}, 1, 2));
console.log(sum.apply({a: 1}, [1, 2]));
let boundSum = sum.bind({a: 1}, 1, 2);
console.log(boundSum());


console.log(`==== function that uses the external arrow function ====`)
let functionCallingSum = function (num1, num2) {
    console.log(`this in the calling function --> ${JSON.stringify(this)}`);
    return sum(num1, num2);
}
console.log(functionCallingSum.call({a: 1}, 1, 2));
console.log(functionCallingSum.apply({a: 1}, [1, 2]));
let boundFunctionCallingSum = functionCallingSum.bind({a: 1}, 1, 2);
console.log(boundFunctionCallingSum());


console.log(`==== function that internally uses an arrow function ====`)
let functionInternallyUsingArrowFunctionSum = function (num1, num2) {
    console.log(`this in the calling function --> ${JSON.stringify(this)}`);
    return ((num1, num2) => {
        console.log(`this in the arrow function--> ${JSON.stringify(this)}`);
        return num1 + num2;
    })(num1, num2);
}
console.log(functionInternallyUsingArrowFunctionSum.call({a: 1}, 1, 2));
console.log(functionInternallyUsingArrowFunctionSum.apply({a: 1}, [1, 2]));
let boundFunctionInternallyUsingArrowFunctionSum = functionInternallyUsingArrowFunctionSum.bind({a: 1}, 1, 2);
console.log(boundFunctionInternallyUsingArrowFunctionSum());


console.log(`==== traditional function declarations ====`)
let sumAsTraditionalFunction = function (num1, num2) {
    console.log(`this --> ${JSON.stringify(this)}`);
    return num1 + num2;
}
console.log(sumAsTraditionalFunction.call({a: 1}, 1, 2));
console.log(sumAsTraditionalFunction.apply({a: 1}, [1, 2]));
let boundSumAsTraditionalFunction = sumAsTraditionalFunction.bind({a: 1}, 1, 2);
console.log(boundSumAsTraditionalFunction());

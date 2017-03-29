// Destructuring in variable declarations
let colors = ["red", "green", "blue"];

let [,,thirdColor] = colors;

console.log(thirdColor);


// Destructuring in variable assignments

// There is no need for parenthesis:
let firstColor = "black",
    secondColor = "purple";
console.log(firstColor);
console.log(secondColor);

[firstColor, secondColor] = colors;
console.log(firstColor);
console.log(secondColor);

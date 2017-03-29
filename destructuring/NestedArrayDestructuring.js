let colors = ["red", ["green", "lightgreen"], "blue"];

let [first, secondWhichIsTheSubArray] = colors;
console.log(first);
console.log(secondWhichIsTheSubArray);

let [first2, [secondWhichIsTheFirstElementOfTheSubArray]] = colors;
console.log(first2);
console.log(secondWhichIsTheFirstElementOfTheSubArray);
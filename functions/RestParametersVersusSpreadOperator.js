// Rest parameters: in a function declaration --> to group the remaining args into an array
function funcWithRestParameters(arg1, arg2, ...otherargs) {
    console.log(arg1);
    console.log(arg2);
    console.log(otherargs);
    console.log(otherargs[0]);
    console.log(otherargs[1]);
    console.log(otherargs[2]);
}

funcWithRestParameters("1", "2", "3", "4", "5");


// Spread operator: to "unpack" an array into separate arguments when calling a function
function funcWithMultipleParameters(arg1, arg2, arg3, arg4, arg5) {
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
    console.log(arg4);
    console.log(arg5);
}
let arr = ["value1", "value2", "value3", "value4", "value5"];
funcWithMultipleParameters(...arr);
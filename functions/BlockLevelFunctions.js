"use strict";

console.log('==== var ====');
if(true) {
    console.log(typeof doSomething);

    var doSomething = function() {
        // empty
    }

    doSomething();
}
console.log(typeof doSomething);


console.log('==== let ====');
if(true) {
    try {
        console.log(typeof doSomethingLet);
    } catch (err) {
        // ReferenceError
        console.log(`using doSomethingLet before it is created gives error ${err} because it is in the TDZ (temporary dead zone) at that moment`);
    }

    let doSomethingLet = function() {
        // empty
    }

    doSomethingLet();
}
console.log(typeof doSomethingLet);


console.log('==== block level function ====');
if(true) {
    console.log(typeof doSomethingBlockLevel);

    //noinspection JSAnnotator
    function doSomethingBlockLevel() {
        // empty
    }

    doSomethingBlockLevel();
}
console.log(typeof doSomethingBlockLevel);
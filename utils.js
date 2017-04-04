function log(func) {
    const funcValue = func();
    let arrayContainingSymbol = false;
    if(Array.isArray(funcValue)) {
        for(el of funcValue) {
            if(typeof el === "symbol") {
                arrayContainingSymbol = true;
            }
        }
    }
    if(!arrayContainingSymbol) {
        console.log(`${func.toString().match(/\(\) => (.*)$/)[1]} --> ${String(funcValue)}`);
    } else {
        console.log('====== speciaal geval omdat toString op een Symbol een TypeError geeft ======');
        // http://www.ecma-international.org/ecma-262/6.0/#sec-tostring
        console.log(`${func.toString().match(/\(\) => (.*)$/)[1]}`);
        console.log('-->');
        console.log(funcValue);
        console.log('====== end speciaal geval ======');
    }
    // const funcValueAsString = String(func());
}

module.exports = {
    log: log
};
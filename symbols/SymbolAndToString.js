// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString
// http://www.ecma-international.org/ecma-262/6.0/#sec-tostring
// http://stackoverflow.com/questions/42107101/es6-why-symbol-can-not-have-another-symbol-as-description
// http://stackoverflow.com/questions/40944470/convert-javascript-symbol-to-string

// While you can call toString() on Symbols, you can't use string concatenation with them:
console.log(Symbol('foo'));

try {
    Symbol('foo') + 'bar';
} catch(err) {
    console.error("cannot use string concatenation on Symbol");
}

const symbolAsString = String(Symbol('foo'));
console.log('symbolAsString: ' + symbolAsString);
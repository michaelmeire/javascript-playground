// Destructuring in variable declarations
let node = {
    key0: "value0",
    subnodeLevel1: {
        key1: "value1",
        subnodeLevel2: {
            key2: "value2",
            subnodeLevel3: {
                key3: "value3"
            }
        }
    }
};

let {key0: newkey0, subnodeLevel1: {key1: newkey1, subnodeLevel2: {key2:newkey2, subnodeLevel3: {key3: newkey3}}}} = node;

console.log(newkey0);
console.log(newkey1);
console.log(newkey2);
console.log(newkey3);

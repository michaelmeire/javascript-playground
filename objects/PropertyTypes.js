console.log("==== Property in object initializer ====");
let objWithDataProperty = {
    property: "valueForDataProp"
};
printStuffForProperty(objWithDataProperty, "property");
printPropertyDescriptors(objWithDataProperty, "property");


console.log("==== Define new data property ====");
let obj = {};
Object.defineProperty(obj, "property", {
    value:'Property Value',
    writable: true
});
printStuffForProperty(obj, "property");
printPropertyDescriptors(obj, "property");


console.log("==== Define new setter property ====");
let objWithSetter = {};
Object.defineProperty(objWithSetter, "property", {
    get: function() {
        return 'myvalue for setter property';

    }
});
printStuffForProperty(objWithSetter, "property");
printPropertyDescriptors(objWithSetter, "property");


function printStuffForProperty(obj, propName) {
    console.log(`obj[propName]: ${obj[propName]}`);
    console.log(`obj[propName].value: ${obj[propName].value}`);
    console.log(`obj[propName].writable: ${obj[propName].writable}`);
    console.log(`obj[propName].enumerable: ${obj[propName].enumerable}`);
    console.log(`obj[propName].configurable: ${obj[propName].configurable}`);
    console.log(`obj.propertyIsEnumerable("dataProp"): ${obj.propertyIsEnumerable("property")}`);
}

function printPropertyDescriptors(object, propName) {
    console.log(`== property descriptor for ${propName} ==`);
    let propertyDescriptor = Object.getOwnPropertyDescriptor(object, propName);
    for (let item in propertyDescriptor) {console.log(item + " --> " +  propertyDescriptor[item])}
    console.log("====");
}

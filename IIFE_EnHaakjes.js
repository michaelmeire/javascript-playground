// Dit werkt omdat de js-engine weet dat rechts van de '=' een expression staat die moet geevalueerd worden.
// Daarom zijn haakjes rond de function definition niet nodig
let person = function (name) {
    return {
        getName: function () {
            return name;
        }
    }
}("Function definitiion zonder haakjes");
console.log(person.getName());

// ... maar de haakjes mogen er uiteraard wel staan
let person2 = (function (name) {
    return {
        getName: function () {
            return name;
        }
    }
})("Function definitiion met haakjes er rond");
console.log(person2.getName());

// Dit werkt niet, omdat de js-engine dit gewoon interpreteert als:
// 1. een function definition met als naam 'fun'
// 2. de string "fun"
// Maar die zijn niet aan mekaar gelinkt
function fun(name) {
    console.log(name);
}("fun");

// Om de js-engine wijs te maken dat hij het als een expression moet evalueren, moet je haakjes rond de function definition zetten
(function fun(name) {
    console.log(name);
})("fun");


// Bij arrow functions zijn de haakjes altijd nodig
let person3 = ((name) => {
    return {
        getName: function () {
            return name;
        }
    }
})("arrow function");
console.log(person3.getName());

// Dus hetvolgende werkt niet
// let person4 = (name) => {
//     return {
//         getName: function () {
//             return name;
//         }
//     }
// }("arrow function");
// console.log(person4.getName());

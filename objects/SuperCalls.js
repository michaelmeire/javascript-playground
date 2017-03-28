let person = {
    getGreeting() {
        // The HomeObject is "person"
        return "Hello";
    }
};

let friend = {
    getGreeting() {
        // The HomeObject is "friend"
        return super.getGreeting() + ", hi";
    }
};
Object.setPrototypeOf(friend, person);
console.log(friend.getGreeting());
// The HomeObject of friend.getGreeting() is friend
// And the prototype of friend is person
// Therefore the super.getGreeting() inside friend is equivalent to person.getGreeting.call(this)


let friend2 = {
    getGreeting: function() {
        // NO HomeObject
        // Therefore the all to super.xx makes the whole script fails and does not execute even without calling the function
        return 'The call to super without a HomeObject fails';
        // return super.getGreeting() + ", hi";
    }
};
Object.setPrototypeOf(friend2, person);
console.log(friend2.getGreeting());
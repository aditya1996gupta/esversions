//Object.values()
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};

const profile = Object.values(person);

console.log(profile);

//The Object.values() returns own enumerable properties
//while the for...in loop iterates properties in the prototype chain.

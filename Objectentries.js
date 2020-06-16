//Object.entries()

const ssn = Symbol('ssn');
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    [ssn]: '123-345-789'
};

const kv = Object.entries(person);

console.log(kv);

//The main difference between the Object.entries() and the for...in loop is that the for...in loop also enumerates
//object properties in the prototype chain.

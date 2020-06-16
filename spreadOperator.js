//object spread Operator
let colors = ['red', 'green', 'blue'];
let rgb = [...colors];
console.log(rgb);


//Object spread operator (...) unpacks the own enumerable properties of an object.
//Object spread operator can be used to clone an object or merge objects into one.
//The cloning is always shallow.
//When merging objects, the spread operator defines new properties while the Object.assign() assigns them.

//String.prototype.padStart()
let str = '1234'.padStart(8,'0');
console.log(str); // "00001234"
let str = 'abc'.padStart(5);
console.log(str); // "  abc"
let str = 'abc'.padEnd(5);
console.log(str); // "abc  "
str = 'abc'.padEnd(5,'*');
console.log(str); // "abc**"
str = 'abc'.padEnd(5,'def');
console.log(str); // "abcde"


// pad a string to a certain length with another string using
//padStart() and padEnd() methods.

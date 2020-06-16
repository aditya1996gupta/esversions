//flatmethods

const numbers = [1, 2, [3, 4, 5]];
const flatNumbers = numbers.flat();

console.log(flatNumbers);


// Use the Array.prototype.flat() method to flat an array with the nested arrays.
// Use the depth argument to specify how deep the nested arrays should be flattened. The depth is 1 by default.
// The flat() also removes the holes in the array with empty slots.

const numbers = [1, 4, 9, 16];
const roots = numbers.map(Math.sqrt);

console.log(roots); // Output: [1, 2, 3, 4]

numbers.map((number) => (console.log(number)))
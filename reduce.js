const numbers = [1, 2, 3, 4, 10];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 0 is initial value

console.log(sum); // Output: 20
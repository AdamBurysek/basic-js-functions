const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months); // Output: ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months); // Output: ['Jan', 'Feb', 'March', 'April', 'May']

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // Output: ['Dec', 'Feb', 'Jan', 'March']

const array1 = [1, 30, 4, 21, 1000000];
array1.sort();
console.log(array1); // Output: [1, 100000, 21, 30, 4]

// Sorts the elements of an array in place and returns the sorted array.
// It compares the strings based on their UTF-16 code unit values.

// Way to properly sort number arrays

const array2 = [1, 30, 4, 21, 100000];
array2.sort((a, b) => a - b);
console.log(array2); // Output: [1, 4, 21, 30, 100000]


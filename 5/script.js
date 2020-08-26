const numbers = [6, 9, 1, 3, 2];
const minimumNumber = numbers.reduce((previous,current) => Math.min(previous,current));
console.log(minimumNumber);
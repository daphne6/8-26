function map1To10(callback) {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < numbers.length; i++) {
      numbers[i] = callback(numbers[i]);
    }
    return numbers;
  }
document.write(`${map1To10(x => x*3)}`);
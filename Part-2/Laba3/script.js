function fibonacciSum() {
  let sum = 0;
  let a = 1;
  let b = 1;
  let count = 0;
  while (count < 10) {
    sum += a;
    let temp = a;
    a = b;
    b = temp + b;
    count++;
  }
  return sum;
}

function sumPrimes() {
  let sum = 0;
  for (let i = 2; i <= 1000; i++) {
    let isPrime = true;
    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && i !== j) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      sum += i;
    }
  }
  return sum;
}

function getDayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Понеділок";
    case 2:
      return "Вівторок";
    case 3:
      return "Середа";
    case 4:
      return "Четвер";
    case 5:
      return "П'ятниця";
    case 6:
      return "Субота";
    case 7:
      return "Неділя";
    default:
      return "Некоректне число";
  }
}

function filterOddLengthStrings(strings) {
  let filteredStrings = [];
  for (let string of strings) {
    if (string.length % 2 !== 0) {
      filteredStrings.push(string);
    }
  }
  return filteredStrings;
}

const incrementArray = (numbers) => {
  let newArray = [];
  for (let number of numbers) {
    newArray.push(number + 1);
  }
  return newArray;
};

function checkSumOrDifference(a, b) {
  return a + b === 10 || Math.abs(a - b) === 10;
}

console.log("1. Сума перших 10 чисел Фібоначчі:", fibonacciSum());
console.log("2. Сума простих чисел від 1 до 1000:", sumPrimes());
console.log("3. День тижня за числом 3:", getDayOfWeek(3));
console.log("4. Рядки з непарною довжиною:", filterOddLengthStrings(["abc", "defg", "hijklmnop"]));
console.log("5. Масив чисел, збільшених на 1:", incrementArray([1, 2, 3]));
console.log("6. Чи сума або різниця 5 і 7 дорівнює 10?", checkSumOrDifference(5, 7));

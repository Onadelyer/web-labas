function fibonacciSum(n) {
    if (n < 1) {
      return 0;
    } else if (n == 1) {
      return 1;
    } else {
      return fibonacciSum(n - 1) + fibonacciSum(n - 2);
    }
  }
  
  function sumPrimes(n) {
    let sum = 0;
    for (let i = 2; i <= n; i++) {
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
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
    return strings.filter(string => string.length % 2 !== 0);
  }
  
  const incrementArray = (numbers) => numbers.map(number => number + 1);
  
  function checkSumOrDifference(a, b) {
    return a + b === 10 || Math.abs(a - b) === 10;
  }
  
  console.log("1. Сума перших 10 чисел Фібоначчі:", fibonacciSum(10));
  console.log("2. Сума простих чисел від 1 до 1000:", sumPrimes(1000));
  console.log("3. День тижня за числом 3:", getDayOfWeek(3));
  console.log("4. Рядки з непарною довжиною:", filterOddLengthStrings(["abc", "defg", "hijklmnop"]));
  console.log("5. Масив чисел, збільшених на 1:", incrementArray([1, 2, 3]));
  console.log("6. Чи сума або різниця 5 і 7 дорівнює 10?", checkSumOrDifference(5, 7));
  
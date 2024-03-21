function findMinMax(array) {
    let min = array[0];
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }

    return { min, max };
}

let numbers = [3, 1, 7, 4, 9, 2];
let resultMinMax = findMinMax(numbers);
document.getElementById("comparisonResults").innerHTML += `<p>Мінімальний елемент: ${resultMinMax.min}</p>`;
document.getElementById("comparisonResults").innerHTML += `<p>Максимальний елемент: ${resultMinMax.max}</p>`;

let obj1 = { name: "John", age: 30 };
let obj2 = { name: "Jane", age: 25 };

if (obj1.name === obj2.name && obj1.age === obj2.age) {
    document.getElementById("comparisonResults").innerHTML += "<p>Об'єкти ідентичні.</p>";
} else {
    document.getElementById("comparisonResults").innerHTML += "<p>Об'єкти не ідентичні.</p>";
}

function checkInRange(number, min, max) {
    return number >= min && number <= max;
}

let num = 25;
let minRange = 20;
let maxRange = 30;
document.getElementById("logicalResults").innerHTML += `<p>Число ${num} знаходиться у діапазоні [${minRange}, ${maxRange}]? ${checkInRange(num, minRange, maxRange)}</p>`;

let condition = true;
document.getElementById("logicalResults").innerHTML += `<p>Початковий стан: ${condition}</p>`;
condition = !condition;
document.getElementById("logicalResults").innerHTML += `<p>Після використання NOT: ${condition}</p>`;

function getGrade(score) {
    if (score >= 90) {
        return "Відмінно";
    } else if (score >= 75) {
        return "Добре";
    } else if (score >= 60) {
        return "Задовільно";
    } else {
        return "Незадовільно";
    }
}

let studentScore = 85;
document.getElementById("conditionalResults").innerHTML += `<p>Студент отримав оцінку: ${getGrade(studentScore)}.</p>`;

function getSeason(month) {
    let season;
    if (month >= 3 && month <= 5) {
        season = "весна";
    } else if (month >= 6 && month <= 8) {
        season = "літо";
    } else if (month >= 9 && month <= 11) {
        season = "осінь";
    } else {
        season = "зима";
    }
    return season;
}

let currentMonth = (new Date()).getMonth() + 1;
document.getElementById("conditionalResults").innerHTML += `<p>Поточний місяць: ${currentMonth}, це ${getSeason(currentMonth)}.</p>`;

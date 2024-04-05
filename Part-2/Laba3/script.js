function task11() {
    let output = document.getElementById("output");
    let result = "";

    let a = 0;
    let b = 1;
    let sum = 0;
    let count = 0;

    while (count < 10) {
        sum += a;

        let next = a + b;
        a = b;
        b = next;

        count++;
    }

    result += "Сума перших 10 чисел Фібоначчі: " + sum;
    output.innerHTML = result;
}

function runVariant11Tasks() {
    task11();
}

runVariant11Tasks();

const first = +prompt('Enter first number');
const second = +prompt('Enter second number');

function numbersBaseChange(first, second) {
    if (
        Number.isFinite(first) &&
        Number.isInteger(second) &&
        second <= 36 && second >= 2 
    ) {
        console.log(first.toString(second));
    } else {
        console.log("Некорректный ввод!");
    }
}

numbersBaseChange(first, second);


const value1 = +prompt('Enter first value');
const value2 = +prompt('Enter second value');

function sumAndDivisionResult(value1, value2) {
    if (!Number.isFinite(value1) || !Number.isFinite(value2)) {
        console.log("Некорректный ввод!");
    } else {
        console.log(`Ответ: ${value1 + value2}, ${value1 / value2}`);
    }
}

sumAndDivisionResult(value1, value2);

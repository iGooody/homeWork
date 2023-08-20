let display = document.getElementById('display');
let currentValue = '';
let operator = '';
let firstOperand = '';
let result = '';

function appendToDisplay(value) {
    currentValue += value;
    display.value = currentValue;
}

function setOperator(op) {
    if (currentValue !== '') {
        firstOperand = currentValue;
        operator = op;
        currentValue = '';
        display.value = firstOperand + ' ' + operator;
        newCalculation = false; // Убираем флаг нового расчета
    }
}

function negate() {
    if (currentValue !== '') {
        currentValue = (-parseFloat(currentValue)).toString();
        display.value = currentValue;
    }
}

function clearDisplay() {
    currentValue = '';
    display.value = '';
}

function clearOne() {
    currentValue = currentValue.slice(0, -1);
    display.value = currentValue;
}

function calculate() {
    if (currentValue !== '' && firstOperand !== '' && operator !== '') {
        let tempCurrentValue = currentValue;

        switch (operator) {
            case '+':
                result = (parseFloat(firstOperand) + parseFloat(tempCurrentValue)).toString();
                break;
            case '-':
                result = (parseFloat(firstOperand) - parseFloat(tempCurrentValue)).toString();
                break;
            case '*':
                result = (parseFloat(firstOperand) * parseFloat(tempCurrentValue)).toString();
                break;
            case '/':
                if (parseFloat(tempCurrentValue) === 0) {
                    display.value = 'Ошибка';
                    return;
                }
                result = (parseFloat(firstOperand) / parseFloat(tempCurrentValue)).toString();
                break;
        }

        result = parseFloat(result);
        result = result.toFixed(result % 1 === 0 ? 0 : Math.min(8, result.toString().split('.')[1].length));

        // Обрабатываем отрицательные значения
        if (result < 0) {
            currentValue = '-' + Math.abs(result).toString(); // Добавляем знак "-" и абсолютное значение
        } else {
            currentValue = result.toString();
        }

        firstOperand = '';
        operator = '';
        display.value = currentValue;
        newCalculation = true;
    }
}


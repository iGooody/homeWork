let display = document.getElementById('display');
let secondSumDisplay = document.getElementById('secondSumDisplay');
let currentValue = '';
let operator = '';
let firstOperand = '';
let result = '';
let memoryValue = 0;
let decimalPlaces = 2;

function appendToDisplay(value) {
    currentValue += value;
    display.value = currentValue;
    secondSumDisplay.value = currentValue;
}

function memoryClear() {
    memoryValue = 0;
}

function memoryRecall() {
    currentValue = memoryValue.toString();
    display.value = currentValue;
}

function memoryAdd() {
    if (currentValue !== '') {
        memoryValue += parseFloat(currentValue);
    }
}

function memorySubtract() {
    if (currentValue !== '') {
        memoryValue -= parseFloat(currentValue);
    }
}

function setOperator(op) {
    if (currentValue !== '') {
        firstOperand = currentValue;
        operator = op;
        currentValue = '';
        display.value = firstOperand + ' ' + operator;
        newCalculation = false;
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
    display.value = '0';
}

function clearOne() {
    currentValue = currentValue.slice(0, -1);
    display.value = currentValue;
}

function copyToClipboard(elementId) {
    const sumDisplay = document.getElementById(elementId);
    const sumValue = sumDisplay.value;

    if (sumValue !== 'Ошибка') {
        navigator.clipboard.writeText(sumValue)
            .then(() => {
                alert(`Сумма ${sumValue} скопирована в буфер обмена`);
            })
            .catch(err => {
                console.error('Не удалось скопировать текст: ', err);
            });
    }
}

function setDecimalPlaces(count) {
    decimalPlaces = count;
    document.getElementById('decimalPlacesCount').textContent = count;
}

function changeDecimalPlaces() {
    const newCount = prompt('Введите новое количество знаков после запятой:');
    if (newCount !== null && newCount!== '') {
        setDecimalPlaces(parseInt(newCount));
    }
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
            case 'x':
                result = (parseFloat(firstOperand) * parseFloat(tempCurrentValue)).toString();
                break;
            case '÷':
                if (parseFloat(tempCurrentValue) === 0) {
                    display.value = 'Ошибка';
                    return;
                }
                result = (parseFloat(firstOperand) / parseFloat(tempCurrentValue)).toString();
                break;
        }
    
        result = parseFloat(result).toFixed(decimalPlaces);
    
        if (result < 0) {
            currentValue = '-' + Math.abs(result).toString(); 
        } else {
            currentValue = result.toString();
        }
    
        firstOperand = '';
        operator = '';
    
        display.value = currentValue;
        secondSumDisplay.value = currentValue;
        newCalculation = true;
    }
   
}

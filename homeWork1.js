let first = prompt('Enter first number');
let second = +(prompt('Enter second number'));

function getTwoNumbers(first, second) {
    if (!Number.isFinite(first) || !Number.isFinite(second)) {
        alert('Incorrect input');
        return Error;
    }
    return parseInt(first, second); 
}
console.log(getTwoNumbers(first, second));

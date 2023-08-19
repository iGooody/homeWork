function concatStrings(initialString, separator) {
    if (typeof initialString !== 'string') {
      return '';
    }
  
    let result = initialString;
  
    function innerConcat(nextString) {
      if (typeof nextString === 'string') {
        result += (separator || '') + nextString;
        return innerConcat;
      }
      return result;
    }
  
    return innerConcat;
}

class Calculator {
    constructor(x, y) {
        if (!Number.isFinite(x) || !Number.isFinite(y)) {
        throw new Error('x и y должны быть валидными числами');
        }

        this.x = x;
        this.y = y;
        this.logSum = this.logSum.bind(this);
        this.logMul = this.logMul.bind(this);
        this.logSub = this.logSub.bind(this);
        this.logDiv = this.logDiv.bind(this);
    }

    setX(num) {
        if (!Number.isFinite(num)) {
        throw new Error('x должен быть валидным числом');
        }

        this.x = num;
    }

    setY(num) {
        if (!Number.isFinite(num)) {
        throw new Error('y должен быть валидным числом');
        }

        this.y = num;
    }

    logSum() {
        console.log(this.x + this.y);
    }

    logMul() {
        console.log(this.x * this.y);
    }

    logSub() {
        console.log(this.x - this.y);
    }

    logDiv() {
        if (this.y === 0) {
        throw new Error('Не могу делить на 0');
        }
        console.log(this.x / this.y);
    }
}

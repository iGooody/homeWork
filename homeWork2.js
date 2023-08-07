function makeObjectDeepCopy(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }

    let copiedObj = {};
    const keys = Object.keys(obj);
    keys.forEach(key => {
        if (typeof obj[key] === "object") {
            copiedObj[key] = makeObjectDeepCopy(obj[key]); 
        } else {
            copiedObj[key] = obj[key];
        }
    });

    return copiedObj;
}

function selectFromInterval(array, first, second) {
        if (!Array.isArray(array)) {
            throw new Error('The input parametr is not an array');
        }

        if (!array.every((value) => Number.isFinite(value))) {
            throw new Error('Inputed array should contain only numbers');
        }

        if (!Number.isFinite(first) || !Number.isFinite(second)) {
           throw new Error('Incorrect interval params')
        }

        const start = Math.min(first, second);
        const end = Math.max(first, second);
        
        return array.filter((number) => (number > start) && (number <= end));
} 


const myIterable = {
    from: 1,
    to: 4,
    [Symbol.iterator]: function* () {
      if (
        typeof this.from !== 'number' ||
        typeof this.to !== 'number'
      ) 
      {
        throw new Error('You should input numbers');
      }
  
      if (this.to < this.from) {
        throw new Error('To should be greater than or equal to From');
      }
  
      for (let i = this.from; i <= this.to; i++) {
        yield i;
      }
    },
};
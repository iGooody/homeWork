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
    try {
        if (!Array.isArray(array)) {
            throw new Error('...');
        }

        let arr = [];

        if (Number.isFinite(first) && Number.isFinite(second)) {
            const start = Math.min(first, second);
            const end = Math.max(first, second);

            for (let i = 0; i < array.length; i++) {
                if (!Number.isFinite(array[i])) {
                    throw new Error('...');
                }

                if ((array[i] >= start) && array[i] <= end) {
                    arr.push(array[i]);
                }
            }
        }

        return arr;

    } catch (err) {
        return err;
    }
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
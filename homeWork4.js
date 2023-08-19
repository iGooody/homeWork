// function concatStrings(initialString, separator) {
//     let result = initialString || '';
//     if (initialString === null) {}
  
//     function innerConcat(nextString) {
//       if (typeof nextString === 'string') {
//         if (result!== '' && typeof separator === 'string') {
//           result += separator + nextString;
//         } else  {
//           result += nextString;
//         }
//         return innerConcat;
//       }
//       return result;
//     }
  
//     return innerConcat;
//   }
  
//   // Примеры использования
//   console.log(concatStrings('first')('second')('third')()); // 'firstsecondthird'
//   console.log(concatStrings(null, null)('second')()); // 'firstsecond'
//   console.log(concatStrings('first', '123')('second')('third')()); // 'first123second123third'
//   console.log(concatStrings('some-value')('')('')(null)); // 'some-value'
//   console.log(concatStrings('some-value')('test')()); // 'some-value'
//   console.log(concatStrings('some-value')('333')(123n)); // 'some-val333'

  const curry = fn => {
    const innerFn = (N, args) => {
      return (...x) => {
        if (N <= x.length) {
          return fn(...args, ...x);
        }
        return innerFn(N - x.length, [...args, ...x]);
      };
    };
  
    return innerFn(fn.length, []);
  };
  
  
const concatStrings = curry(concatStrings);
console.log(concatStrings('first')('second')('third')()); // 'firstsecondthird'
console.log(concatStrings(null, null)('second')()); // 'firstsecond'
console.log(concatStrings('first', '123')('second')('third')()); // 'first123second123third'
console.log(concatStrings('some-value')('')('')(null)); // 'some-value'
console.log(concatStrings('some-value')('test')()); // 'some-value'
console.log(concatStrings('some-value')('333')(123n)); // 'some-val333'
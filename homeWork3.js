function concatStrings(initialString, separator) {
  if (typeof initialString !== 'string') {
      const fn =  () => {
          return fn;
      };

      fn.toString = function() { return ''; };

      return fn;
  }

  let result = initialString;
  let isValid = true;


  function innerConcat(nextString) {
      innerConcat.toString = function () { return result }

      if (!isValid) {
          return innerConcat;
      }

      if (typeof nextString === 'string') {
          result += (separator || '') + nextString;
      } else {
          isValid = false;
      }


      return innerConcat;
  }

  return innerConcat;
}

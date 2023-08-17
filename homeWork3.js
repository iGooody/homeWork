Array.prototype.myFilter = function(callback, thisArg) {
    if (typeof callback !== 'function') {
      throw new Error('сallback should be a function');
    }
  
    const arr = [];
    
    this.forEach((element, index, array) => {
      if (callback.call(thisArg, element, index, array)) {
        arr.push(element);
      }
    });
  
    return arr;
  };
 
function createDebounceFunction(callback, delay) {
  let timer = 0;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(function() {
      callback.call(this, ...args);
    }, delay);
  };
}
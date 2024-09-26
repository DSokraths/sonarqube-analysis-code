function concatenate() {
    let args = Array.prototype.slice.call(arguments);  // Noncompliant
    return args.join(', ');
  }
  
  function doSomething(isTrue) {
    var args = Array.prototype.slice.call(arguments, 1); // Noncompliant
    if (!isTrue) {
      for (var arg of args) {
        // ...
      }
    }
  }

  const numbers = [10, 2, 30, 1, 5];
numbers.sort(); // Noncompliant: lexicographic sort
console.log(numbers); // Output: [1, 10, 2, 30, 5]

function sum(xs) {
    return xs.reduce((acc, current) => acc + current); // Noncompliant
  }
  console.log(sum([1, 2, 3, 4, 5])); // Prints 15
  console.log(sum([])); // TypeError: Reduce of empty array with no initial value
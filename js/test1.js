// sample.js

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers with error handling
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// Function to calculate the factorial of a number
function factorial(n) {
    if (n < 0) {
        throw new Error("Negative numbers are not allowed");
    }
    return n === 0 ? 1 : n * factorial(n - 1);
}

// Sample usage
console.log("Addition: ", add(5, 3)); // Output: 8
console.log("Subtraction: ", subtract(5, 3)); // Output: 2
console.log("Multiplication: ", multiply(5, 3)); // Output: 15
console.log("Division: ", divide(5, 0)); // Output: Error: Cannot divide by zero
console.log("Factorial: ", factorial(5)); // Output: 120

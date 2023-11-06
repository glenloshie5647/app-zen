/* 
   Filename: complex_code.js
   Description: This code demonstrates a complex and elaborate JavaScript program that includes multiple functionalities and advanced programming techniques.
*/

// Function to generate a random number
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Object representing a person with name and age properties
const person = {
  name: "John Doe",
  age: 25
};

// Array of fruits
const fruits = ["apple", "banana", "orange", "kiwi"];

// Function to check if a number is prime
function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

// Function to calculate the factorial of a number
function factorial(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
}

// Class representing a car
class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  // Method to start the car
  start() {
    console.log(`The ${this.color} ${this.brand} car has started.`);
  }
}

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Event listener for button click
document.querySelector("#myButton").addEventListener("click", function() {
  console.log("Button clicked!");
  // Code to execute on button click
});

// Recursive function to calculate Fibonacci series
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Function to sort an array of numbers in ascending order
function sortNumbers(numbers) {
  return numbers.sort((a, b) => a - b);
}

// Implementation of a promise
const myPromise = new Promise((resolve, reject) => {
  // Code inside promise
  if (Math.random() < 0.5) {
    resolve("Success!");
  } else {
    reject("Error!");
  }
});

// Function to find the maximum number in an array
function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

// Main entry point of the program
function main() {
  const randomNumber = getRandomNumber(1, 100);
  console.log(`Random number: ${randomNumber}`);
  
  if (isPrime(randomNumber)) {
    console.log(`${randomNumber} is a prime number.`);
  } else {
    console.log(`${randomNumber} is not a prime number.`);
  }
  
  console.log(`Factorial of ${randomNumber}: ${factorial(randomNumber)}`);
  
  const reversedName = reverseString(person.name);
  console.log(`Reversed name: ${reversedName}`);
  
  const sortedFruits = sortNumbers(fruits);
  console.log(`Sorted fruits: ${sortedFruits.join(", ")}`);
  
  const car = new Car("Toyota", "blue");
  car.start();
  
  console.log(`10th number in the Fibonacci series: ${fibonacci(10)}`);
  
  console.log(`Maximum number in the array: ${findMax([10, 20, 5, 30])}`);
  
  myPromise
    .then((result) => console.log(`Promise resolved: ${result}`))
    .catch((error) => console.log(`Promise rejected: ${error}`));
}

// Call the main function
main();
// // Exercise #1:

// Do the NASA countdown through the console. That is, the console should say:

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// BLASTOFF!

// for(var i = 10; i > 0; i--) {
//   console.log(i);
// }
// console.log("BLASTOFF!");

// Hint: Use a for loop!

// // Exercise #2:

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];

// Write some code that prints all the numbers in the 'numbers' array to the console.

// for(var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// Hint: Use a for loop!

// // Exercise #3:

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];

// Write code that finds the average of all the numbers in the 'numbers' array.

// var sum = 0;

// for (var i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum / numbers.length);

// Hint: Use a for loop!

// // Exercise #4:

// Implement FizzBuzz in JavaScript. Write a program that prints the integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number, and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".

// for(var i = 1; i <= 100; i++) {
//   if (i % 15 === 0) {
//     console.log("FIZZBUZZ");
//   } else if (i % 5 === 0) {
//     console.log("BUZZ");
//   } else if (i % 3 === 0) {
//     console.log("FIZZ")
//   } else {
//     console.log(i);
//   }
// }


// Hint: See other hints!

// // Exercise #5:

// Recreate the guess a number game between 1 and 100. That is, the computer chooses a random number between 1 and 100, and tells the user to pick higher or lower. The user has 10 tries. Use the prompt function to help you with this. (NOTE: prompt will return a string, and you may need to "cast" it into a number.)
// For example:
// var guess = prompt("Guess a number");

// var answer = Math.floor((Math.random() * 100) + 1);

// for (var i = 0; i < 10; i++) {
//   var guess = parseInt(prompt("Guess a number:"));
//   if (guess < answer) {
//     console.log("Guess higher!");
//   } else if (guess > answer) {
//     console.log("Guess lower!");
//   } else {
//     console.log("You win!");
//     break;
//   }
// }

// // Exercise #6:

// Create a function that accepts two numbers as parameters and returns their product.

// // Exercise #7:

// Create a function that accepts an array as an argument and returns the average. (Basically the same as Exercise #3, but wrap that code in a function and demonstrate its usage.)

// var user_numbers = [];

// for(var i = 0; i < 5; i++) {
//   user_numbers.push(parseInt(prompt("Enter a number")));
// }

// function average(numbers) {
//   var sum = 0;

//   for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return (sum / numbers.length);
// }

// console.log(average(user_numbers));

// // Exercise #8:

// Create an object that represents a particular book, having attributes of title, author, isbn, pages, and year of publication.

// var book = {
//   title: "Cat in the Hat",
//   author: "Dr. Seuss",
//   isbn: 6392770,
//   pages: 32,
//   yearOfPublication: 1962,
//   printInfo: function() {
//     console.log(this.title + ", " + this.author + ", " + this.isbn + ", " + this.pages + ", " + this.yearOfPublication)
//   }
// };

// // Exercise #9:

// Add a function to the above book object that console.logs out all the above information 

// // Extra exercises can be found here: http://www.ling.gu.se/~lager/teaching/dialogue_systems%20II/labs/javascript.html 



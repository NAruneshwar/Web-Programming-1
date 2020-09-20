// Following are the test cases for Lab1 Assignment

const lab1 = require("./lab1");

console.log(lab1.questionOne([-4, 0, 1, 2, 3, 99])); 
// should output { '0': false, '1': false, '2': true, '3': true, '99': false, '-4': false}

console.log(lab1.questionOne([]));
// should output {}

console.log(lab1.questionTwo([5, 3, 10])); 
// should output 2406104

console.log(lab1.questionTwo([2])); 
// should output 64 

console.log(lab1.questionTwo([5, 0, 9])); 
// should output 1191016

console.log(lab1.questionTwo([2, 7, 9, -10])); 
// should output 12812904

console.log(lab1.questionTwo([])); 
// should output 0

console.log(lab1.questionThree("The quick brown fox jumps over the lazy dog.")); 
// should output {consonants: 24, vowels: 11, numbers: 0, spaces: 8, punctuation: 1, specialCharacters: 0}

console.log(lab1.questionThree("How now brown cow!!!"));
// should output {consonants: 10, vowels: 4, numbers: 0, spaces: 3, punctuation: 3, specialCharacters: 0}

console.log(lab1.questionThree("One day, the kids from the neighborhood carried my mother's groceries all the way home. You know why? It was out of respect. $#@$%^sgdgslj sagfgn"));
// should output {consonants: 73, vowels: 37, numbers: 0, spaces: 24, punctuation: 5, specialCharacters: 6}

console.log(lab1.questionThree("CS 546 is going to be fun & I'm looking forward to working with you all this semester!! ~` segslrhkjgnn " )); 
// should output {consonants: 51, vowels: 24, numbers: 3, spaces: 20, punctuation: 3, specialCharacters: 3}

console.log(lab1.questionThree("")); 
// should output {consonants: 0, vowels: 0, numbers:0, spaces: 0, punctuation: 0, specialCharacters: 0}

console.log(lab1.questionFour(25000, 3.11, 5)); 
// should output: 450.44

console.log(lab1.questionFour(30000, 5, 6)); 
// should output 483.15

console.log(lab1.questionFour(19500, 7, 3)); 
// should output 602.10

console.log(lab1.questionFour(55000, 0, 6)); 
// should output 763.89

console.log(lab1.questionFour(33000, 4.5, 2)); 
// should output 1440.38

console.log(lab1.questionFour(0, 9, 22)); 
// should output 0
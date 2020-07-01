/**
 * You are given an integer N, followed by N lines of input (1 <= N <= 100). Each line of input contains one or several words separated with single spaces. Each word is a sequence of letters of English alphabet containing between 1 and 10 characters, inclusive. The total number of words in the input is between 1 and 100, inclusive.
Your task is to reverse the order of words in each line of input, while preserving the words themselves. The lines of your output should not have any trailing or leading spaces.

Example

input
3
Hello World
Bye World
Useless World

output
World Hello
World Bye
World Useless
 */
//Installed node modules: jquery underscore request express jade shelljs passport http sys lodash async mocha moment connect validator restify ejs ws co when helmet wrench brain mustache should backbone forever debug

process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
var input = "";

process.stdin.on('data', function (text) {
  input += text;
});

process.stdin.on('end', function () {
  console.log(input);
});

let sentence = "Hello World";
let reverseWords = function(sentence) {
 return sentence.split(" ").reverse().join(' ').replace(/\sentence+/g, " ").trim()
  
}
console.log(reverseWords(sentence));


 /**
* Consanguinity is a calculation of the degree of relationship between two people. That is to say that it is a determination of the closeness that two people share to a common ancestor. Consanguinity can be expressed as an integer representing the number of relationships needed to connect the two individuals to a common ancestor.

For example, siblings have a consanguinity of 2. They each have one relationship before arriving at a common ancestor. Grandparent and grandchild also have a consanguinity of 2. You can see a visual representation: https://en.wikipedia.org/wiki/Consanguinity#/media/File:Table_of_Consanguinity_showing_degrees_of_relationship.svg

Another method for describing the relationship between two people (A and B) is as a tuple of two integers: X, Y. Assuming A and B have a common ancestor, C, then X is the minimum number of generations between C and either A or B, and Y is the difference in the number of generations between A and C versus B and C.

Given a degree of consanguinity N, calculate the number of unique relationships. A unique relationship includes direction. Therefore if A is B's parent, there are two relationships: parent, child.

For example, if N=1 then the result should be 2. If N=2, then the result should be 3.

Example
input

2
output

3
*///Installed node modules: jquery underscore request express jade shelljs passport http sys lodash async mocha moment connect validator restify ejs ws co when helmet wrench brain mustache should backbone forever debug

process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
var input = "";

process.stdin.on('data', function (text) {
  input += text;
});

process.stdin.on('end', function () {
  //do your processing here.
  console.log(input);
});

/**
 * A Fibonacci-like sequence is a sequence of integers a1, a2, ... for which an = an-1+an-2 for all n > 2. You are given the first two elements of the sequence a1 and a2, and the 1-based index n. Output the n-th element of the sequence.

The input data consists of a single line which contains integers a1, a2 and n separated by single spaces. 0 < a1, a2, n <= 10.

Example

input

1 2 3

output

3
 */
let num = 4;
let fibonacci = function(num) {
  if(num === 0) {return 0};
  if(num === 1 || num === 2) {return 1};
    let previous1 = 1;
  let previous2 = 1;
  while(num>2) {
    let sum = previous1 + previous2;
    previous1 = previous2
    previous2 = sum;
    num--;
  }
  return previous2
}
console.log(fibonacci(num))
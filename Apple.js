
// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

function palindromeCheck(str) {
    let reverseStr = str.split('').reverse().join('')

    if(reverseStr === str) {
        return true
    } else {
        return false
    }

} // O(1)

console.log(palindromeCheck('level'))

// RETURNS THE FACTORIAL OF NUM...................................................
// Write code to create a function that returns the factorial of `num`

function factorial(num) {
let result = 1;

    for (let i = num; i > 1; i--) {
        result = result * i
    }
    return result;

} // O(n)
3
console.log("The factorial of 24 is: " + factorial(24));

//PRODUCT OF TWO LARGEST..........................................................
// Write code to create a function that accepts an array of numbers, finds the largest 
// two numbers, and returns the product of the two.

function productOfLargestTwo(arr) {
    let largest = null
    let secondLargest = null

    for(let i = 0; i < arr.length; i++) {
       let currentNumber = arr[i] // keep track of the current index while looping
       if(currentNumber > largest || largest === null) { // conditional checking curreent number against the current number
           secondLargest = largest;
           largest = currentNumber;// we set the second largets to the largest and set that to the current indeex
       } else if (currentNumber > secondLargest || secondLargest === null) { // second conditional checking the second number agains the current number
           secondLargest = currentNumber; // set the second largest number to the current numbeer 
       }
    }
    return largest * secondLargest; // largest and the second largest now have the highest numbers assigned so multiply them and return the value
}

let arr = [1, 2, 3, 4, 5];
console.log("The product of the two largest pairs is: " + productOfLargestTwo(arr) )


// TWO SUM........................................................................
//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


let nums = [2, 7, 11, 15];
let target = 9;

function twoSum(nums, target) {
  let map = new Map

  for (let i = 0; i < nums.length; i++) {
      let compliment = target - nums[i];
      if (map.has(compliment)) {
          return [map.get(compliment), i]
      }
      map.set(nums[i], i)
  }
}
console.log(twoSum(nums, target))



// FIRST REOCURRING CHARACTER.....................................................

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// Nieve approach 
//nieve approach......... O(n^2)
let input = [2,5,1,2,3,5,1,2,4];
// let input = [2,3,4,5];
// let input = [2,1,1,2,3,5,1,2,4];

// function firstReocurringChar(input) {
//     for(let i = 0; i < input.length; i++) {
//         for(let j = 0; j < input.length; i++) {
//             if(input[i] === input[j]) {
//                 return input[i]
//             }
//         }
//     }
//     return undefined
// } 

// console.log(firstReocurringChar(input))

function firstReocurringChar2(input) {
let map = {};
for(let i = 0; i < input.length; i++) {
    if(map[input[i]] !== undefined) {
        return input[i]
    } else {
        map[input[i]] = i
    }
} 
return undefined;
}
console.log(firstReocurringChar2(input));

//CONTAINS COMMON ITEMS -- BETTER APPROACH........................................
const array1 = ['a','b','c','d', ];
const array2 = ['x','h','a' ];
// Faster than nested loops but we are giving up some memory space

function containsCommonItem(arr1, arr2) {

    let map = {};

    for (let i=0; i < arr1.length; i++) {
        if(!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }
    for (let j=0; j < arr2.length; j++) {
        if(map[arr2[j]]) {
            return true
        }
    }
    return false
}
console.log(containsCommonItem(array1, array2))

// REVERESE STRING..............................................................
//solution

function reverseStr(str) {
    let newStr = '';
     
     for(let i = str.length -1; i >=0; i--) {
       newStr += str[i];
     }
     return newStr;
     
   };
   let str = "apple";
   console.log(reverseStr(str));
   
   // reverse in place 
   // for readability
   function reverseInPlace(str) {
    return str.split('').reverse().join('') 
   }
   console.log(reverseInPlace(str))
   // ARE DUPLICATES..........................................
   /*## Are-Dups
   
   ## Instructions
   Given an array, return true if there is at least one duplicate element in the array. If not, return false
   
   ## Example
   Test Case 1: [1,2,13,12,4,2]
   Expected Output: true
   
   Test Case 2:[1,2,3,4]
   Expected Output: false
   
   ## Optimal Time
   O(n)*/
   let array = [1,2,13,12,4,2]
   
   function areDups(array) {
     let tracker = {};
   
     for(let i = 0; i < array.length; i++) {
      if(tracker[array[i]]) {
      return true
      }
       else {
      tracker[array[i]] = true
      }
      console.log(tracker)
     }
     return false
   }
   console.log(areDups(array));
   // ARE DUPLICATES..........................................
/*## Are-Dups

## Instructions
Given an array, return true if there is at least one duplicate element in the array. If not, return false

## Example
Test Case 1: [1,2,13,12,4,2]
Expected Output: true

Test Case 2:[1,2,3,4]
Expected Output: false

## Optimal Time
O(n)*/
let arrayOne = [1,2,13,12,4,2]
let arrayTwo = [1,2,3,4]

function areDups(array) {
  let tracker = {};
  
  for(let i = 0; i < array.length; i++) {
   if(tracker[array[i]]) {
   return true
   }
    else {
   tracker[array[i]] = true
   }
  }
  return false
}
console.log(areDups(arrayTwo));

// COUNT PAIRS
//optimal
//use object to keep a track of visited elements
//O(n)

let array3 = [1,2,1,3,2,4,2,3,3,1] // 3

function pairCount(arr) {
 
  let obj = {};
  let pairs = 0;
  
  for(let i = 0; i < arr.length; i++) {
    if(obj[arr[i]]) {
      obj[arr[i]] = 0
      pairs ++
    } else {
    obj[arr[i]] = true
   }
 }
  return pairs;
}
console.log(pairCount(array3))






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
  //do your processing here.
  console.log(input);
});




//Installed node modules: jquery underscore request express jade shelljs passport http sys lodash async mocha moment connect validator restify ejs ws co when helmet wrench brain mustache should backbone forever debug

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
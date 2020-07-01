
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

let twoSum2 = function(num, target) {
  let map = new Map;

  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    if(map.has(compliment)) {
      return (map.get(compliment)) {
        
      }
      return [map.get(compliment), i]
    }
    map.set(nums[i], i)
  }
}



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







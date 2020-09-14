
//================== Longest Mountain in Array =========================//

// The basic idea is that we need to search for the left boundary i and the right boundary j of the mountain, and then calculate the length j - 1 + 1.

// How to search for the boundaries? Whenever we see a bottom, it could be:

// The right boundary of a mountain (if we have seen a peak), so update our result
// The left boundary for the next mountain, so update the left boundary index i to be the current index j, then search for the next peak

const longestMountain = A => {
    let ans = 0;
      
    // i is left boundary of the mountain
    // p is the index of the peak
    // j is the right boundary of the mountain
    for (let i = 0, j = 0, p = -1; j < A.length; j++) {
      if ((j === 0 || A[j] > A[j - 1]) && (j === A.length - 1 || A[j] > A[j + 1])) {
        // found a peak
        p = j;
      }
  
      if ((j === 0 || A[j] <= A[j - 1]) && (j === A.length - 1 || A[j] <= A[j + 1])) {
        // found a bottom
        if (p > 0) {
          // update the result
          ans = Math.max(ans, j - i + 1);
        }
        // reset the left boundary
        i = j;
        // reset the peak (going to search for a new peak)
        p = -1;
      }
    }
  
    return ans;
  };


  //================== LRU CACHE ==================================//
  /**Design and implement a data structure for Least Recently Used (LRU) cache.
   *  It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its 
capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity? */

  class LRUCache {
    constructor(capacity) {
      this.cache = new Map();
      this.capacity = capacity;
    }
  
    get(key) {
      if (!this.cache.has(key)) return -1;
  
      const v = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, v);
      return this.cache.get(key);
    };
  
    put(key, value) {
      if (this.cache.has(key)) {
        this.cache.delete(key);
      }
      this.cache.set(key, value);
      if (this.cache.size > this.capacity) {
        this.cache.delete(this.cache.keys().next().value);  // keys().next().value returns first item's key
      }
    };
  }

  class LRUCache {
    constructor(capacity) {
      this.cache = new Map();
      this.capacity = capacity;
    }

    get(key) {
      if(!this.cache.has(key)) return -1;

      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return this.cache.get(key)
    }

    put(key, value) {
      if(this.cache.has(key)) {
        this.cache.delete(key);
      }
      this.cache.set(key, value);
      if(this.cache.size > this.capacity) {

        this.cache.delete(this.cache.keys().next().value); //keys().next().value returns first items key
      }
    }
  }

  


//====================== zig zag traversal of Binary tree =================//
// Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

// For example:
// Given binary tree [3,9,20,null,null,15,7],

//We can easily solve this problem using two stacks. The first stack s1 is used to traverse the current level of the tree, 
//and the second stack s2 is used to track the nodes in the next level. Also, we need to have a flag to indicate the traversal 
//direction has been flipped when the current level has been traversed completely.

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return []; // Sanity check
    
    var result = [], level = [], s1 = [root], s2 = [], flag = true;
    
    while (s1.length > 0) {
        var node = s1.pop(), left = node.left, right = node.right;

        // Handle the current node
        level.push(node.val);

        // Get ready for the next level
        // the key of zigzag traversal is to control the order of pushing
        // left and right sub children
        if (flag) {
            if (left)  s2.push(left);
            if (right) s2.push(right);
        } else {
            if (right) s2.push(right);
            if (left)  s2.push(left);
        }
        
        // We just finish traversing the current level
        if (s1.length === 0) {
            result.push(level);
            level = [];4
            flag = !flag;
            // Continue to traverse the next level
            s1 = s2;
            s2 = [];
        }
    }
    
    return result;
};

//Time complexity: O(n)
// Space complexity: The max width of the tree

//================ Climbing Stairs ==================== //
//You are climbing a stair case. It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
var climbStairs = function(n) {
    if(n==1) return 1;
    let dp = new Array(n + 1);
    dp[1]=1;
    dp[2]=2;
    for(let i=3;i<=n;i++){
        dp[i]=dp[i-1]+dp[i-2];
}
    return dp[n];
};
// Runtime: 40 ms, faster than 99.23% of JS solutions.
//Memory Usage: 33.7 MB, less than 100.00% of JS solutions


// ================ AIR BNB Quesstion (JAVA SOLUTION)=================== //
/*You are listing your house on aribnb. There are a bunch of booking requests. 
Each request is represented as an integer array with length of 2. The first element is 
start date, the second element is end date. Select booking requests wisely so that you can obtain 
maximum profit without conflict of schedule. You can assume everyday's price is same.

Example 1
Input [[1,2], [4,5], [7,7]]
Output 5

Example 2
Input [[4,5], [7,9], [1,100]]
Output 100 */

// public static void main(String[] args) {
// 	int[][] nums1 = {{1,2}, {4,5}, {7,7}};
// 	int[][] nums2 = {{4,5}, {7,9}, {1,100}};
// 	System.out.println(solve(nums1));
// 	System.out.println(solve(nums2));
// }

// private static int solve(int[][] nums) {
// 	TreeMap<Integer, Integer> dp = new TreeMap<>();
// 	Arrays.sort(nums, (a, b)->a[1] - b[1]);
// 	for(int i=0;i<nums.length;i++) {
// 		int[] cur = nums[i];
// 		dp.put(cur[1], cur[1] - cur[0] + 1);
// 		for(Map.Entry<Integer, Integer> e : dp.entrySet()) {
// 			if(e.getKey() < cur[0])
// 				dp.put(cur[1], Math.max(dp.get(cur[1]), e.getValue() + cur[1]- cur[0] + 1));
// 		}
// 	}
// 	return dp.lastEntry().getValue();
// }


//========= Remove duplicates in place ===================//
/*
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Given nums = [1,1,2],
Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the returned length.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for(let i=0; i < nums.length; i++) {
      if(nums[i] === nums[i + 1]) {
          nums.splice(i, 1) 
          i -= 1
      }
  }
  return nums.length;
  
};

console.log(removeDuplicates(nums.legnth));

lel removeDuplicates = function(nums) {
  for(let i =0; i < nums.length; i++) {
    if(nums[i] === nums[i + 1]) {
      nums.splice(i, 1)
      i -= 1
    }
  }
  return nums.length;
}
console.log(removeDuplicates(nums.length))

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

let palindromeCheck = function(str) {
  let reverseStr = str.split('').reverse().join('');

  for(let i = 0; i < str.length; i ++) {
    if(reverseStr === str) {
      return true;
    }
    else return false
  }
}// 0(1)
console.log(palidromeCheck('level'))


//
// RETURNS THE FACTORIAL OF NUM...................................................
// Write code to create a function that returns the factorial of `num`

function factorial(num) {
let result = 1;

  for (let i = num; i > 1; i--) {
      result = result * i
  }
  return result;

} // O(n)
//3
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

function twoSum(nums, target) {
  let map = new Map;

  for (let i=0; i<nums.length; i++) {
    let compliment = target - nums[i];
    if(map.has(compliment)) {
      return [map.get(compliment)]
    }
    map.set(nums[i], i)
  }
}
console.log((nums, target))
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

function firstReocurringChar(input) {
    for(let i = 0; i < input.length; i++) {
        for(let j = 0; j < input.length; i++) {
            if(input[i] === input[j]) {
                return input[i]
            }
        }
    }
    return undefined
} 

console.log(firstReocurringChar(input))


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
console.log(containsCommonItem(arr1, arr2))


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

let reverseStr = function(str) {
  let reverseStr = '';

  for(let i = str.length -1; i >= 0; i--) {
    reverseStr += str[i]
  }
  return reverseStr
}
 
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

function pairCount(arr) {
  let obj = {};
  let pairs = 0;

  for(let i=0; i < arr.length; i++) {
    if(obj[arr[i]]) {
      obj[arr[i]] = 0
      pairs++
    } else {
      obj[arr[i]] = true
    }
  }
  return pairs;
}
console.log(pairCount(array3))


//=============== Rotate Array in Place ====================//

/*Given an array, rotate the array to the right by k steps, where k is non-negative.
Follow up:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  if(nums.length > k) {
      nums.unshift(...nums.splice(-k))
  } else {
      let i = 0;
      while(i < k) {
          nums.unshift(nums.splice(-1))
          i++
      }
  }
    return nums
    
};

//======================== REVERSE LINKED LIST =================================//
var reverseList = function(head) {
  let reversed = null;
  while (head) {
      // store initial order in temp variable
      const next = head.next;
      // assign the next node to what has been reversed so far
      head.next = reversed;
      // one more node has been reversed, assign reversed to the linked list
      reversed = head;
      // reset head to the original order minus one node that has been added to the reversed list
      head = next;
  }
  return reversed;

  // Recursive solution    
  var recursiveReverse = (head, reversed) => {
    if (!head) {
        return reversed
    }
    const next = head.next;
    head.next = reversed;
    reversed = head;
    return recursiveReverse(next, reversed)
  }
  
  return recursiveReverse(head, null)
};


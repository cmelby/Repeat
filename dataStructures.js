// Data structures are a collection of values. The values can have relationships among values and 
// functions appliled to it. Each data structure is different in what it can do and what it can be used for.
// Most importantly each data structure is good and specialized for its own thing.

// Our First Data Structure 
// ARRAY

const strings= ['a', 'b', 'c', 'd'];
// in a 32 byte system we have 4 shelfs to store 1 index
// so if this array has four elements and we are gong to  store it then it's:
// 4*4 = 16 bytes of storage 
const numbers = [1,2,3,4,5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.

// lookups
strings[2] // O(1)
//push
strings.push('e'); //O(1) 

//pop
strings.pop(); //O(1) 
strings.pop(); //O(1) 

//unshift
strings.unshift('x') // O(n) beacuse essentially we have to loop thorugh and reassign 
// the indexes, x becomes 0 to the computer a becomes 1 etc

//splice
strings.splice(2, 0, 'alien'); // O(n/2) = remember we need to remove constaints so becomes O(n): for same reason as above. We are shifting the indexes in the
// computers ram shelves. 

console.log(strings)
// NOTES:  Arrays are stored in contiguious memeory (order) and they have the smallesst footprint
// If all you neeed to do is store some data and look at them one by one arrays are a great option 
// especially if you know the i. 

// there are two types of arrays: Static and Dynamic 

// whats the difference? Static is fixed inside so you have to specify the amount of elements beforehand
// C++ 
// int a[20]; // array that hass 20 items
// int b[5] {1,2,3,4,5} // if we want a 6th item then we need to copy this over to an entire new arrea 

// Javascript uses dynamic arrays so we can automatically. 


// ARRAY From Scratch:

//
class MyArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }
    get(index) {
      return this.data[index];
    }
    push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.data;
    }
    pop() {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    }
    deleteAtIndex(index) {
      const item = this.data[index];
      this.shiftItems(index);
      return item;
    }
    shiftItems(index) {
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      console.log(this.data[this.length - 1]);
      delete this.data[this.length - 1];
      this.length--;
    }
  }
  
  const myArray = new MyArray();
  myArray.push('hi');
  myArray.push('you');
  myArray.push('!');
  myArray.pop();
  myArray.deleteAtIndex(0);
  myArray.push('are');
  myArray.push('nice');
  myArray.shiftItems(0);
  console.log(myArray);
  
  // In an interview one thing that you should do is treat a string as an array.

  // COMMON interview question

// creat a function that reverses a string: 
// 'Hi My Name is Chris' Should be:
// 'sirhC si emaN yM iH'  

  function reverse(str) {
//   // the first thing that we want to do is check the input. What if someone calls this function with a number or undeefined?
    if(!str || str.length < 2 || typeof str !== 'string') {
        return 'hmmmm, this doesnt seem to be a string';
    }

    const backwards = [];
    const totalItems = str.length - 1;
        for (let i = totalItems; i >=0; i--) {
            backwards.push(str[i])
        }

    return backwards.join('');
  }
console.log(reverse('Hi My Name is Chris'));

// Method approach 
  function reverseMethod(str) {
      return str.split('').reverse().join('')
  }
console.log(reverseMethod('Hi My Name is Chris'));

// ES6
const reverseES6 = str => str.split('').reverse().join('');

// ES6 spread operaator approach
const reverseES62 = str => [...str].reverse().join('');



// ANOTHER INTERVIEW QUESTION 
/*
Given two arrays that are sortede can you merge them and keep
them sorted?
 */

 
 // [0,3,4,4,6,30,31]
 function mergeSortedArrays(array1, array2){
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
    
    //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
    if(array1.length === 0) {
      return array2;
    }
    if(array2.length === 0) {
      return array1;
    }
  
    while (array1Item || array2Item){
     if(array2Item === undefined || array1Item < array2Item){
       mergedArray.push(array1Item);
       array1Item = array1[i];
       i++;
     }   
     else {
       mergedArray.push(array2Item);
       array2Item = array2[j];
       j++;
     }
    }
    return mergedArray;
  }
  
  console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]));

  // one thing to note is that arrays are great for sorting beacuse in terms of thier memory they are
  // in sequentail order.....

  // Arrays are also great for lookups...This is when you willll want to use an array.
  // Pusha pops are really fast where as inseerts and deletes are slow. 

  // TWO SUM.................
  // Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

let nums = [2, 7, 11, 15];
let target = 9;
  var twoSum = function(nums, target) {
    let map = new Map;
    for (var i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i);
    }
}

console.log(twoSum(nums, target));


//Maximum SubArray...........


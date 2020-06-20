

//Find Common El

/*If we are compairing two arrays the brute force way would be to do 
two nested for loops and compare elements within each array against one another. Howver 
this has poor space and time complexity O(n^2)*/

// const array1 = ['a','b','c','d', ];
// const array2 = ['x','h','a' ]

// function comntainsCommonItem(arr1, arr2) {
//     for (var i=0; i < arr1.length; i++) {
//         for (var j=0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 return true
//             }
//         }
//     }
//     return false
// }

//O(a*b) nested = multiplication in this case.
// O(1) - SPACE COMPLEXTIY  constant beacuse nothing new is being created.

// console.log(comntainsCommonItem(array1, array2));


//BETTER SOLUTION 
const array1 = ['a','b','c','d', ];
const array2 = ['x','h','a' ];

// Lets think about the steos we want to take

// In javascript we can do something simillar to a hash table to 
// improve space and time complexity. We can create an obj so that we 
// only have to loop through the second array and compare it against the 
// the first array.

// array1 ===> obj {
// a: true;
// b: true;
// c: true;
// x: true;
//}
// array2[idex] === obj.properties

// Step 8
function comntainsCommonItem2(arr1, arr2) {
    // loop through first arr and create obj 
    // where properties === itme in array 
    // sequential steps instead of nested
    // so we will then have O(a + b). One step after the other.
    let map = {};
    for (let i=0; i <arr1.length; i++){
        if(!map[arr1[i]]) { // if their is no map element 
            const item = arr1[i]; // create new element item & set it equal to the arr i  
            map[item] = true; // set that new element as a key in the map obj with a value of true.
        }
    }
  // loop through second array and check if item 
  //   in second array exists on created obj.
    for (let j=0; j < arr2.length; j++) {
        if(map[arr2[j]]) {
            return true;
        }
    }
    return false
}

// O(a + b) although faster:
// O(a) - Space complexity is heavier beacuse we are creating new objs.

// console.log(comntainsCommonItem2(array1, array2));
// ( May be beyond the scope of the interview)
// during the interview you want to try and explain how this function can break.
// beacuse Javascript turns objs propertise into strings when created we can pass 
// integers, empty arrays, null etc into the function from the array and it will still work.
// however this function breaks when we only provide one array perameter. 
// so we want to make sure that we epxlain how it could break and how we could solve this. 
// in this case we can provide a check. 


// We can aslo tell the interviewer that for readability purposes 
// we could use some methods.

// (method way of solving)
// O(a + b)3
function comntainsCommonItem3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}
console.log(comntainsCommonItem3(array1, array2));



//========================================================>
// Google Interview answer for HAS PAIR WITH SUM
// (Set: Constructor ) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// Naive
function hasPairWithSum(arr, sum){
    var len = arr.length;
    for(var i =0; i<len-1; i++){
       for(var j = i+1;j<len; j++){
          if (arr[i] + arr[j] === sum)
              return true;
       }
    }
  
    return false;// O(n)
  }
  
  // Better
  function hasPairWithSum2(arr, sum){
    const mySet = new Set();
    const len = arr.length;
    for (let i = 0; i < len; i++){
      if (mySet.has(arr[i])) {
        return true;
      }
      mySet.add(sum - arr[i]);
    }
    return false;
  }
  
  hasPairWithSum2([6,4,3,2,1,7], 9)
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
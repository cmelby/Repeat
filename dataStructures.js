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
int a[20]; // array that hass 20 items
int b[5] {1,2,3,4,5} // if we want a 6th item then we need to copy this over to an entire new arrea 

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
  
  
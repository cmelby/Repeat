

// also called hash maps, dictionaries, maps, unorderd maps, objects, are all hashtables.
// Each language has it's own built in form of Hashtables.

// In JavaScript there Objs
// in Python their dictionaries
// Java its maps 
// Ruby its hashes 

// Used alot i databases and caches.

// In hashtables you use key value pairs to look up keys 
// sorted in our shelves to find our value.

// Hash functions decide where that data is stored. 
// A hash function is a function that geneereates a value of fixed length for 
// each input that it gets.

// For instance when given a string a hash function is going to generate a
// random series of numbers are letters for that string. 
// It will always be the same so long as the input is the same
// thats called Idempotent : fancy way of saying a function given the same 
//input will alwasy return the same output. 

// This is poweerful beacuse all we have to do is look for the key then in hastables.

// You want the hash function under the hood to be very fast.
// For instance SHA-256 takes very long compared to mb5 beacuse it's 
// generally used in cryptography where you would want it to take a very long time.

// HASH TABLES BIG O:
// insert O(1)
// lookup O(1)
// delete O(1)
// search O(1)

//example:
/** when this is run we have created a user obj 
 * stored somewhere in memory in random places. But 
 * we can access this by using dot notation 
 */
let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function() {
        console.log('ahhhhhh');
    }
}
console.log(user); //O(1)
console.log(user.spell = 'abra kadabra'); //O(1)
console.log(user.scream()); //O(1)
// collisions are O(n/k) k being the size of your has table but beacuse 
// we remove constance it becomes O(n/k)
// CONS:
/** 
 * Collision: With hashtables and limited space we will always have collisions.
 * collisons happen when two peices of data are stored ontop of eachother
 * during the random assignment to storage by the hash function.
 * This actually creates another data structure ie linked List.
 * collision resolution: ton of different ways to solve. The one he shows is seperate chaining.
 */

 /**
  * Values in hashtables can be integers, strings, functions objs etc 
  * But you can also have functions as keys (Map).
  * 
  * In JavaScript in the new syntax we have Map &  Set
  * Map: a map allows you to save any data type as a key. It also maintains order.
  * In hash tables there is no order.
  * 
  * Set: does the same thing but doesnt store values, only keys.
  */


  // HASH TABLE: our own implemention

  class HashTable {
      constructor(size) {
          this.data = new Array(size);
      }

        //_ for javascript is simply an indicator and developer standard to not access that function 
      _hash(key) { // very small hash function for demonstration
          let hash = 0;
            for (let i = 0; i < key.length; i++) {
                hash = (hash + key.charCodeAt(i) * i) %
                this.data.length
            }
            return hash;
      }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) { // if there is nothing in that address space do this 
            this.data[address] = [];
        }
            this.data[address].push([key, value])
            return this.data;
    }

    get(key) {
        const address = this._hash(key);
        const currentBucket = this.data[address];
        if(currentBucket) {
            for(let i=0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key ) {
                    return currentBucket[i][1]
                }
            }
        } //O(1)
        return undefined;
        }
    
    keys() {
        const keysArray = [];

        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;
    }
  }
  const myHashTable = new HashTable(50);
  console.log(myHashTable.set('grapes', 10000))
  console.log(myHashTable.get('grapes'))
  console.log(myHashTable.set('apples', 9))
  console.log(myHashTable.get('apples'))

  // hash tables re great when you want quick accesss to 
  // values. Sarch / insert / lookup / and delete are all very 
  // fast in hashtables. 


// FIRST REOCURRING CHARACTER

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//.......nieve approarch 

  function firstReocurringCharacter(input) {
      for (let i = 0; i <input.length; i++) {
        for (let j = i + 1; i <input.length; j++) {
            if(input[i] === input[j]) {
                return input[i];
            }
      }
    }
    return undefined;
  } //O(n^2)


  firstReocurringCharacter()

function firstRecurringCharacter2(input) {
    let map = {};

    for (let i = 0; i < input.lenght; i++) {
        if(map[input[i]] !== undefined) {
            return input[i]
        } else {
            map[input[i]] = i
        }
    }
    return undefined
} //O(n)


// function firstRecurringCharacter(input) {
//     for (let i = 0; i < input.length; i++) {
//       for (let j = i + 1; j < input.length; j++) {
//         if(input[i] === input[j]) {
//           return input[i];
//         }
//       }
//     }
//     return undefined
//   }
  
//   function firstRecurringCharacter2(input) {
//     let map = {};
//     for (let i = 0; i < input.length; i++) {
//       if (map[input[i]] !== undefined) {
//         return input[i]
//       } else {
//         map[input[i]] = i;
//       }
//     }
//     return undefined
//   }
  
//   firstRecurringCharacter2([1,5,5,1,3,4,6])
  
  
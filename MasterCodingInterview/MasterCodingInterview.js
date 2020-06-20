// Whats good code?
// two things: Readable and Scalable.

/*
notes measuring perfomacne in nemo function we can use 
performance.now that is built into JS and the browser.
*/

const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 
'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']

const large = new Array(100).fill('nemo');

// let t0 = performance.now();
function findNemo(array) {
    for (let i=0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log("found nemo")
        }
    }
    // let t1 = performance.now();
    // console.log("call to find nemo took" + (t1 - t0) + 'milliseconds')
}

findNemo(large) /* 0(n) ----> Linear Time: Depends on the number of inputs, 
as inputs increase # operations increase with it.*/


function compressFirstBox(boxes) {
    console.log(boxes[0])
}
/* 0(1) ------> constant time: its always going to take the first item (or whatever
    index you are looking for) in the array */


const boxes = [0, 1, 2, 3,4,5]
    function logFirstTwoBoxes(boxes) {
        console.log(boxes[0]); // 0(1)
        console.log(boxes[1]); // 0(1)
    }
logFirstTwoBoxes(boxes) // 0(2) ---> still 0(1), its constant time ie flat line on graph

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10; // 0(1)
    a = 50 + 3; // 0(1)
  
    for (let i = 0; i < input.length; i++) { //0(n)
      anotherFunction(); //0(n)
      let stranger = true; //0(n)
      a++; //0(n)
    }
    return a; // 0(1)
  }

/* Big 0 Notation = 0(3 + 4n) 
This is calculating out Big 0 step by step.
in an interview you wont be asked to do this and you will 
just follow a set of rules. 
1.Worst case, 
2.Remove Constants, 
3. different terms for inputs, 
4.Drop Non Dominants

1. Worst case:
Going back to the finding nemo function we would simply say that 
it is 0(n). Even when we find nemo and it's doing so at the 4th index.
it's still going to look through the full array, making it verey ineefficient. 
if we want to make it more efficient we need to stop it once it meets its condition 
by using "break;"....... This will break us out of the loop.

This makes our code better. But Big O only cares about worst case. Meaning we will always assume that 
its going to be the worst case and in this case its 0(n) even if nemo is the first element in the array.

2. Remove Constants:

function printFirstItemThenFirstHalfThenSayHi100Time(items) {
    console.log(items[0]);

    var middleIndex = Math.floor(items.length /2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++
    }
    for (var i = 0; i < 100; i++) {
        console.log('hi)
    }
}

Whats the Big 0? 
0(1 + n/2 + 100) 

We dont really care about the 100. This becomes 1. If n = 10000000 then adding 
anotheer 100 steps on there doenst reeally matter. And n/2, even though its devided by half, as n gets 
larger and larger n/2 becomes increasingly insignificant. so we drop this to n. And again 
n + 1 becomes n, we drop the constants beacuse what comess after n doesnt matter.


3. different terms for inputs

One of the trickery parts of an interview. 

function compressFirstTwice(boxes) {
    boxes.foreach(function(boxes) {
        console.log(boxes)
    });

      boxes.foreach(function(boxes) {
        console.log(boxes)
    });
    
}
Big 0 of this is 0(2n) but beacuse we drop thee constants it becomes 
0(n). 

but what if we pass a second parameter and loop over that second perameter
in the second loop? 

Many people trip this part up and say its 0(n) still. The third rule states that there aree different 
terms for different inputs. If given two different inputs it depends on their size. 
The Big 0 of this becomes 0(a + b). The two loops may be looping over two different items like this.

What happens if loops are nested?.........

 log all pairs of array
 const boxes = ['a', 'b', 'c', 'd', 'e'] 
 function logAllPairsOfArray(array) {
     for (let i = 0; i < array.length: i++) {
         for (let j = 0; j < array.length; i++) {
             console.log(array[i],  array[j])
         }
     }
 }

 logAllPairsOfArray(boxes)

 what is the Big 0 of this?
 Good rule of thumb is that if you see two loops that are nested instead of using 
 addition like we normally would ex 0(n + n) it becomes 0(n * n).
 which when is multiplied becomes: 
 0(n^2) ------> Quadratic Time.

Another rule of thumb is to go by indentation for this rule meaning 

consecutive indentation = addition 0(n + n) 
nested indentation = multiplication 0(n * n) or 0(n^2)


4.Drop Non Dominants

function printAllNumbersThenAllPairSums(numbers) {

  console.log('these are the numbers:');
  numbers.forEach(function(number) {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function(firstNumber) {
    numbers.forEach(function(secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1,2,3,4,5])

Big O of this is O(n + n^2) beacus the first loop is O(n) then there 
is a consecuvtive indentation which is + and then we have a nested loop 
which is O(n^2) which equals O(n + n^2). 

But the rule to Drop Non Dominants says we drop which ever one isnt as important 
in this case we drop the O(n)

Making it O(n^2). This is more important beacuse its the dominant term in the 
sense that its terrible.



O(n!) ------> Factorial time, never going to see it. Means we are adding a loop (nested) for
every element in the array. 


Scalability 

Good code has two things, readability and scallability. Scalability has two 
components: speed(time complexity) & memory. 

The three pillars of writing good code is 1. readability 2. memory (space complexity) 
3. speed (time complexity.). 

There are trade offs between 2 & 3. 

#5 Space complexity O(1)
function boooo(n) {
    for (let i = 0; i < n; i++) {
        console.log('booooo');
    }
}

// #6 Space complexity O(n)
function arrayOfHiNTimes(n) {
    var hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

arrayOfHiNTimes(6)

#6 we added data structures that is taking up additional memory.

                                                                                                                                                                                                                                                                                              



SECTION 4 How to solve coding problems....

Companies are looking for:

1. Analytic Skills
2. Coding Skills 
3. Technical Skills 
4. Communication Skills 




*/
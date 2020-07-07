// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }
// class Node { // create class to dry up code.
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }
class linkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        // const newNode = new Node(value); To dry up code create new node from the class above instead creating a new node eveery time.
        const newNode = { 
            value: value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null
        };
        newNode.next = this.head;
        this.head = newNode;
        this.length ++;
        return this;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(index, value) {
        // check params
        if(index >= this.length) {
            return this.append(value);
        }
        const newNode = {
            value: value,
            next: null
        };
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
    }
    traverseToIndex(index) {
        // check params
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index) {
            currentNode = currentNode.next;
            counter ++;
        }
        return currentNode;
    } 
    remove(index) {
        // check params
        const leader = this.traverseToIndex(index-1);
        const unWantedNode = leader.next;
        leader.next = unWantedNode.next;
        this.length--;
        return this.printList();
    }
}

const myLinkedList = new linkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(2, 99);
console.log(myLinkedList);


//======================== REVERSE LINKED LIST =================================//
// var reverseList = function(head) {
//     let reversed = null;
//     while (head) {
//         // store initial order in temp variable
//         const next = head.next;
//         // assign the next node to what has been reversed so far
//         head.next = reversed;
//         // one more node has been reversed, assign reversed to the linked list
//         reversed = head;
//         // reset head to the original order minus one node that has been added to the reversed list
//         head = next;
//     }
//     return reversed;

//     // Recursive solution    
//     var recursiveReverse = (head, reversed) => {
//       if (!head) {
//           return reversed
//       }
//       const next = head.next;
//       head.next = reversed;
//       reversed = head;
//       return recursiveReverse(next, reversed)
//     }
    
//     return recursiveReverse(head, null)
// };


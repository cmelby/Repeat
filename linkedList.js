let myLinkedList = {
    head: {
        value: 10,
        next: {
            value: 5, 
            next: {
                value: 16,
                next: null
            }
        }
    }
}

class LinkedList {
    constructor(value) {

    }
}

const 


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


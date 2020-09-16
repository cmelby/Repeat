/*
Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct 
the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

Note:

If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a 
single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
All airports are represented by three capital letters (IATA code).
You may assume all tickets form at least one valid itinerary.
One must use all the tickets once and only once.
Example 1:

Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]
Example 2:

Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
             But it is larger in lexical order.
 */

let tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]];
var findItinerary = function(tickets) {
    let map = new Map();
    let result = [];
    let numberOfTickets = 0;
    for(let i=0; i<tickets.length; i++){
        if(map.has(tickets[i][0])){
            map.get(tickets[i][0]).push(tickets[i][1]);
            let sortedDestinations = map.get(tickets[i][0]).sort();
            map.set(tickets[i][0], sortedDestinations);
        }else{
            let destinations = [];
            destinations.push(tickets[i][1]);
            map.set(tickets[i][0], destinations);
        }
    }
    result.push("JFK");

    function DFS(key){
        if(!map.has(key)) return;
        let destinations = map.get(key);
        for(let i=0; i<destinations.length; i++){
            let neighbor = destinations[i];
            destinations.splice(i, 1);
            result.push(neighbor);
            numberOfTickets++;
            DFS(neighbor);
            if(tickets.length===numberOfTickets) return;
            destinations.splice(i, 0, neighbor);
            result.pop();
            numberOfTickets--;
        }
    }
    DFS('JFK');
    
    return result;
};
console.log(findItinerary(tickets));
var findItinerary = function(tickets) {
    let map = new Map();
    let result = [];
    let numberOfTickets = 0;
    for(let i=0; i<tickets.length; i++){
        if(map.has(tickets[i][0])){
            map.get(tickets[i][0]).push(tickets[i][1]);
            let sortedDestinations = map.get(tickets[i][0]).sort();
            map.set(tickets[i][0], sortedDestinations);
        }else{
            let destinations = [];
            destinations.push(tickets[i][1]);
            map.set(tickets[i][0], destinations);
        }
    }
    result.push("JFK");

    function DFS(key){
        if(!map.has(key)) return;
        let destinations = map.get(key);
        for(let i=0; i<destinations.length; i++){
            let neighbor = destinations[i];
            destinations.splice(i, 1);
            result.push(neighbor);
            numberOfTickets++;
            DFS(neighbor);
            if(tickets.length===numberOfTickets) return;
            destinations.splice(i, 0, neighbor);
            result.pop();
            numberOfTickets--;
        }
    }
    DFS('JFK');
    
    return result;
};
console.log(findItinerary(tickets));

/** SOLUTION NOTES
 Depth-first search traversal in Javascript. DFS visits the child vertices before visiting the sibling vertices; 
 that is, it traverses the depth of any particular path before exploring its breadth. A stack (often the program's 
 call stack via recursion) is generally used when implementing the algorithm.
 */

 // Second Solution....................
 let tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]];
var findItinerary = function(tickets) {
    tickets.sort()
    let hash = {};
    for (let ticket of tickets) {
        if (!hash[ticket[0]]) hash[ticket[0]] = []; // "from" key
        if (!hash[ticket[1]]) hash[ticket[1]] = []; // "to" key
        hash[ticket[0]].push(ticket[1]);
    }

    let res = [];
    let dfs = function(from, itinerary) {
        if (itinerary.length == tickets.length + 1) {
            res = itinerary;
            return true;
        }
        let len = hash[from].length;
        for (let i=0;i<len;i++) {
            let to = hash[from].shift();
            if (dfs(to, [...itinerary, to])) return itinerary;
            hash[from].push(to);
        }
        return false
    }

    dfs("JFK", ["JFK"]);
    return res;
};
console.log(findItinerary(tickets));



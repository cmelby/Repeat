
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
  /**Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

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



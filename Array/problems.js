// A hash map (or hash table) is a data structure that allows you to store key-value pairs, where each key is unique. Hash maps are commonly used in programming tasks that involve looking up values based on keys, as they provide fast and efficient access to values based on their keys.






// The "first recurring"

// [1, 4, 6, 4, 5, 5, 4, 2, 1];

//expected: 4

// function firstRecuring(arr) {
//     let map = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (map[arr[i]] !== undefined) {
//             return arr[i]; // Found the first recurring element
//         }
//         map[arr[i]] = i;
//     }
//     return undefined; // No recurring element found
// }

// let a = [1, 4, 6, 4, 5, 5, 4, 2, 1];
// console.log(firstRecuring(a)); // Output: 4

////////////////////////////////////////////

//Find the first non-repeating element
// let a;
// a = [1, 4, 6, 1,  65, 5, 0, 3, 0, 5, 3, 8, 8, 4, 6] // Output: 1

// function firstNonRepeating(arr) {
//     // let map = {}
//     let a;
//     for (let i = 0; i < arr.length; i++) {
//         a = 0
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 continue;
//             } else {
//                 a++    
//             }
//         }
//         if (a === arr.length - 1) {
//             return arr[i]
//         }
//     }
//         return undefined;
// }

// function firstNonRepeatingHashMap(arr) {
//     let map = {}
//     for (let i = 0; i < arr.length; i++) {
//         if (map[arr[i]] === undefined) {
//             map[arr[i]] = 1
//         } else {
//             map[arr[i]] += 1
//         }
//     }

//     for (let i = 0; i < arr.length; i ++) {
//         if (map[arr[i]] === 1) {
//             return arr[i]
//         } 
//     }
//     return null;
// }

// console.log(firstNonRepeating(a));
// console.log(firstNonRepeatingHashMap(a));

// a = [1, 65, 11, 3, 2, 2, 1]
// console.log(firstNonRepeatingHashMap(a));

//////////////////////////////////////////////

//Find duplicates

// let a = [1, 2, 3, 4, 5, 5,  6, 4, 2, 1]

// function duplicates(arr) {
//     let newArr = [];
//     let map = {}
//     for (let i = 0; i < arr.length; i++) {
//         if (map[arr[i]] === undefined) {
//             map[arr[i]] = 1
//         } else {
//             map[arr[i]] +=1
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (!newArr.includes(arr[i]) && map[arr[i]] > 1) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }

// console.log(duplicates(a));

///////////////////////////////////////////////
// Find the common elements: Given two arrays, find the common elements between them.

// let a1 = [1, 3, 4, 6, 7, 11]
// let a2 = [1, 4, 10, 11]

// function common(arr1, arr2) {
//     let common = []
//     let map = {}

//     for (let i = 0; i < arr1.length; i++) {
//         if (map[arr1[i]] === undefined) {
//             map[arr1[i]] = 1
//         } else {
//             map[arr1[i]] += 1
//         }
//     }

//     for (let i = 0; i < arr2.length; i++) {
//         if (map[arr2[i]]) {
//             common.push(arr2[i])
//         }
//     }
//     return common
// }

// console.log(common(a1, a2));
/////////////////////////////////////////////////

//Find the longest consecutive subarray with a given sum

// let arr = [1, 3, -1, 4, 5, -3, -5, 10, 1, -1]
// let sum = 7

// function longestSubarray(arr, targetSum) {
    
//     let map = {}
//     let maxLength = 0
//     let curSum = 0
//     for (let i = 0; i < arr.length; i++) {
//         curSum += arr[i]

//         if (curSum === targetSum) {
//             maxLength = i + 1
//         }

//         if (map[curSum - targetSum]) {
//             maxLength = Math.max(maxLength, i - map[curSum - targetSum])
//         }
//         if (!map[curSum]) {
//             map[curSum] = i;
//           }
//     }

//     return maxLength
// }

// console.log(longestSubarray(arr, sum));
///////////////////////////////////////////////
//Find the majority element

// let a = [1, 3, 4, 5, 5, 5, 5] 

// function majority(arr) {
//     let map = {}

//     for (let i = 0; i < arr.length; i ++) {
//         if (!map[arr[i]]) {
//             map[arr[i]] = 1
//         } else {
//             map[arr[i]] += 1
//         }
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (map[arr[i]] > arr.length/2) {
//             return arr[i]
//         }
//     }
//     return null
// }

// console.log(majority(a));
/////////////////////////////////////////////
//Max sum

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubarraySum(arr) {
    let currSum = arr[0];
    let maxSum = arr[0];

    for (let i = 0; i < arr.length; i ++) {
        currSum = Math.max(currSum + arr[i], arr[i])
        maxSum = Math.max(maxSum, currSum)
    }
    return maxSum
}



let maxSum = maxSubarraySum(nums);
console.log("Maximum Subarray Sum: ", maxSum);


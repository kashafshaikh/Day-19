
// Day 19

// ### Question 1: Find the Maximum Difference
// *Problem Statement:*
// Given an array of integers, find the maximum difference between any two elements in the array. The difference should be calculated as difference = arr[j] - arr[i] where j > i.

// *Example:*
// typescript
// Input: [2, 7, 9, 5, 1, 3, 5]
// Output: 7
// Explanation: The maximum difference is between 9 and 2, where 9 - 2 = 7.


// *Hint:*  
// Iterate through the array, keeping track of the minimum value encountered so far. Calculate the difference between the current element and the minimum value and update the maximum difference accordingly.

//---

function findMaxDifference (arr:number[]): number{
    if (arr.length < 2){
        return 0;
    }
    let minVal = arr[0];
    let maxDiff = arr[1] - arr[0]

    for(let i =1 ; i<arr.length; i++){
        const currentDiff = arr[i]- minVal
        if(currentDiff > maxDiff){
            maxDiff = currentDiff
        }
        if(arr[i] < minVal){
            minVal = arr[i]
        }
    }
    return maxDiff;
}

const inputArray = [2, 7, 9, 5, 1, 3, 5];
console.log(findMaxDifference(inputArray)); // Output: 7



// ### Question 2: String Character Frequency
// *Problem Statement:*
// Write a function that takes a string as input and returns an object where the keys are characters and the values are the frequency of those characters in the string.

// *Example:*
// typescript
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }


// *Hint:*  
// Use an object to store the frequency of each character. Iterate over the string and update the count for each character

function charFrequency (str : string): { [key: string]: number } {
    const frequency : { [key: string]: number } = {};

    for (const char of str) {
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }

    return frequency;
}

const inputStr = "hello";
console.log(charFrequency(inputStr)); // Output: { h: 1, e: 1, l: 2, o: 1 }










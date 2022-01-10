# Functions

## Easy
1. Given a and b, your function should return the value of a^b
      Example:
      Input: power(2,3) ––> Output: 8 
```
const getPow = (a, b) => Math.pow(a, b);
let a = 2;
let b = 3;
const res = `${a} ^ ${b} = ${getPow(a, b)}`;
console.log(res);
```

2. Given length of a regular hexagon, your function should return area of the hexagon.
Example:
Input: areaOfHexagon(10) ––> Output: 259.80 */
```
const hexArea = (len) => (Math.sqrt(3) * Math.pow(len, 2) * 6) / 4;
let len = 11;
const res = `Area of hexagon with length ${len} cm = ${hexArea(len)}`;
console.log(res);
```

3. Given a sentence, your functions should return the number of words in the sentence.
Example:
Input: noOfWords(We are neoGrammers) ––> Output: 3
```
const getNumWords = (sentence) => sentence.split(" ").length;
let sentence = "We are neoGrammers";
const res = `Number of words = ${getNumWords(sentence)}`;
console.log(res);
```

4. Given n numbers, your function should return the minimum of them all. 
The number of parameters won't be accepted from user.
Example:
Input: findMin(3,5) ––> Output: 3
Input: findMin(3,5,9,1) ––> Output: 1

- Important concept of destructuring
```
const findMin = (...numbers) => Math.min(...numbers);
const res = `Minimum of (3,5) = ${findMin(3, 5)}`;
console.log(res);
const res2 = `Minimum of (3,5,9,1) = ${findMin(3, 5, 9, 1)}`;
console.log(res2);
```

5. Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
Example:
Input: findMax(3,5) ––> Output: 5
Input: findMax(3,5,9,1) ––> Output: 9

- Important concept of destructuring
```
const findMax = (...numbers) => Math.max(...numbers);
const res = `Maximum of (3,5) = ${findMax(3, 5)}`;
console.log(res);
const res2 = `Maximum of (3,5,9,1) = ${findMax(3, 5, 9, 1)}`;
console.log(res2);
```

6. Given three angles of a triange, your function should return if it is a scalene, 
isosceles, equilateral triangle or not a triangle at all. Example:
Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle
```
const typeOfTriangle = (a, b, c) => {
  if (a === b && a === c && a + b + c === 180) {
    return "Equilateral Triangle";
  } else if ((a === b || b === c || a === c) && a + b + c === 180) {
    return "isosceles Triangle";
  } else if (a + b + c === 180) {
    return "Scalene Triangle";
  } else {
    return "Not a Triangle";
  }
};

console.log(typeOfTriangle(45, 90, 45));
```

## Medium

1. Given an array, your function should return the length of the array.
Example:
Input: arrayLength([1,5,3,7,8]) ––> Output: 5
```
const lenofArray = (arr) => arr.length;
console.log(`Length = ${lenofArray([1, 2, 3])}`);
```

2. Given an array and an item, your function should return the index at 
which the item is present.
Example:
Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2
```
const getIndex = (arr, k) => {
  console.log(arr.length);
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    if (arr[i] === k) {
      return i;
    }
  }
};
console.log(`Index of 3 is ${getIndex([5, 2, 6, 7, 3, 4, 5], 3)}`);
```
  - Another approach
```
const getIndex = (arr,k) => arr.indexOf(k);
console.log(`Index of 3 is ${getIndex([5, 2, 6, 7, 3, 4, 5], 3)}`);
```

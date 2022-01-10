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

3. Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
Example:
Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]
```
const replaceArray = (arr, a, b) => arr.map(item => item === a?b:item);
console.log(`Replaced Array = ${replaceArray([1, 3, 4, 5, 6, 5], 5, 10)}`);
```

4. Given two arrays, your function should return single merged array.
Example:
Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]
```
const mergeArray = (arr1,arr2) => [...arr1 , ...arr2]
console.log(`Merged Array = ${mergeArray([1,3,5], [2,4,6])}`)
```

5. Given a string and an index, your function should return the character present at that index in the string.
Example:
Input: charAt("neoGcamp", 4) ––> Output: c
```
const getChar = (a, i) => a[i];
console.log(getChar("neoGcamp", 4));
```

6. Given two dates, your function should return which one comes before the other.
Example:
Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021
```
const minimumDate = (d1, d2) => {
  let date1 = d1.split("/");
  let date2 = d2.split("/");
  if (date1[2] > date2[2]) {
    return d2;
  } else if (date1[2] < date2[2]) {
    return d1;
  } else {
    if (date1[1] > date2[1]) {
      return d2;
    } else if (date1[1] < date2[1]) {
      return d1;
    } else {
      if (date1[0] > date2[0]) {
        return d2;
      } else if (date1[0] < date2[0]) {
        return d1;
      } else {
        return d1;
      }
    }
  }
};
console.log(minimumDate("02/05/2021", "24/11/2021"));
```

## Advanced

1. Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.
```
const encodeString = (s, num) => {
  let charcode = 0;
  let result = "";
  for (let i = 0; i < s.length; i++) {
    charcode = s[i].charCodeAt() + num;
    result += String.fromCharCode(charcode);
  }
  return result;
};
console.log(encodeString("neogcamp", 2));
```

2. Given a sentence, return a sentence with first letter of all words as capital.
Example:
Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers
```
const toSentenceCase = (str) => str.split(" ").map((item) => item[0].toUpperCase() + item.slice(1));
console.log(toSentenceCase("we are neoGrammers"));
```

3. Given an array of numbers, your function should return an array in the ascending order.
Example:
Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]
```
const sortArray = (arr) => console.log(arr.sort().reverse());
console.log(sortArray([100, 83, 32, 9, 45, 61]));
```
- Another Approach
```
const sortArray = (arr) => console.log(arr.sort((a,b)=>a-b));
console.log(sortArray([100, 83, 32, 9, 45, 61]));
```

4. Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
Example:
Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen
```
const reverseCharactersOfWord = (s) =>
  s.split(" ").map((item) => {
    let res = "";
    for (let i = item.length - 1; i >= 0; i--) {
      res += item[i];
    }
    return res;
  });
console.log(reverseCharactersOfWord("we are neoGrammers"));
```
- Optimize Approach
```
const reverseCharactersOfWord = (s) => s.split(" ").map((item) => item.split("").reverse().join(""));
console.log(reverseCharactersOfWord("we are neoGrammers"));
```

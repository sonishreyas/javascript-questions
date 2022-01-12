# Strings

## Beginner to Intermediate

- Write a program that converts the string into uppercase
```jsx
let s = "hello world";
console.log(s.toUpperCase());
```
- Write a program that reads two strings and append first string to the second. So if first string is Good second string is Morning , the program should print MorningGood
```jsx
const f = "GOOD";
const s = "MORNING";
const a = `${f}${s}`;
const b = s.concat(f);
console.log(a);
```
- Program that reads string and count number of characters present in the string
```jsx
const str = "Hello World";
const calLen = (str) => {
  let c = 0;
  for (let i = 0; i < str.length; i++) c += 1;
  return c;
};
console.log(calLen(str));
```
- Write a program that converts string like "124" to 124
```jsx
const str = parseInt("124");
console.log(str,typeof(str));
```
- Write a program to delete all vowels from a string. Assume string is not more than 80 characters long
```jsx
const str = "adfsvjjh lakjdhlkajsdlk oiqueoiqwue alkhsdl";
const removeVov = (str) => str.replace(/[a,e,i,o,u]/g, "");
console.log(removeVov(str));
```
- Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45
```jsx

```
- A program that reads three strings and prints the longest and smallest one
```jsx

```
- A program that counts number of vowels and consonants in a String?
```jsx

```
- Write a program which receives a string str that calculates the length of a string and return true if the length is greater than 7 without using strlen()
```jsx

```
- Write a program that takes two strings and copies smaller string into bigger string
```jsx

```
- Given a string, determine if it is a palindrome, considering only alphanumeric characters
```jsx

```
- For a given input string(str), write a function to print all the possible substrings.Without using substr method
```jsx

```
- Write a program that removes the time from the given date string "Wed April 15, 7pm". It should return only the date without the time.
```jsx

```
- Write a program that masks all but last four characters of the string "5565534276455423" to '#'
```jsx

```
- Given a string "tic tac toe is a fun game" convert the first 6 characters to capital case
```jsx

```
## Advance

- Given an input string S and two characters c1 and c2, you need to replace every occurrence of character c1 with character c2 in the given string
```jsx

```
- Given an input string S that contains multiple words, you need to remove all the spaces present in the input string. There can be multiple spaces present after any word
```jsx

```
- Reverse the given string word wise. That is, the last word in given string should come at 1st place, last second word at 2nd place and so on. Individual words should remain as it is. example: Input : Welcome to NeoG Camp → Camp NeoG to Welcome
```jsx

```
- A program that counts the value of each character and prints the most repeated character?
```jsx

```
- Write a program to toggle case of each character of the string "good afternoon" (example: "neogcamp" ⇒ "nEoGcAmP" )
```jsx

```
- Given a string "how was your day?" and a word "how", write a program that removes the occurrence of the specified word from given sentence. ( input: string⇒"programming camp are amazing",word⇒ "programming"; output:" camp are amazing")
```jsx

```

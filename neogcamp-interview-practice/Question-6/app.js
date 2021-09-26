var readlineSync = require("readline-sync");

var avg = 0;
var max_marks = 0;
var n;
for (var i = 0; i < 5; i++) {
  var name = readlineSync.question("Enter your name: ");
  var unit = readlineSync.question("Unit test marks: ");
  var pre = readlineSync.question("Pre final marks: ");
  var final = readlineSync.question("Final marks: ");
  var total = Number(unit) + Number(pre) + Number(final);
  avg += Number(total);
  if (max_marks < total) {
    n = name;
    max_marks = total;
  }
}

console.log(n, " has Maximum marks = ", max_marks);
console.log("Average marks = ", avg / 5);

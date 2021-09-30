var readlineSync = require('readline-sync');

var person = [
  {
    "name":"Ram",
    "age": 25,
    "yuga": "Treta"
  },
  {
    "name":"Krishna",
    "age": 31,
    "yuga": "Dwapar"
  }
];

function older(persons) {
  var max_age = 0;
  var p = -1;
  for(let i = 0 ; i < persons.length; i++)  {
    if (max_age < persons[i]["age"])  {
      max_age = persons[i]["age"];
      p = i;
    }
  }
  return persons[p];
}

console.log(older(person));


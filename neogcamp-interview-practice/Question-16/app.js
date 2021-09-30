var readlineSync = require('readline-sync');

var person = [
  {
    "name":"Ram",
    "power": 2500,
    "yuga": "Treta"
  },
  {
    "name":"Krishna",
    "power": 2325,
    "yuga": "Dwapar"
  }
];

function older(persons) {
  var max_power = 0;
  var p = -1;
  for(let i = 0 ; i < persons.length; i++)  {
    if (max_power < (35*persons[i]["name"].length + persons[i]["power"]))  {
      max_power = (35*persons[i]["name"].length + persons[i]["power"]);
      p = i;
    }
  }
  return persons[p];
}

console.log(older(person));


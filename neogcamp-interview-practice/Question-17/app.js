var readlineSync = require("readline-sync");

var news = readlineSync.question("Enter the news: ");
var source = readlineSync.question("Enter the source: ");

function detectFake(sources)  {
  var message;
  
  if (sources === "facebook" || sources === "whatsapp" || sources === "telegram") {
    message = "Don't believe things on FB, telegram and Whatsapp";
  } else  {
    message = "News is valid";
  }
  return message;
}
console.log(detectFake(source.toLowerCase()));
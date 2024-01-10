// Code your solutions in this file
let messages =[];
function writeCards(stringNames, eventName) {
    for (let i = 0; i < stringNames.length; i++) {
 let customMessage = `Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`;
 messages.push(customMessage);
}
return messages;
  }


function countDown(number){
    console.log(number);
    while (number > 0) {
        number--;
        console.log(number);
      }
}
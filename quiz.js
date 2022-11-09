const readlineSync = require('readline-sync');

var questions = ["What is the capital city of South Korea","Question2","Question3","Question4"];
var answers = ["C","A","B","D"];
var choices = ["A","B","C","D"];


let q = readlineSync.question(questions[0]+"\n"+"A"+"\n"+"B"+"\n"+"C"+"\n"+"D?"+"\n");
console.log("Your choice:"+q);
console.log("Correct answer:"+answers[0]);


let q1 = readlineSync.question(questions[1]+"\n"+"A"+"\n"+"B"+"\n"+"C"+"\n"+"D?"+"\n");
console.log("Your choice:"+q1);
console.log("Correct answer:"+answers[1]);

let q2 = readlineSync.question(questions[3]+"\n"+"A"+"\n"+"B"+"\n"+"C"+"\n"+"D?"+"\n");
console.log("Your choice:"+q2);
console.log("Correct answer:"+answers[2]);

let q3 = readlineSync.question(questions[3]+"\n"+"A"+"\n"+"B"+"\n"+"C"+"\n"+"D?"+"\n");
console.log("Your choice:"+q3);
console.log("Correct answer:"+answers[3]);

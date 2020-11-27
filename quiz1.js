
 var score = 0;


 var highScore= [
 {
  user : 'Saurav',
  score:3
 },

 {
   user : 'Deepak',
   score: 4
 } 

 ]

var gameArray = [

  {
  question : 'Where does Prashant live: ', 
  answer : 'PUNE'
} ,

{
  question : 'What is his favorate game: ',
  answer: 'CRICKET'
},

{
  question : 'What is his favorate food: ',
  answer: 'BIRYANI'
  },

{
  question : 'Where does he work: ',
  answer: 'IT'
  },

  {
  question : 'Tell me his Surname: ',
  answer: 'SINGH'
  }
]

const chalk = require('chalk');
 
const qs = chalk.bold.red;
const ans = chalk.bold.blue;
 



var readlineSync = require('readline-sync');
var answer = readlineSync.question(qs("Do you know Prashant: "));


if(answer.toUpperCase()==='YES')
{
  console.log(ans("You have answered - YES, Let's play the Quiz"));

   for(i=0; i<gameArray.length ; i++)
 {


   var qst = gameArray[i];
   play(qst.question,qst.answer);
   
     
  
 }




 for(i=0;i<highScore.length;i++)
 {
    if(highScore[i].score < score )
       {
         console.log(ans("Congratulation, You have beaten the Previous high score: "));
         console.log(highScore[i].user);
         console.log(highScore[i].score);
       }
 }
 
  
  console.log(ans('You have scored: ' + score));
}

else
console.log(ans("Thanks for playing the Quiz!!"));




 function play(question, answer)
 {

   var userAns = readlineSync.question(qs(question));

   if(userAns.toUpperCase() === answer)
   {
     console.log('Correct!!');
     score= score+1;
   }
   else 
    console.log('Correct answer is: ' + answer);
 }











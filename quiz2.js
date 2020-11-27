
var addColor=require('chalk');
const qs = addColor.bold.red;
const ans = addColor.bold.blue;
const ans1 = addColor.bold.yellow;

var scoreVar = 0;
var quizArray = [
  {

    que:"Who acted in Devdas movie:?",
    ans:1,
    options:["SRK","Salman","Akshay","Amir"]
      
  },

{

    que:"Who killed Bahubali:?",
    ans:3,
    options:["Rajmata","Bhallaldev","Kattappa","Devsena"]
      
  },
  
 {

    que:"Who Killed SSR:?",
    ans:4,
    options:["Karan","Salman","Ekta","Rhea"]
      
  },

{

    que:"Who is Ranbir currently dating:?",
    ans:2,
    options:["Deepika","Alia","Kat","Mallika"]
      
  },

{

    que:"Who is the Serail Kisser of Bollywood:?",
    ans:2,
    options:["Saif","Emraan","SRK","Ranveer"]
      
  },

  {

    que:"Who directed Dil Chahta Hai:?",
    ans:1,
    options:["Farhan Akhtar","Karan Johar","Amir Khan","Joya Akhtar"]
      
  }
  ,

  {
    que:"In Karthik Calling Karthik, who was actually calling Karthik:?",
    ans:4,
    options:["Shonali","Kamath","Deepika","Karthik"]
      
  }
  ,
   
  {
    que:"In 3 Idiots, what is Rancho's real name:?",
    ans:3,
    options:["Ranchoddas Shamaldas Chanchad","Chatur Ramalingam","Phunsukh Wangdu","Virus"]
      
  }

]


var readlineSync = require('readline-sync');
var userInput = readlineSync.question(qs("Welcome to Bollywood Quiz!! , Would you like to Play[YES/NO]:" ));  


if(userInput.toUpperCase() === "YES")
{

  for(i=0;i<quizArray.length;i++)
   {     
     calcualteScore(quizArray[i]);
    }

console.log(ans1("Congratulations!! Your have Scored: " + scoreVar));
}




function calcualteScore(obj)
{
 
 console.log(ans(obj.que));
  var answer=readlineSync.keyInSelect((obj.options),ans1("Choose:-"),{cancel: false});


     if(answer+1 == obj.ans )
      {
        console.log("Correct !!");
        scoreVar++;
       
      }
    else 
    {
    console.log("Sorry, Wrong Ans!!");
    console.log("Correct Answer: " + obj.options[obj.ans-1])
    }
console.log("Yuor Score is: " + scoreVar);
}





var chalk=require('chalk');
var readLineSync=require('readline-sync');

console.log(chalk.white.bold("Lets see how well you know Janaki\n"));

var name =readLineSync.question(chalk.red("Please enter your name : "));

console.log("Hello "+ name +" "+"Lets start \n");
console.log(chalk.yellow("RULE - For each correct question you get 1 point \n"));
var questionsList=[
  {
    question :"What is janaki's favourite food?",
    choices:['Pizza','Pasta','Burger','Maggi'],
    answer:2
  },
  {
    question:"What is janaki's favourite show?",
    choices:['Game of Thrones','Money Heist','Suits','Queens Gambit'],
    answer:4
  },
  {
    question:"Who is janaki's Best Friend?",
     choices:['Madhu','Moureen','Pavi','Sheela'],
    answer:1,
  },
  {
    question:"What is janaki's Nickname?",
     choices:['Divya','Pooja','Swathi','Shreeja'],
    answer:4,
  },
  {
    question:"What is her hobby?",
     choices:['Singing','Dancing','Cooking','Reading'],
    answer:1,
  },
  {
    question:"What is her personality type?",
     choices:['INFJ','ISFJ','ESFJ','ENFP'],
    answer:2,
  },
  {
    question:"Where was she born?",
     choices:['Chennai','Kolkata','Mumbai','Kerla'],
    answer:2,
  },
  {
    question:"What is her favourite movie?",
     choices:['Coco','Titanic','Joker','Little Women'],
    answer:1,
  },
]
var score=0;
let highscore=[
  {
  name:'Ashish',
  score:6
  },
  {
  name:'Ananya',
  score:4
  }
];

function play()
{
for(var i=0;i<questionsList.length;i++)
{
  console.log(chalk.cyan.bold(questionsList[i].question));
   userAnswer =readLineSync.keyInSelect(questionsList[i].choices,"Choose option ");

  if(userAnswer+1===0)
  {
    break;
  }
  else
  {
    if((userAnswer+1)===questionsList[i].answer)
    {
      console.log(chalk.green("CORRECT"));
      score++;
    }
    else
    {
      console.log(chalk.red("FALSE"));
    }
  }
  console.log("\n");

}
}
function gameScore()
{
console.log(chalk.green("Your score is "+ score +" out of "+questionsList.length +"\n"));  
  for(var i=0;i<highscore.length;i++)
  {
    if(score>highscore[i].score)
    {
      console.log(chalk.green("BRAVO !! You have a high score now.Please send a screenshot to me"));
      break;
    }
  }
  console.log("---HIGHSCORES---")
  for(var i=0;i<highscore.length;i++)
  {
    console.log(chalk.yellow(highscore[i].name +" -> "+highscore[i].score));
  }
}

play();
gameScore();
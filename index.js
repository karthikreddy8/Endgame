var readlinesync=require("readline-sync");

const chalk=require("chalk");

var username=readlinesync.question(chalk.bold(chalk.green("what is your name? ")))
 var score=0;

console.log(chalk.blue("wellcome "+ username +" Do you know karthik? "))
//branching

function play(question,answer){

  var useranswer=readlinesync.question(question);
  
  if(useranswer===answer){

    console.log(chalk.bold("Right"));
    score=score+1;
  }else{
    
    console.log("wrong");
    
    score=-1
  }
  console.log(" your current score",score)
  
  console.log("-----------")

}

//array of objects
var questions=[{
  question: "where do i live? ",
  answer:"Bangalore"
},{
  question:"my favorite superhero would be? ",
  answer:"Iron man"

},{
  question:"where do i work? ",
  answer:"hydrilla"
}];

//loop

for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
  
}
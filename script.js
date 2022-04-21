let positiveAnswers = [
  "As I see it, yes",
  "It is certain",
  "It is decidedly so",
  "Yes",
  "Yes, definitely"
];

let negativeAnswers = [
  "My reply is no",
  "My sources say no",
  "There is no way",
  "No",
  "Absolutely not!"
];

let maybeAnswers = [
  "Ask again later",
  "Better to not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Reply hazy try again"
];

const NO_QUESTION_WARNING = "You need to ask a question!";

function chooseRandomAnswer(answerType){
	// Part 1: Your code here 👇]
  let randomNumber = getRandomNumber(0, 4);

  if (answerType === "positive"){
    return positiveAnswers[randomNumber];
  }
  else if (answerType === "negative"){
    return negativeAnswers[randomNumber];
  }
  else {
    return maybeAnswers[randomNumber];
  }
} 

 chooseRandomAnswerTest();

function chooseRandomAnswerType(number) {
	// Part 2: Your code here 👇
  let answerTypeNumber = getRandomNumber(0, 2);
  if (answerTypeNumber == 0){
    return "positive";
  }
  else if (answerTypeNumber == 1){
    return "negative";
  }
  else{
    return "maybe";
  }
}

  
 chooseRandomAnswerTypeTest();


function onAnswerRequested() {
  // Part 3: Your code here 👇
  let userInput = getQuestionText();
  if (userInput === ""){
    supplyAnswer(NO_QUESTION_WARNING);
  }
  else {
    let randomType = chooseRandomAnswerType();
    let randomAnswer = chooseRandomAnswer(randomType);
    supplyAnswer(randomAnswer);
    
  }
  

  
}

onAnswerRequestedTest();

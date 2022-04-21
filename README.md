# Ask the Magic 8-Ball SkillBuilder 🎱

## Contents
- Introduction
- What's Provided
- More Details
- Extra Help (If Needed)

## Introduction
Welcome to the *Ask the Magic 8-Ball* SkillBuilder! 

If you hit the Repl's `Run` button, you'll observe that the Senior Engineer has set up all the UI elements for this virtual magic 8-Ball.  Your task is to complete three functions in `script.js` that build upon eachother to implement the final user experience, which is...

When the user types a question into the input box and clicks the 8-ball, it should display a random answer from one of three answer categories: "positive", "negative", or "maybe". If the user forgot to type a question, then the 8-ball should display a reminder instead of an answer: "You need to ask a question!".

## What's Provided

At the top of `script.js` there are array variables for each of the answer categories that contain 5 answers each.  Additionally, there is a variable `NO_QUESTION_WARNING` that represents a string to be displayed when the user doesn't enter any question text. **DO NOT CHANGE THESE VARIABLES OR THE TESTS MAY FAIL.**

Additionally, there are 3 functions that you can use to interact with the page and complete this project.

**PRO-TIP:** Try running each of the below functions from the console to fully understand them before you start coding.

### `getRandomNumber(min, max)`
This function accepts the arguments `min` and `max` (Numbers) and returns a randomly generated number in between the supplied min and max (inclusive).

### `getQuestionText()` 
This function simply returns what the user typed into the question input box.
    
### `supplyAnswer(answerText)`
This function accepts a single argument `answerText` and shows that answer to the user.

<hr>

## More Details

Below are the requirements for the 3 functions you'll need to implement to complete the user experience. The first two functions you'll write will serve as tools to use in the last function that ties everything together by responding to the user click of the 8-ball. Each function comes with a test that will give you hints as you develop and help you verify that your code is correct.

### `chooseRandomAnswer(answerType)`
The parameter `answerType` will be a string that is either "positive", "negative", or "maybe". Based on this parameter, you should return a random answer from the corresponding answer array.

**TEST:** `chooseRandomAnswerTest()`
<hr>

### `chooseRandomAnswerType()`
This function should randomly return either "positive", "negative", or "maybe".  Again, you can use `getRandomNumber()` to randomly select one of the three possibilities.

**TEST:** `chooseRandomAnswerTypeTest()`
<hr>

### `onAnswerRequested()`
This function is called when the 8-ball is clicked. If no question is asked, then you should show the answer "You need to ask a question!" (use the `NO_QUESTION_WARNING` variable provided). Otherwise, supply a random answer to the user using conditional logic and the functions you have at your disposal: `getQuestionText()`, `chooseRandomAnswerType()`, `chooseRandomAnswer()`, and `supplyAnswer()`.

**TEST:** `onAnswerRequestedTest()`
<hr>

## Extra Help (If Needed)

You have everything you need to get started and complete this SkillBuilder! The most challenging part is going to be breaking down this problem into parts (what to do first, second, third). You should try this on your own but, if you're still having trouble, try clicking HINTS.md for some extra help.
## `Everything you need to complete this SkillBuilder is in the README. You should attempt the problem on your own first but below are some hints on breaking the problem down if you find yourself stuck.`

## Step 1: Implementing `chooseRandomAnswer(answerType)`

So, given an answer type of either "positive", "negative", or "maybe", we need to return a random answer from the corresponding array. One place we can start is by selecting which array we need to return an answer from.

We can create 3 different code paths using a conditional statement that compares `answerType` to "positive", "negative", or "maybe".  We can do this with an `if`/`else if`/`else` statement. Once you write the first two cases, the final `else` can handle "maybe" without the need for comparing anything.

Now we can look at what to do within an individual path; let's start with the case when `answerType` is "positive". We want to select and return a random element from the `positiveAnswers` array. For that, we need a random index that is either 0, 1, 2, 3, or 4 (array indices start at 0 and there are 5 elements total). We can generate such a random number by calling `getRandomNumber` and storing the result in a variable like `randomIndex`.  Finally, we can return the element from `positiveAnswers` array at that random index.

The remaining 2 code paths can be handled similarly.  There is something interesting to note here. Each array has 5 elements, so we are writing the same code 3 times for generating a random number. Oftentimes we'll see that we are repeating ourselves in code and this should always signal an opportunity to refactor something. In this case, we could generate `randomIndex` once in the beginning of the function and use it in all three code paths.

## Step 2: Implementing `chooseRandomAnswerType()`

This function needs to randomly return either "positive", "negative", or "maybe". The general approach should be to generate a random number that is either 0, 1, or 2. Then you can make a code path for each of these three possibilites using a conditional statement. Finally, return a different value in each of the three code paths.

## Step 3: Implementing `onAnswerRequested()`

This function does all the heavy lifting for the user experience. Remember, the user enters text (or not), clicks the 8-ball, and then this function runs.

So what do we need this function to do? Dr. Small likes to handle the special case first - that's when the user hasn't asked a question. How can we determine that? We can check the result of calling `getQuestionText()` in a conditional statement (i.e. an `if` statement) and call `supplyAnswer` using `NO_QUESTION_WARNING` in the conditional code block. To check if a string is empty you'll need to compare it against the empty string: `""`.

```js
// Example structure

if (/* code to check if test is empty */) {
  /* Output NO_QUESTION_WARNING */
  /* Don't forget to return from the function, we're done! */
}
```

For any code we write *after* the above snippet, we know that it will only execute when the user has entered some question text. So now, we just need to select a random answer type (call `chooseRandomAnswerType`), select a random answer of that type (call `chooseRandomAnswer`), and output the answer (call `supplyAnswer`).

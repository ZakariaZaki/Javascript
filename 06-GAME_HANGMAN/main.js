// we initialiaze the variables
let word = ['B', 'O', 'N', 'J', 'O', 'U', 'R']; // we store the words as an array
let foundLetters = ['_', '_', '_', '_', '_', '_', '_']; // we create the array to store the letter already found by the user
let alreadyUsed = []; // BONUS: we store the already used letters
let countFoundLetters = countWrongLetters = countAlreadyUsedLetters = 0; // we initialiaze 3 variables to count the attempts.
let answerText = [
  '✗ Sorry this letter is not in the word',
  '✓ This letter is in the word',
  '✗ You already used this letter',
]; // we declare the three possible answer in an array

// we create the function
let guessLetter = function () {

  let userInput = String(prompt('Which letter do you want to test?')).toUpperCase(); // we request a letter to the user and store it in the variable userInput
  let response = 0; // we initialiaze the response that the function will return. By default, it is 0. We use this variable as a statut code

  // We check in the already used letters array thanks to the prototype/function "includes".
  // More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
  if (alreadyUsed.includes(userInput)) { // if the letter is alreay used.
    response = 2; // we change the response to the status "2"
  } else { // if it is a new letter
    alreadyUsed.push(userInput); // we store this letter in the already used letters array
    word.forEach(function (item, index) { // we loop the array
      // item is the current value
      // index is the current position
      if (userInput === item) { // if the user input is = to the current value
        // we save the current value in the "already found letters" array at the current position
        // the both array as always the same number of elements (it's a kind of empty mirror). So the current position is the same
        foundLetters[index] = userInput;
        response = 1; // we change the response status code to 1
      }
    });
  }

  return response; // we return the status code

};

/**********
* Program *
**********/

// Welcome message to display in the log
console.log('Welcome in this hangman game');

// While we don't find all the elements, we continue the loop
// We test thanks to the every() prototype/function if there are still some _ in the foundLetters array
// in the () of the every, we test each value (aka item) in the foundLetters array with the condition inside the () (aka if item is not a '_')
// if every return "true", we found all the letters, so we must reverse the answer (thanks to !) to continue the loop
while (!foundLetters.every(item => (item != '_'))) {

  let response = guessLetter(); // we store the status return by guestLetter() function. Reminder: it's 0, 1 or 2
  console.log(answerText[response]); // we display the right message. We know the position to call thanks to the answer status

  if (response == 0) { // The letter is not in the current word
    countWrongLetters++; // we increase the "bad answer" counter by 1
  } else if (response == 1) { // the letter is in the current word
    countFoundLetters++;  // we increase the "good answer" counter by 1
  } else { // the status is not 0 or 1, so it's 2 => we already used this letter
    countAlreadyUsedLetters++; // we increase the "already user letter" counter by 1
  }

  console.log(foundLetters); // we display the already found letters to the user

};

// as the trials are unlimited, we will never see this message except if we found the words.
console.log('*'.repeat(24) + '\n* ☻ Congrats! You win! *\n' + '*'.repeat(24)); // cosmetic message to announce the victory
// we display the different counters inside the text.
// I used some \n (new line) and some \t (tab) for a more cosmetic display
console.log('You typed\n\t- ' + countFoundLetters + ' correct letters\n\t- ' + countWrongLetters + ' wrong letters\n\t- ' + countAlreadyUsedLetters + ' already used letters');

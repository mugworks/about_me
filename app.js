'use strict';

var userName = prompt('What is your name?');

alert('Welcome ' + userName);

console.log(userName);

var numCorrectAnswers = 0;


function correct_answer () {
  console.log('Your answer is Correct!');
  alert('Your answer is Correct!');
  numCorrectAnswers++;
}

function wrong_answer () {
  console.log('You are wrong!');
  alert('You are wrong!');
}

function try_again () {
  console.log('I did not understand your answer');
  alert('I did not understand your answer ' + userName);
}
// doILikeDogs, numCorrectAnswers, userName
//Question 1

var doILikeDogs = prompt('Do I like dogs?');

if (doILikeDogs.toLowerCase() === 'yes' || doILikeDogs.toLowerCase() === 'y') {
  correct_answer();
} else if (doILikeDogs === 'no' || doILikeDogs === 'n') {
  wrong_answer();
} else {
  try_again();
}
console.log('number of correct answers is', numCorrectAnswers);


//Question 2

function question_two () {
  var childhoodHomeAnswer = prompt('Is my childhood home still standing?');

  console.log(childhoodHomeAnswer);

  if (childhoodHomeAnswer.toLowerCase() === 'yes' || childhoodHomeAnswer.toLowerCase() === 'y') {
    wrong_answer();
  } else if (childhoodHomeAnswer === 'no' || childhoodHomeAnswer === 'n') {
    correct_answer();
  } else {
    alert('I did not understand your answer ' + userName);
  }
  console.log('number of correct answers is', numCorrectAnswers);
}


question_two();

//Question 3

var amICrazy = prompt('Was I foolish to organize a trip to Disneyland over spring break with my extended family? There will be 11 of us ranging in age from 12-82.');

console.log(amICrazy);

if (amICrazy.toLowerCase() === 'yes' || amICrazy.toLowerCase() === 'y') {
  alert(userName + ' you answered ' + amICrazy + ' and I have to agree with you. I have not traveled with my siblings in decades! I am not sure if all 11 of us will return.');
  numCorrectAnswers = numCorrectAnswers + 1;
} else if (amICrazy.toLowerCase() === 'no' || amICrazy.toLowerCase === 'n') {
  alert(userName + ' you answered ' + amICrazy + '. Perhaps you think this will be a family bonding experience. I hope so. My mother has not travelled with all four of her children since the 1970s.');
} else {
  alert('I did not understand your answer ' + userName);
}
console.log('number of correct answers is', numCorrectAnswers);

//Question 4

var doIPlayDrums = prompt('Do I play the drums?');

console.log(doIPlayDrums);

if (doIPlayDrums.toLowerCase() === 'yes' || doIPlayDrums.toLowerCase() === 'y') {
  wrong_answer();
  alert('I really wish I had learned to play drums when I was a teenager, ' + userName + '. I think it would be great to learn drums now, as an adult , but my teenage son plays drums and I do not want to make this activity totally uncool for him because his mom does it.');
} else if (doIPlayDrums.toLowerCase() === 'no' || doIPlayDrums.toLowerCase() === 'n') {
  alert('You said ' + doIPlayDrums + ' and are correct. I wish I had learned to play drums when I was a teenager, ' + userName + '. I think it would be great to learn drums now, as an adult , but my teenage son plays drums and I do not want to make this activity totally uncool for him because his mom does it.');
  numCorrectAnswers = numCorrectAnswers + 1;
} else {
  alert('I did not understand your answer ' + userName);
}
console.log('number of correct answers is', numCorrectAnswers);


//Question 5

var employerParkingAnswer = prompt('Do you think an employer would ever require an employee to park as far as possible from the facility even though most other employees could park wherever they wanted?');

console.log(employerParkingAnswer);

if (employerParkingAnswer.toLowerCase() === 'yes' || employerParkingAnswer.toLowerCase() === 'y') {
  alert(userName + ', you answered ' + employerParkingAnswer + ' and are correct. When I first started working for Chrysler, my husband and I only had one car and it was built by General Motors. Anyone driving a non-Chrylser car had to park in the very last row of the parking lot.');
  numCorrectAnswers = numCorrectAnswers + 1;
} else if (employerParkingAnswer.toLowerCase() === 'no' || employerParkingAnswer.toLowerCase() === 'n') {
  alert(userName + ', you answered ' + employerParkingAnswer + ' and are not correct. When I first started working for Chrysler, my husband and I only had one car and it was built by General Motors. Anyone driving a non-Chrylser car had to park in the very last row of the parking lot.');
} else {
  alert('I did not understand your answer ' + userName);
}
console.log('number of correct answers is', numCorrectAnswers);

//Question 6
function high_low (num) {
  if (num > 50 || num < 0) {
    alert('I think you need a geography lesson !');
  }else if (num > 40) {
    alert('Too high! Try again.');
  }else if (num < 40) {
    alert('Too low! Try again.');
  }
}
var howManyStates;
for (var i = 0; i < 4; i++){
  howManyStates = prompt('I love to travel. How many states have I visited so far?');
  console.log('number of states', howManyStates);
  high_low(howManyStates);
  if (howManyStates === 40) {
    alert('Correct!!!! You solved it in ' + (i + 1) + ' rounds.');
    numCorrectAnswers = numCorrectAnswers + 1;
    console.log('the correct answer is',howManyStates);
    break;
  }
};
if (i === 4 && howManyStates !== 40) {
  alert('You have run out of attempts. The answer is 40.');
}
console.log('number of correct answers is', numCorrectAnswers);

//Question 7
var whatCountries;
for (i = 0; i < 6; i++){
  whatCountries = prompt('Can you guess which countries I have biked in?');
  var whatCountriesLowerCase = whatCountries.toLowerCase();
  console.log('country is', whatCountries);
  if (whatCountriesLowerCase === 'new zealand' ||
    whatCountriesLowerCase === 'france' ||
    whatCountriesLowerCase === 'italy')
     {
    alert('You are correct ' + userName + ' ! I biked in France, Italy and New Zealand.');
    numCorrectAnswers = numCorrectAnswers + 1;
    break;
  } else {
    alert('Wrong! That was guess number ' + (i + 1) + '. You have ' + (5 - i) + ' more guesses.');
    if (i === 5){
      alert('You are out of guesses. I biked in France, Italy and New Zealand.');
      break;
    }
  }
};
console.log('number of correct answers is', numCorrectAnswers);

//Tell the user how many answers they got correct
if (numCorrectAnswers < 5) {
  alert('You got ' + numCorrectAnswers + ' answers correct out of 7 ' + userName + '. Better luck next time.');
}else{
  alert('You got ' + numCorrectAnswers + ' answers correct out of 7 ' + userName + '. Good job!');
};


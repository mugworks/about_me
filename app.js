'use strict';

var userName = prompt('What is your name?');

alert('Welcome ' + userName);

console.log(userName);

var childhoodHomeAnswer = prompt('I was born in Pennsylvania and grew up in a home built in 1882. Is my home still standing?');

console.log(childhoodHomeAnswer);

if (childhoodHomeAnswer.toLowerCase() === 'yes' || childhoodHomeAnswer.toLowerCase() === 'y') {
    alert('You answered ' + childhoodHomeAnswer + ' and are incorrect. My childhood home is no longer standing but do not be too sad. My husband thought the basement of this house was used in a creepy episode of the X-Files.');
}else if (childhoodHomeAnswer === 'no' || childhoodHomeAnswer === 'n'){
    alert('You answered ' + childhoodHomeAnswer + ' and are correct! My childhood home is no longer standing but do not be too sad. My husband thought the basement of this house was used in a creepy episode of the X-Files.');
}else{
    alert('I did not understand your answer ' + userName);
}

var amICrazy = prompt('Was I foolish to organize a trip to Disneyland over spring break with my extended family? There will be 11 of us ranging in age from 12-82.');

console.log(amICrazy);

if (amICrazy.toLowerCase() === 'yes' || amICrazy.toLowerCase() === 'y') {
    alert(userName + ' you answered ' + amICrazy + ' and I have to agree with you. I have not traveled with my siblings in decades! I am not sure if all 11 of us will return.');
}else if (amICrazy.toLowerCase() === 'no' || amICrazy.toLowerCase === 'n'){
    alert(userName + ' you answered ' + amICrazy + '. Perhaps you think this will be a family bonding experience. I hope so. My mother has not travelled with all four of her children since the 1970s.');
}else{
    alert('I did not understand your answer ' + userName);
}

var doIPlayDrums = prompt('Do I play the drums?');

console.log(doIPlayDrums);

if (doIPlayDrums.toLowerCase() === 'yes' || doIPlayDrums.toLowerCase() === 'y'){
    alert('You said ' + doIPlayDrums + ' but you are wrong. I really wish I had learned to play drums when I was a teenager, ' + userName + '. I think it would be great to learn drums now, as an adult , but my teenage son plays drums and I do not want to make this activity totally uncool for him because his mom does it.');
}else if (doIPlayDrums.toLowerCase() === 'no' || doIPlayDrums.toLowerCase() === 'n'){
    alert('You said ' + doIPlayDrums + ' and are correct. I wish I had learned to play drums when I was a teenager, ' + userName + '. I think it would be great to learn drums now, as an adult , but my teenage son plays drums and I do not want to make this activity totally uncool for him because his mom does it.')
}else{
   alert('I did not understand your answer ' + userName);
} 

var employerParkingAnswer = prompt('Do you think an employer would ever require an employee to park as far as possible from the facility even though most other employees could park wherever they wanted?');

console.log(employerParkingAnswer);

if (employerParkingAnswer.toLowerCase() === 'yes' || employerParkingAnswer.toLowerCase() === 'y'){
    alert(userName + ', you answered ' + employerParkingAnswer + ' and are correct. When I first started working for Chrysler, my husband and I only had one car and it was built by General Motors. Anyone driving a non-Chrylser car had to park in the very last row of the parking lot.');
}else if(employerParkingAnswer.toLowerCase() === 'no' || employerParkingAnswer.toLowerCase() === 'n'){
    alert(userName + ', you answered ' + employerParkingAnswer + ' and are not correct. When I first started working for Chrysler, my husband and I only had one car and it was built by General Motors. Anyone driving a non-Chrylser car had to park in the very last row of the parking lot.');
}else{
    alert('I did not understand your answer ' + userName);
}




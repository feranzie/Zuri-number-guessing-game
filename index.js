const username=prompt("What is your name");
console.log(`Hello there, ${username}, welcome to the number guessing game`);
let stage=1;
let points=0;
function guessNumber() {
  
    for(let i=2;i<10; i++) {
    // generating a random integer from 1 to 10
    const random = Math.floor(Math.random() * i) + 1;

    // take input from the user
    let number = parseInt(prompt(`Guess a number from 1 to ${i} including ${i}:`));
      

    // take the input until the guess is correct
    /*while(number !== random) {
        number = parseInt(prompt(`Guess a number from 1 to ${i} including ${i}:`));
    }*/

    // check if the guess is correct
    if(number == random) {
        console.log('correcto!');
        stage++;
        points++;
        console.log(`current level: ${stage}`);
        console.log(`Player points: ${points}`);
    }
      else {
      console.log(`wrong!. The correct answer is ${random}\nlevel: ${stage}\nScore: ${points}, Try again`);
      break
      
    }
        
      
      
   
}}
// call the function
guessNumber();
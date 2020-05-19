let showAll = document.querySelector('#show-All');
let diceRollInput = document.querySelector('#dice-roll-input');
let numberOfDiceRoll = document.querySelector('number-of-dice-roll');
let letsRoll = document.querySelector('#lets-roll');



var dieRolls = []

dieRolls.push(1);
console.log(dieRolls);

dieRolls.push(2);
console.log(dieRolls);

dieRolls.push(3);
console.log(dieRolls);

dieRolls.push(4);
console.log(dieRolls);

dieRolls.push(5);
console.log(dieRolls);

dieRolls.push(6);
console.log(dieRolls);










letsRoll.addEventListener("click", function(){
    console.log("lets-roll");
    console.log(diceRollInput.value)
    let rolls = diceRollInput.value 
    console.log(rolls)

    var letsRoll = Math.floor( Math.random() * 6 ) +1;
alert('You rolled a ' + letsRoll);
})






















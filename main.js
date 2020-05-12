let roll = document.querySelector('#roll');
let showAll = document.querySelector('#show-all');
let numberOfDiceroll = document.querySelector('#number-of-diceroll');



roll.addEventListener("click", function(){
    console.log("dice roll button clicked");
    let newRoll=Number(roll.innerHTML) +1;
    diceRoll.innerHTML =newRoll ;
})
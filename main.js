let showAll = document.querySelector('#show-All');
let diceRollInput = document.querySelector('#dice-roll-input');
let numberOfDiceRoll = document.querySelector('number-of-dice-roll');
let letsRoll = document.querySelector('#lets-roll');



var dieRolls = []






letsRoll.addEventListener("click", function () {
    console.log("lets-roll");
    console.log(diceRollInput.value)
    let rolls = diceRollInput.value
    console.log(rolls)

    let letsPlay = 0

    for (let i = 0; i < rolls; i++) {
     letsPlay = Math.floor(Math.random() * 6) + 1;
    console.log('You rolled a ' + letsPlay);

    dieRolls.push(letsPlay)
    
    
    }
    console.log(dieRolls)

   
    function totalNumber (){
        var x=document.getElementById("total-number").value;
        document.getElementById("number-of-dice-roll"),innerHTML=Math.floor(x);
    }



})

 























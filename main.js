let showAll = document.querySelector('#show-All');
let diceRollInput = document.querySelector('#dice-roll-input');
let numberOfDiceRoll = document.querySelector('number-of-dice-roll');
let letsRoll = document.querySelector('#lets-roll');


var dieRolls = []





letsRoll.addEventListener("click", function(){
    console.log("lets-roll");
    console.log(diceRollInput.value)
    let rolls = diceRollInput.value 
    console.log(rolls)

    var letsRolls = {
        sides: 6,
        roll: function () {
          var randomNumber = Math.floor(Math.random() * this.sides) + 1;
          return randomNumber;
        }
      }
      
      function printNumber(number) {
        var diceRollInput = document.getElementById('diceRollInput');
        diceRollInput.innerHTML = number;
      }
      
      var diceRollInput = document.getElementById('button');
      
      diceRollInput.onclick = function() {
        var result = dice.roll();
        printNumber(result);
      };
      
      
})






















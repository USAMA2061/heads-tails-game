

function startGame() {
          
    var playerName = prompt("Enter your name:");
    
    var choice = prompt(playerName+ " " + "choose Heads or Tails");
    
    var randomOutcome = Math.random() < 0.5 ? "win" : "lose";
    var resultDiv = document.getElementById('result');

    if (choice) {
        
        resultDiv.innerHTML = playerName + ", you chose" +" " + choice + ". You" + " " + randomOutcome };
        
        if (!playerName){
             return alert("Name is required!");}
    }
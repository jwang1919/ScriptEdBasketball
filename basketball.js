function promptForPlayerName(playerNumber) {
    var name = prompt(playerNumber + " enter your name.");
    if (name.length > 15) {
        alert("Wow, that's a long name!");
    }
    return name;
}

function tryTwoPointShot() {
    var rand1 = Math.random();
    var rand2 = Math.random();
    
    return rand1 > 0.2 && rand2 > 0.2;
}

function tryThreePointShot() {
    var rand1 = Math.random();
    var rand2 = Math.random();
    
    return rand1 <= 0.2 || rand2 >= 0.8;    
}

function getShotString(name, pointPerShot, success) {
    var initialMessage = name + " attempted a " + pointPerShot + " pointer. It was ";
    var finalMessage = success ? initialMessage + "GOOD" : initialMessage + "NO GOOD";
    
    return finalMessage;
}

function updateScore(success, score, pointPerShot) {
    var finalScore = success ? score + pointPerShot : score;
    
    return finalScore;
}

function isEndOfGame(score, name) {
    if (score >= 20) {
        alert("The game is over, " + name + " won");
        return true;
    }
    
    return false;
}
// <!-- generate random name from an array -->
// <!-- display this name in DOM but masked -->
// player needs to guess the letters in the name that was chosen if player guesses a letter correctly, make letter visible
// <!-- if player guesses wrong keep track of letter and number of guesses -->
// if player guesses all the letters in name generate new name, reset number guesses, and tally a win
// if player uses up all there guesses tally a loss, reset number of guesses,generate new name



  var xmen = ["cyclops", 'storm', "gambit", "jean grey", "rogue", "jubilee", "wolverine", "nightcrawler", "colossus",
    "beast", "professorx", "morph", "psylocke", "shadowcat", "angel", "iceman", "dazzler", "longshot", "forge",
    "bishop", "cable"]
  
  var random = xmen[Math.floor(Math.random() * xmen.length)];
  var lettersInRandom = random;
  var rightGuesses = [];
  var numGuesses = 0;
  var guesses = [];
  var wins = 0;
  var loses = 0;

for (var i = 0; i < random.length; i++) {
    numGuesses = i + 6;
  }

// numguesses = random + 10;

  var text = "";
  for (var i = 0; i < lettersInRandom.length; i++) {
    text += "_";
  }
  

  document.getElementById("demo").innerHTML =  text.split("");

  document.onkeyup = function (event) {
    var userguess = String.fromCharCode(event.keyCode).toLowerCase();
   
    // if(userguess === random.index){

    // }
    if ((guesses.indexOf(userguess) === -1) && (lettersInRandom.indexOf(userguess) === -1)) {
      guesses.push(userguess);
      numGuesses--;
      document.getElementById("dem").innerHTML = "Wrong guesses: " +guesses;
      document.getElementById("numg").innerHTML = "Number of guesses left: " +numGuesses;
    }
    else {
        rightGuesses.push(userguess);
    }
    
    var text = (" ");
    
    for (var i = 0; i < lettersInRandom.length; i++) {
        if (rightGuesses.indexOf(lettersInRandom[i])  !== -1){
            text += rightGuesses[i];
            console.log(rightGuesses);
        }

        else {
            text += " _ ";
        }

        document.getElementById("demo").innerHTML = text;

    }

    for (var i = 0; i < text.length; i++)
    if(text[i] === lettersInRandom){
        wins++
        document.getElementById("wins").innerHTML = "Wins: " +wins;
    }

    if  (numGuesses === 0){
        guesses = [];
        loses++;
        for (var i = 0; i < random.length; i++) {
    numGuesses = i + 6;
  }
        document.getElementById("loses").innerHTML = "Loses: " +loses;
    }
  }
  


    

  // document.getElementById("dem").innerHTML = guesses;
  // guesses.Push.onkeyup;

  // for (var i = 0; i < wins.length; i++) {
    // console.log(wins[i]);
    
  

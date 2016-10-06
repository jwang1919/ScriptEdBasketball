/*global promptForPlayerName*/
/*global tryTwoPointShot*/
/*global tryThreePointShot*/
/*global getShotString*/
/*global updateScore*/
/*global isEndOfGame*/

QUnit.test( "promptForPlayerName() Test", function( assert ) {
  assert.expect( 5 );
  
  // Mock short name prompt calls
  window.prompt = function(arg) {
      assert.deepEqual(arg, "Player 1 enter your name.", "prompt() Strings match");
      return "shortname";
  };
  
  var name = promptForPlayerName("Player 1");
  assert.deepEqual(name, "shortname", "No additional message for short names");
  
  // Mock long name prompt calls and alert
  window.prompt = function(arg) {
      assert.deepEqual(arg, "Player 2 enter your name.", "prompt() Strings match");
      return "Thisisareallylongname";
  };
  
  window.alert = function(arg) {
      assert.deepEqual(arg, "Wow, that's a long name!", "alert() Strings match");
  };
  
  name = promptForPlayerName("Player 2");
  assert.deepEqual( name, "Thisisareallylongname", "Additional message is returned for long names > 15 characters");
});

QUnit.test( "tryTwoPointShot() Test", function( assert ) {
  assert.expect( 1 );
  
  var firstResult;
  var secondResult;
  
  for (var index = 0; index < 100; index++) {
    firstResult = tryTwoPointShot();
    if (firstResult) {
      secondResult = tryTwoPointShot();
      if (!secondResult) {
        assert.ok(true, "Both true and false were returned");
        break;
      } else {
        // Reset values
        firstResult = false;
        secondResult = true;
      }
    }
  }
  
  if (!firstResult && secondResult) {
    assert.ok(false, "Only true or only false was returned");
  }
});

QUnit.test( "tryThreePointShot() Test", function( assert ) {
  assert.expect( 1 );
  
  var firstResult;
  var secondResult;
  
  for (var index = 0; index < 100; index++) {
    firstResult = tryThreePointShot();
    if (firstResult) {
      secondResult = tryThreePointShot();
      if (!secondResult) {
        assert.ok(true, "Both true and false were returned");
        break;
      } else {
        // Reset values
        firstResult = false;
        secondResult = true;
      }
    }
  }
  
  if (!firstResult && secondResult) {
    assert.ok(false, "Only true or only false was returned");
  }
});

QUnit.test( "getShotString() Test", function( assert ) {
  assert.expect( 2 );
  
  var firstMsg = getShotString("Kobe", 2, true);
  assert.deepEqual(firstMsg, "Kobe attempted a 2 pointer. It was GOOD", "Strings match");

  var secondMsg = getShotString("Shaq", 3, false);
  assert.deepEqual(secondMsg, "Shaq attempted a 3 pointer. It was NO GOOD", "Strings match");
});

QUnit.test( "updateScore() Test", function( assert ) {
  assert.expect( 3 );
  
  var firstMsg = updateScore(true, 20, 2);
  assert.deepEqual(firstMsg, 22, "Matches expected result of 22, with an initial score of 20 and a 2 pointer made");
  
  var secondMsg = updateScore(false, 20, 2);
  assert.deepEqual(secondMsg, 20, "Matches expected result of 20, with an initial score of 20 and a missed 2 pointer");

  var thirdMsg = updateScore(true, 20, 3);
  assert.deepEqual(thirdMsg, 23, "Matches expected result of 23, with an initial score of 20 and a 3 pointer made");
});

QUnit.test( "isEndOfGame() Test", function( assert ) {
  assert.expect( 5 );
  
  var firstResult = isEndOfGame(19, "Kobe");
  assert.notOk(firstResult, "Player Score is 19. Game should not be over yet");
  
  window.alert = function() {
    assert.ok( true, "Calls alert() function when game is over" );
    return "The game is over";
  };
  
  var secondResult = isEndOfGame(20, "Kobe");
  assert.ok(secondResult, "Player Score is 20. Game should be over");

  var thirdResult = isEndOfGame(21, "Shaq");
  assert.ok(thirdResult, "Player Score is 21. Game should be over");
  
});
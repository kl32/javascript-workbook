if (typeof describe === 'function') {

    describe('#rockPaperScissors()', () => {
      it('should detect a tie', () => {
        assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
        assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
        assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
      });
      it('should detect which hand won', () => {
        assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
        assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
        assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
        assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
        assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
        assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
      });
      it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
        assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
        assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
        assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
        assert.equal(rockPaperScissors('paper', 'rOck'), "Hand one wins!");
        assert.equal(rockPaperScissors('SCISSORS', 'Paper'), "Hand one wins!");
        assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!")
      });
      it('should be a valid entry', () => {
        assert.equal(rockPaperScissors('rock'), "valid entry");
        assert.equal(rockPaperScissors('paper'), "valid entry");
        assert.equal(rockPaperScissors('scissors'), "valid entry");
      })
    });
  } else {
  
    getPrompt();
  
  }

// Test for all possible scenarios in which "Hand one wins!".
// Test for all possible scenarios in which "Hand two wins!".
// Test to make sure user must input a valid entry (e.g. 'rock', 'paper', or 'scissors')
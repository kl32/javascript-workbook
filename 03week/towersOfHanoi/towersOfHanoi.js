'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startAnswer, endAnswer) {
  console.log("start " + startAnswer);

  console.log("end " + endAnswer);

  let firstItem = startAnswer.pop();

  let newStack = endAnswer.push(firstItem);

  return newStack;
}

function isLegal(startAnswer, endAnswer) {
  const myPiece = startAnswer[startAnswer.length - 1];

  const destination = endAnswer[endAnswer.length - 1];

  if (myPiece > destination) {
    return false;
  } else {
    return true;
  }
}

function checkForWin() {
  if (stacks.b.length == 4 || stacks.c.length == 4) {
    return true;
  } else {
    return false;
  }

}

function towersOfHanoi(startStack, endStack) {
  let startAnswer = stacks[startStack];
  let endAnswer = stacks[endStack];

  if (isLegal(startAnswer, endAnswer)) {
    movePiece(startAnswer, endAnswer);
  } else {
    console.log("not a legal move");
  }

  checkForWin();

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}

'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(str) {
// 01. translate simple word. 
// trimmed (no spaces before or after) and lowercase. .trim() .toLowercase()
  str = str.trim().toLowercase()
// put first letter at end of word, add "ay".
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelIndex = 0;

  if (vowels.includes(str[o])) {
    return str + "yay";
  } else {
    for (let char of str) {
      if(vowels.includes(char)) {
        vowelIndex = str.indexOf(char);
        break;
      }
    }
    return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
  }


}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}

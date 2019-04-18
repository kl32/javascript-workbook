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
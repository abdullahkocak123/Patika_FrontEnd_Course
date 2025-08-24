function isPalindrome(word) {
  // Kodunuzu buraya yazınız.

  // in case of a non string input;
  if (typeof word !== "string") {
    return false;
  }

  // Racecar should be true;
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    let charCode = word.charCodeAt(i);
    // input should contain only letters
    if (charCode < 97 || charCode > 122) {
      return false;
    }
  }

  // checking if it is palindromme;
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;

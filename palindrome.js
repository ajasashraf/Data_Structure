function isPalindrome(word) {
    // Remove non-alphanumeric characters and convert to lowercase
    word = word.toLowerCase();
  
    // Check if the word is equal to its reverse
    if (word === word.split("").reverse().join("")) {
      return true;
    } else {
      return false;
    }
  }
  
  // Test the function with a predefined word
  var inputWord = "Asa"; // Replace "madam" with your desired word
  if (isPalindrome(inputWord)) {
    console.log(inputWord + " is a palindrome.");
  } else {
    console.log(inputWord + " is not a palindrome.");
  }
  




function reverseStringWordByWord(str) {
    let wordsArray = str.split(' ');
    wordsArray.reverse();
    let reversedString = wordsArray.join(' ');
    return reversedString;
  }
  
  // Example usage:
  const inputString = 'Hello World Ajas';
  const reversedString = reverseStringWordByWord(inputString);
  console.log(reversedString); // Output: 'OpenAI World Hello'
  
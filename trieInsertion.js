  // Function to create a new trie
  function createTrie() {
    return { 
        children: {}, 
        isWord: false 
    };
  }

// Function to insert a word into the trie
function insertWord(root, word) {
    if (word.length === 0) {
      root.isWord = true; // Mark the end of the word
      return;
    }
  
    const char = word[0];
    if (!root.children[char]) {
      root.children[char] = { children: {}, isWord: false };
    }
  
    insertWord(root.children[char], word.slice(1));
  }
  

  
  // Example usage
  const trie = createTrie();
  insertWord(trie, "apple");
  insertWord(trie, "banana");
  insertWord(trie, "orange");
  
  console.log(JSON.stringify(trie, null, 2));
  
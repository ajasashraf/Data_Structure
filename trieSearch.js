function createTrie(){
  return {
      children:{},
      isEndOfWord:false
  }
}

function insertWord(root,word){
  if(word.length===0){
      root.isEndOfWord=true;
      return
  }

  const char=word[0];
  if(!root.children[char]){
      root.children[char]={children:{}, isEndOfWord:false}
  }
  insertWord(root.children[char],word.slice(1))
}
function search(root, word) {
  if (word.length===0) {
    return root.isEndOfWord;
  }

  const char = word[0];
  if (!root.children[char]) {
    return false;
  }

  return search(root.children[char], word.slice(1));
}




const trie=createTrie();
insertWord(trie,'apple');
insertWord(trie,'banana');

console.log(search(trie, "banana")); // Output: true
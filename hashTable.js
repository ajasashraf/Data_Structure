function createHashTable() {
  const table = {};

  function hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37; // Modulus to limit the hash within a certain range
  }

  function put(key, value) {
    const index = hash(key);
    table[index] = value;
  }

  function get(key) {
    const index = hash(key);
    return table[index];
  }

  function remove(key) {
    const index = hash(key);
    delete table[index];
  }

  function getKeyByValue(value) {
    for (const key in table) {
      if (table.hasOwnProperty(key) && table[key] === value) {
        return key;
      }
    }
    return null; // If the value is not found, return null or any other appropriate value
  }

  return {
    put,
    get,
    remove,
    getKeyByValue,
  };
}

// Usage:
const hashTable = createHashTable();
hashTable.put('apple', 5);
hashTable.put('banana', 10);
hashTable.put('orange', 8);

console.log(hashTable.get('apple')); // Output: 5
console.log(hashTable.get('banana')); // Output: 10
console.log(hashTable.get('orange')); // Output: 8

console.log(hashTable.getKeyByValue(10)); // Output: 'banana'

hashTable.remove('banana');
console.log(hashTable.get('banana')); // Output: undefined
console.log(hashTable.getKeyByValue(10)); // Output: null

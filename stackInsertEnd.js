function createNode(data) {
  return {
    data: data,
    next: null
  };
}

function createLinkedList() {
  return {
    head: null,
    push: function(data) {
      const newNode = createNode(data);

      if (!this.head) {
        this.head = newNode;
        return;
      }

      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }
  };
}

const linkedList = createLinkedList();

linkedList.push(1);
linkedList.push(2);
linkedList.push(3);

console.log(JSON.stringify(linkedList)); // Output: { head: { data: 1, next: { data: 2, next: { data: 3, next: null } } } }

function createNode(value) {
    return {
      prev: null,
      value: value,
      next: null
    };
  }
  
  function createDoublyLinkedList() {
    return {
      head: null,
      tail: null
    };
  }
  
  function prependValue(list, value) {
    let node = createNode(value);
    if (list.head) {
      node.next = list.head;
      list.head.prev = node;
      list.head = node;
    } else {
      list.head = node;
      list.tail = node;
    }
  }
  
  function appendValue(list, value) {
    let node = createNode(value);
    if (list.head) {
      node.prev = list.tail;
      list.tail.next = node;
      list.tail = node;
    } else {
      list.head = node;
      list.tail = node;
    }
  }
  
  function printList(list) {
    if (list.head) {
      let curr = list.head;
      let values = '';
      while (curr) {
        values += `${curr.value}  `;
        curr = curr.next;
      }
      console.log(values);
    } else {
      console.log('no values');
    }
  }
  
  function reversePrintList(list) {
    if (list.head) {
      let curr = list.tail;
      let values = '';
      while (curr) {
        values += `${curr.value}  `;
        curr = curr.prev;
      }
      console.log(values);
    } else {
      console.log('no values');
    }
  }
  
  function sortList(list) {
    if (list.head) {
      let curr = list.head;
      while (curr) {
        let adj = curr.next;
        while (adj) {
          if (curr.value > adj.value) {
            let temp = curr.value;
            curr.value = adj.value;
            adj.value = temp;
          }
          adj = adj.next;
        }
        curr = curr.next;
      }
    } else {
      console.log('empty list');
    }
  }
  
  const list = createDoublyLinkedList();
  
  appendValue(list, 9);
  appendValue(list, 2);
  appendValue(list, 10);
  prependValue(list, 4);
  printList(list);
  sortList(list);
  printList(list);
  // reversePrintList(list);
  
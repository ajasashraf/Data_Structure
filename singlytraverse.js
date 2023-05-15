function Node(data) {
    return{
    data:data,
    next:null
    }
}
function traverseLinkedList(head){
    let currentNode = head;

    while(currentNode!==null){
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

traverseLinkedList(node1);

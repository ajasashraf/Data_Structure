function Node(value){
    return{
        value:value,
        next:null
    }
}
function reverseLinkedList(head){
    let current = head;
    let prev = null;
    while(current){
        next=current.next;
        current.next=prev;
        prev=current;
        current=next;
    }
    return prev;
}


const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

let reversed = reverseLinkedList(node1);

while(reversed){
    console.log(reversed.value)
    reversed = reversed.next; 
}
class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}
class LinkedList {
  // setup head and tail
  constructor() {
  this.head = null;
   }
    add(number) {
  var node = new Node(number);
  var curentNode;
  curentNode = this.head;
  if(this.head == null){
  this.head = node;
  } else {
  while(curentNode.next_node){
   curentNode = curentNode.next_node;
   }
  curentNode.next_node = node;
  return this.head;
    }
  }
    get(index) {
   // your code here
  let i=0 ;
  let currentNode = this.head;
  while (currentNode) {
   if(i === index){
  return currentNode.value;
    }
  currentNode = currentNode.next_node;
   i++;
  }
  return null
    }
  }
const list = new LinkedList();
list.add(3);
list.add(5);
console.log(list.get(1));
// => 5
module.exports = LinkedList;


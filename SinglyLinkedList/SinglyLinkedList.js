class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  traverse() {
    var current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    var oldHead = this.head;
    var newHead = oldHead.next;
    this.head = newHead;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
    return oldHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return this;
    }
    newHead.next = this.head;
    this.head = newHead;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    var current = this.head;
    let count = 0;
    for (let i = 0; i <= this.length; i++) {
      if (count == index) {
        return current;
      }
      current = current.next;
      count++;
    }
  }
  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index == 0) {
      return !!this.unshift(value);
    } else if (index == this.length) {
      return !!this.push(value);
    } else {
      var insertNode = new Node(value);
      let prevNode = this.get(index - 1);
      let temp = prevNode.next;
      prevNode.next = insertNode;
      insertNode.next = temp;
      this.length++;
      return true;
    }
  }
  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index == 0) {
      return !!this.shift();
    } else if (index == this.length) {
      return !!this.push();
    } else {
      let prevNode = this.get(index - 1);
      let removedNode = prevNode.next;
      prevNode.next = removedNode.next;
      this.length--;
      return true;
    }
  }

  print() {
    let arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  middle() {
    let middleLength = 0;
    if (this.length % 2 == 0) {
      middleLength = this.length / 2;
    } else {
      middleLength = parseInt(this.length / 2);
    }
    return this.get(middleLength);
  }
}

var list = new SinglyLinkedList();
list.push("Hai");
list.push("How");
list.push("Are");
list.push("You");

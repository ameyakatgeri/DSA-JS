class Node {
    constructor(data, next = null, prev = null) {
        this.data = data
        this.next = data
        this.prev = data
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null // tail, because in dll it's possible to traverse back as well
    }
}


// insert at start/beginning in dll(doubly linked list)
DoublyLinkedList.prototype.insertAtBeginning = function(data) {
    const newNode = new Node(data, this.head, null)

    if (this.head !== null) {
        this.head.prev = newNode
        return
    }
    this.head = newNode

    if (this.tail === null) {
        this.tail = newNode
    }
}

// insert at end in dll
DoublyLinkedList.prototype.insertAtEnd() = function(data) {
    const newNode = new Node(data, null, this.tail)

    if (tail !== null) {
        this.tail.next = newNode
    }

    this.tail = newNode

    if (head === null) {
        this.head = newNode
    }
}

// insert after a given node in dll
DoublyLinkedList.prototype.insertAfterGivenNode = function(prevNode, data) {
    if (prevNode === null) {
        console.log("Invalid prev node");
    }
    const newNode = new Node(data, prevNode.next, prevNode)

    if (prevNode.next !== null) {
        prevNode.next.prev = newNode
    }
    prevNode.next = newNode

    // tail
    if (prevNode.next === null) {
        this.tail = newNode
    }
}

// delete first node
DoublyLinkedList.prototype.deleteFirstNode() = function() {
    if (!this.head) {
        console.log("List is already empty");
        return
    }

    if (this.head === this.tail) {
        this.head = this.tail = null
    } else {
        this.head = this.head.next
        this.head.prev = null
    }
}

// delete last node
DoublyLinkedList.prototype.deleteLastNode() = function() {
    if (!this.tail) {
        console.log("List is already empty");
        return
    }

    if (this.tail === this.head) {
        this.tail = this.head = null
    } else {
        this.tail = this.tail.prev
        this.tail.prev = null
    }
}

// reversing a doubly linked list
DoublyLinkedList.prototype.reverseDLL() = function() {
    let current = this.head
    let temp = null

    while (current) {
        // swapping prev and next for the current node
        temp = current.prev
        current.prev = current.next
        current.next = temp

        // move to what was previously the next node (which is now prev due to the swap)
        current = current.prev
    }

    if (temp !== null) {
        this.tail = this.head
        this.head = temp.prev
    }
}
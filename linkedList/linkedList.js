class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
}

// insert at the beginning
LinkedList.prototype.insertAtBeginning = function(data) {
    const newNode = new Node(data)
    this.head = newNode
}


// insert at the end
LinkedList.prototype.insertAtEnd = function(data) {
    const newNode = new Node(data)
    if(!this.head) {
        this.head = newNode
        return
    }

    let last = this.head
    while (last.next) {
        last = last.next
    }

    last.next = newNode
}

// insert at given node
LinkedList.prototype.insertAfter = function(prevNode, data) {
    if (!prevNode) {
        console.log("The given prevNode can't be null");
        return
    }

    const newNode = new Node(data, prevNode.next)
    prevNode.next = newNode
}

// delete the first node
LinkedList.prototype.deleteFirstNode = function() {
    if (!this.head) {
        console.log("No head present");
    }
    this.head = this.head.next
}

// delete the last node (second last node.next -> null)
LinkedList.prototype.deleteLastNode = function() {
    if (!this.head) {
        console.log("Nothing to delete as head is not present/null (Linked List doesn't exist)");
        return
    }

    if (!this.head.next) {
        this.head = null // if there is only one node
        return
    }

    let secondLast = this.head
    while (secondLast.next.next) {
        secondLast = secondLast.next
    }

    secondLast.next = null

}

// delete node with given key
LinkedList.prototype.deleteByKey() = function(key) {

    // if list is empty
    if (!this.head) {
        console.log("List is empty, can't delete");
        return
    }

    // data/key found at head
    if (this.head.data === key) {
        this.head = this.head.next
        return
    }

    let current = this.head
    while (current.next !== null) {
        if (current.next.data === key) {
            current.next = current.next.next
            return
        }
        current = current.next
    }

    console.log("No node found with the given key : ", key);

}

// search operation
LinkedList.prototype.search = function(key) {
    let current = this.head
    while (current) {
        if (current.data === key) {
            return true
        }
        current = current.next
    }

    return false
}

// traverse a linked list/traversal
LinkedList.prototype.printList = function() {
    if (!this.head) {
        console.log("The list is empty");
        return
    }

    let current = this.head

    let listValues = []
    while (current) {
        listValues.push(current.data) 
        current = current.next // move to the next node
    }
    console.log(listValues.join(" -> "));
}

// challenging : reversing a linked list
LinkedList.prototype.reverse() = function() {
    let current = this.head
    let prev = null
    let next = null

    while (current) {
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    this.head = prev
}
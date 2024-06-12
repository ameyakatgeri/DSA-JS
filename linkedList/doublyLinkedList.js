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
        this.tail = null
    }
}
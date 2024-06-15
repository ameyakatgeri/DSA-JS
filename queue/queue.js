class Queue{
    constructor() {
        this.queue = []
    }

    enqueue(data) {
        this.queue.push(data)
    }

    dequeue() {   // remove item from start/front
        if (this.isEmpty()) {
            return "Queue is empty"
        }
        return this.queue.shift()
    }

    isEmpty() {
        return this.queue.length === 0
    }

    peek() {
        if (this.isEmpty()) {   // first element
            return "Queue is empty"
        }
        return this.queue[0]
    }

    size() {
        return this.queue.length
    }

    clear() {
        this.queue = []
    }

    printQueue() {
        let str = ""
        for(let i = 0; i < this.queue.length; i++) {
            str += this.queue[i] + "\n"
        }

        return str
    }

}

// usage

let myQueue = new Queue()
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.enqueue(5)
myQueue.enqueue(6)

myQueue.dequeue()

myQueue.isEmpty()

myQueue.size()

console.log(myQueue.printQueue());
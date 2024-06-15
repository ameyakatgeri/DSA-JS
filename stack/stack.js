class Stack{
    constructor() {
        this.stack = []
    }

    
    push(data) {
        this.stack.push(data)
    }

    pop(data) {

        if (this.stack.length === 0) {   // this.isEmpty()
            console.log("Stack is empty");
        }

        this.stack.pop(data)
    }

    peak() {    // value at top/peak
        return this.stack[this.stack.length - 1]
    }

    isEmpty() {
        return this.stack.length === 0
    }

    size() {
        return this.stack.length
    }

    clear() {
        this.stack = []
    }

    contains(element) {
        return this.stack.includes(element)
    }

    reverse() {
        this.stack.reverse()
    }

    printStack() {
        let str = ""
        for(let i = 0; i < this.stack.length; i++) {
            str += this.stack[i] + "\n"
            return str    // best practice is to not log it, just return it
        }
    }

}

// usage

let myStack = new Stack()
myStack.push(3)
myStack.push(5)
myStack.push(6)
myStack.pop()

console.log(myStack.printStack());
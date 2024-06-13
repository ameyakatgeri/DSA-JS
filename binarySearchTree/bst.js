class BSTNode {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    // convert given key to node and insert at root if root is empty
    insert(key) {
        const newNode = new BSTNode(key)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
        
    }

    // inserting the converted node to the child(left or right) of the root node as the root node is present
    insertNode(node, newNode) {  // node -> root node
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode // only if left is empty
            } else { // check again if the converted node/key(newNode) is less than the now root node(node.left)
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

}
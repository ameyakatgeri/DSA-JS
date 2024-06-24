// class Node {
//     constructor(key, left = null, right = null) {
//         this.key = key
//         this.left = left
//         this.right = right
//     }
// }

const breadthFirstSearch = (root) => {
    if (root === null) {
        return // return an empty array or a message
    }

    const values = []
    const queue = []

    while (queue.length > 0) {
        const node = queue.shift()    // point of optimization
        values.push(node.key)

        if (node.left !== null) {
            queue.push(node.left)
        }
        if (node.right !== null) {
            queue.push(node.right)
        }
    }

    return values

}
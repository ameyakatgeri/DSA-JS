// class Node {
//     constructor(key) {
//         this.key = key
//         this.left = null
//         this.right = null
//     }
// }

// recursive approach for recursive depth first traversal
let recursiveDepthFirstTraversal = (root) => {
    if (root === null) {
        return []       // return an empty array/message
    }

    let leftValues = recursiveDepthFirstTraversal(root.left)
    let rightValues = recursiveDepthFirstTraversal(root.right)

    // one way of returning values
    return [root.key, leftValues, rightValues] 
    // output of above line : [a, [b, c, d], [e, f, g]]

    // another way of returning the values
    // return [root.key, ...leftValues, ...rightValues]
    // output of above line : [a, b, c, d, e, f, g]
}


// iterative approach for depth first traversal
let iterativeDepthFirstTraversal = (root) => {
    if (root === null) {
        return []// return an empty array or a message
    }

    const values = []
    const stack = [ root ]

    while (stack.length > 0) {
        const node = stack.pop()
        values.push(node.key)

        if (node.right !== null) {
            stack.push(node.right)
        }

        if (node.left !== null) {
            stack.push(node.left)
        }
    }

    return values

}
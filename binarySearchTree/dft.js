// class Node {
//     constructor(key) {
//         this.key = key
//         this.left = null
//         this.right = null
//     }
// }

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
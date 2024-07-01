// iterative approach of traversing the graph in BFS manner
function iterativeBFT(graph, start) {
    const queue = [start]
    const visited = new Set()

    while (queue.length > 0) {
        const node = queue.shift()
        for (const neighbour of graph[start]) {
            if (!visited.has(neighbour)) {
                visited.add(neighbour)
                queue.push(neighbour)
            }
        }
    }
}
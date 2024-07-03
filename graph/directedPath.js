function hasPathDFS(graph, start, dest) {
    const stack = [start]
    const visited = new Set()

    while (stack.length > 0) {
        const node = stack.pop()

        if (node === dest) {
            return true
        }

        if (!visited.has(node)) {
            visited.add(node)

            for (const neighbour of graph[node]) {
                stack.push(neighbour)
            }
        }
    }
    return false
}
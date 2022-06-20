const graph = {
        a: ['b', 'c'],
        b: ['d'],
        c: ['e'],
        d: ['f'],
        e: [],
        f: [],
}


const breadthFirstSearch = (graph, start) => {
	let que = [start]

	while(que.length){
		let current = que.shift()
		console.log(currrent)
		for(let neighbor of current){
			que.push(neighbor)
		}
	}

}

breadthFirstSearch(graph, 'a')

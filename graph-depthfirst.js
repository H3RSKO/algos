const graph = {
	a: ['b', 'c'],
	b: ['d'],
	c: ['e'],
	d: ['f'],
	e: [],
	f: [],
}

const depthFirstPrint = (graph, source) => {
//	const stack = [source]
//		
//	while(stack.length){
//		let current = stack.pop()			
//
//		for(let neighbor of graph[current]){
//			stack.push(neighbor)
//		}
//		
//		console.log(current)
//	}
//

// recursive example
	console.log(source)
	graph[source].forEach(x => {
		depthFirstPrint(graph, x)
	})
	
}


depthFirstPrint(graph, 'a')

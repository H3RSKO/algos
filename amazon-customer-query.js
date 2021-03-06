// By Amazon

// As a customer enters a query, return the first three results from the repository
// that match that query if the query is longer than 2 letters.
// Should return an array of all the answers returned as they typed their query

// 0(mn)

function searchSuggestions(repository, customerQuery) {
        let ans = []
        let filteredRepo = repository.map(word => word = word.toLowerCase()).sort() //nlogn
        let filteredQuery = customerQuery.toLowerCase() //m
        if (filteredQuery.length < 2) return []

        let inner = (filteredQuery, count) => {
            let query = filteredQuery.slice(0, count) //1
            if (ans === []) ans = filteredRepo.filter(word => word.includes(query)).slice(0,3) //n
            else {
                ans[ans.length] = filteredRepo.filter(word => word.includes(query)).slice(0, 3) //n
            }
        }
        let i = 1
        while (i < filteredQuery.length) { //m
            inner(filteredQuery, ++i) //n
        }
        return ans
}

const repo = ['mObiLe', 'mouse', 'moneypot', 'monItOr', 'mOusepad']

const query  = 'mouse'

console.log(searchSuggestions(repo, query))


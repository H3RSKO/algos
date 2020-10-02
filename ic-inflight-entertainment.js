// Given a flight time of x, see if 2 movies form movieArray will equal the exact flight time.

const flightTime = 240 // minutes
const movieTimes = [100, 125, 90, 85, 115] // true
// const movieTimes = [100, 125, 90, 85, 110] // false

// ans 1
// time complexity: O(n log n)
// space complexity: (1)
const flightMovieChecker = (flightTime, movies) => {
  let ans = false
  let inner = (flightTime, movies, counter = 0) => {
    while(counter < movies.length) {
      for (let i = counter + 1; i < movies.length; i++) {
        if (movies[i] + movies[counter] === flightTime) {ans = true;
        break}
      }
      counter++
  }
}
  inner(flightTime, movies)
  return ans
}

console.log(flightMovieChecker(flightTime, movieTimes))

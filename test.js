const factorial = (n) => {
  if (n < 0) {
    console.log('n < 0 ', n)
    return -1
  }
  else if (n === 0) {
    console.log ('n = 0 ', n)
    return 1
  }
  else {
    console.log('factorial part: n is ', n)
    return n * factorial(n - 1)
  }
}

console.log(factorial(5))

// Given a total amount, how many different variations of a select group of coins can we use to reach the total?
// 0(nn)

function changePossibilities(total, denominations, counter = 0)
{
  // Calculate the number of ways to make change
  // let sortedDenominations = denominations.sort((a,b) => a-b)
  if (total === 0) return 1
  if (total < 0) return 0
  if (counter === denominations.length) return 0


  const currentCoin = denominations[counter];

  let ans = 0;

  while (total >= 0) {
    ans += changePossibilities(total, denominations, counter + 1);
    total -= currentCoin;
  }
  return ans;
}

const coins = [1, 2, 3]

console.log(changePossibilities(5, coins))

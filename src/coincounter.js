export class Counter {
  countRecursive(amount, i = 0, arr = []) {
    const values = [.25, .10, .05, .01];
    if (isNaN(amount) || amount <= 0) {
      return "not a valid entry"
    }
    if (i > 3) {
      return arr;
    }
    // if (amount == 0) {
    //   return 0

    else {
      arr[i] = Math.floor(amount / values[i]);
      const remainder = amount %= values[i];
      return this.countRecursive(remainder, i + 1, arr)
      // return arr;
    }

  }
}

/*

 function countRecursive(totalCost, numCoins = [], counter = 0) {
  const coinValues = [100, 25, 10, 5, 1];
  if(counter >= 5) {
    return numCoins;
  } else {
    numCoins[counter] = Math.floor(totalCost/coinValues[counter]);
    const totalChange = totalCost % coinValues[counter];
    return countRecursive(totalChange, numCoins, counter + 1);
  }
}
*/


//   countRecursive(amount, i = 0, arr = []) {
//     const values = [.25, .10, .05, .01];
//     if (amount > 0) {
//       const count = amount / values[i]
//       const newAmount = amount %= values[i]
//       const newArr = arr.push(count)
//       return this.countRecursive(newAmount, i, NewArr)
//     } else {
//       return this.countRecursive(amount, (i += 1), arr)
//     }
//     const totalChange = arr;
//     return totalChange;
//   }
// }







// const newAmount = amount * 100
// if (newAmount > 0) {
//   const count = newAmount / values[i]
//   newAmount %= values[i]
//   arr.push(count)
// }
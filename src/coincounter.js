export class Counter {
  countRecursive(amount, i = 0, arr = []) {
    const values = [.25, .10, .05, .01];
    if (isNaN(amount) || amount <= 0) {
      return "not a valid entry"
    }
    if (i > 3) {
      return arr;
    }
    else {
      arr[i] = Math.floor(amount / values[i]);
      const remainder = amount %= values[i];
      return this.countRecursive(remainder, i + 1, arr)
    }
  }

  countClosure(coinAmount) {
    return (totalAmount) => {
      return Math.floor(totalAmount / coinAmount);
    }
  }
}

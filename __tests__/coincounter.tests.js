import { Counter } from './../src/coincounter.js';

describe('coin counter', () => {

  test("should correctly return the amount of coins that make up a given amount", () => {
    const amount = 0;
    const result = new Counter()

    expect(result.countRecursive(amount)).toEqual(0);
  });
});



function add(a, b) {
  return a + b;
}

describe('ValueService', () => {
  it('add function should return the correct sum of two numbers', () => {
    expect(add(2, 3)).toEqual(5);
  });
});

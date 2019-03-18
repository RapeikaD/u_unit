describe('calculator.js', function() {
  it('should add number to total', function() {
    const calculator = new Calculator();
    calculator.add(5);

    expect(calculator.total).toBe(5);
  });

  it('should subtract number from total', function() {
    const calculator = new Calculator();
    calculator.total = 50;
    calculator.subtract(5);

    expect(calculator.total).toBe(45);
  });

  it('should multiply number by number', function() {
    const calculator = new Calculator();
    calculator.total = 50;
    calculator.multiply(5);

    expect(calculator.total).toBe(250);
  });

  it('should divide number by number', function() {
    const calculator = new Calculator();
    calculator.total = 50;
    calculator.divide(50);

    expect(calculator.total).toBe(1);
  });

  it('should not divide number by zero', function() {
    const calculator = new Calculator();
    calculator.total = 50;

    expect(function() {calculator.divide(0)}).toThrow();
    expect(function() {calculator.divide(0)}).toThrowError(Error);
    expect(function() {calculator.divide(0)}).toThrowError(Error, 'Cannot divide by 0');
  });

  it('can overwrite total', function() {
    const calculator = new Calculator();
    calculator.total = null;

    expect(calculator.total).toBeNull();
  });

  // Undefined (== primitive) - a value that has been just declared (not an object and doesn't have methods)
  it('has common operations', function() {
    const calculator = new Calculator();

    expect(calculator.add).toBeDefined();
  })

  it('does not handle NaN', function() {
    const calculator = new Calculator();
    calculator.total = 50;
    calculator.multiply('a');

    expect(calculator.total).toBeNaN();
  });

// toMatch() - applicable for strings and regex
  it('returns total as a number', function() {
    const calculator = new Calculator();
    calculator.total = 50;
    calculator.add(4);

    expect(calculator.total).toMatch(/-?\d+/);
    expect(typeof(calculator.total)).toMatch('number');
  });

// if the result is not obvious
  it('attempt to try asymmetric matchers', function() {
    const calculator = new Calculator();
    calculator.total = 600 + Math.random()*50;
    calculator.add(4);

    expect(calculator.total).toEqual(jasmine.anything());
    //expect(null).not.toEqual(jasmine.anything());
    //expect(undefined).not.toEqual(jasmine.anything());
  });

});

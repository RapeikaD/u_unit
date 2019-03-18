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

});

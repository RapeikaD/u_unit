function Calculator() {
  this.total = null;
}

Calculator.prototype.add = function (number) {
  return this.total += number;
};
Calculator.prototype.subtract = function (number) {
  return this.total -= number;
};
Calculator.prototype.multiply = function (number) {
  return this.total *= number;
};
Calculator.prototype.divide = function (number) {
  if (number === 0) {
    throw new Error('Cannot divide by 0');
  }
  return this.total /= number;
};

Object.defineProperty(Calculator.prototype, 'version', {
  get: function (
  ) {return '0.1'},
  enumerable: true,
  configurable: true
});
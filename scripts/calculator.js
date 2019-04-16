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
  get: function () {
    return fetch('https://gist.githubusercontent.com/s34rching/ee34eadbf422eb04641cbeb01aa94d38/raw/cd0085def6a51545353e6e3cc5ab955eaa28482d/gistfile1.json')
    .then(function(content) {
      return content.json()
    })
        .then(function(json) {
          return json.version;
        })
  },

  enumerable: true,
  configurable: true
});
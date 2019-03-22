describe('main.js', function() {
  describe('calculate()', function() {

    it('calls add()', function() {
      spyOn(Calculator.prototype, 'add');

      calculate('5+5');

      expect(Calculator.prototype.add).toHaveBeenCalled();
      expect(Calculator.prototype.add).toHaveBeenCalledWith(5);
      expect(Calculator.prototype.add).toHaveBeenCalledTimes(2);
    });

    it('calls subtract()', function() {
      spyOn(Calculator.prototype, 'subtract');

      calculate('5-5');

      expect(Calculator.prototype.subtract).toHaveBeenCalled();
      expect(Calculator.prototype.subtract).toHaveBeenCalledWith(5);
      expect(Calculator.prototype.subtract).not.toHaveBeenCalledTimes(2);
    });

    xit('calls multiply()', function() {

    });

    xit('calls divide()', function() {

    });

    it('validates operation when 1st number invalid', function() {
      spyOn(window, 'updateResult');

      calculate('a-4');

      expect(window.updateResult).toHaveBeenCalledWith('Operation is not recognized');
    });

    it('validates operation when 2nd number invalid', function() {
      spyOn(window, 'updateResult');

      calculate('5-a');

      expect(window.updateResult).toHaveBeenCalledWith('Operation is not recognized');
    });

    it('validates operation when operator is not recognized', function() {
      spyOn(window, 'updateResult');

      calculate('5?4');

      expect(window.updateResult).toHaveBeenCalledWith('Operation is not recognized');
    });

    xit('calls updateResult()', function() {

    });

  });

  describe('updateResult()', function() {
    let element;

    beforeAll(function() {
      element = document.createElement('div');
      element.setAttribute('id', 'result');
      document.body.appendChild(element);
    });

    afterAll(function() {
      const element = document.getElementById('result');

      document.body.removeChild(element);
    });

    it('adds result to the DOM element', function() {
      updateResult('5');
      expect(element.innerText).toBe('5');
    });
  });
});

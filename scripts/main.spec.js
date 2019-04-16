describe('main.js', function() {
  describe('calculate()', function() {

    it('calls add()', function() {
      spyOn(Calculator.prototype, 'add');

      calculate('5+5');

      expect(Calculator.prototype.add).toHaveBeenCalled();
      expect(Calculator.prototype.add).toHaveBeenCalledTimes(2);
      expect(Calculator.prototype.add).toHaveBeenCalledWith(5);
    });

    it('calls subtract()', function() {
      spyOn(Calculator.prototype, 'subtract');

      calculate('10-2');

      expect(Calculator.prototype.subtract).toHaveBeenCalled();
      expect(Calculator.prototype.subtract).not.toHaveBeenCalledTimes(2);
      expect(Calculator.prototype.subtract).toHaveBeenCalledWith(2);
    });

    it('calls multiply()', function() {
      spyOn(Calculator.prototype, 'multiply');

      calculate('8*8');

      expect(Calculator.prototype.multiply).toHaveBeenCalled();
      expect(Calculator.prototype.multiply).not.toHaveBeenCalledTimes(2);
      expect(Calculator.prototype.multiply).toHaveBeenCalledWith(8);
    });

    it('calls divide()', function() {
      spyOn(Calculator.prototype, 'divide');

      calculate('8/8');

      expect(Calculator.prototype.divide).toHaveBeenCalled();
      expect(Calculator.prototype.divide).toHaveBeenCalledTimes(1);
      expect(Calculator.prototype.divide).toHaveBeenCalledWith(8);
    });

    it('validates operation when 1st number invalid', function() {
      spyOn(window, 'updateResult');

      calculate('a-5');

      expect(window.updateResult).toHaveBeenCalledWith('Operation is not recognized');
    });

    it('validates operation when 2nd number invalid', function() {
      spyOn(window, 'updateResult');

      calculate('5-v');

      expect(window.updateResult).toHaveBeenCalledWith('Operation is not recognized');
    });

    it('validates operation when operator is not recognized', function() {
      spyOn(window, 'updateResult');

      calculate('9@4');

      expect(window.updateResult).toHaveBeenCalledWith('Operation is not recognized');
    });

    it('calls updateResult()', function() {
      spyOn(window, 'updateResult');

      calculate('9*4');

      expect(window.updateResult).toHaveBeenCalledWith(36);
    });

    it('calls updateResult() using .callThrough()', function() {
      spyOn(window, 'updateResult');
      spyOn(Calculator.prototype, 'multiply').and.callThrough();

      calculate('9*4');

      expect(window.updateResult).toHaveBeenCalledWith(36);
    });


    // applicable to situations where you want you own function to be called
    it('calls updateResult() using .callFake()', function() {
      spyOn(window, 'updateResult');
      spyOn(Calculator.prototype, 'multiply').and.callFake(function () {
        return 36
      });

      calculate('9*4');

      expect(window.updateResult).toHaveBeenCalledWith(36);
    });

    // applicable to situations where you want you to test specific behavior
    it('calls updateResult() using .returnValue()', function() {
      spyOn(window, 'updateResult');
      spyOn(Calculator.prototype, 'multiply').and.returnValue('value');

      calculate('9*4');

      expect(window.updateResult).toHaveBeenCalledWith('value');
    });

    // applicable to situations where you want you to perform multiple calls
    it('calls updateResult() using .returnValues()', function() {
      spyOn(window, 'updateResult');
      spyOn(Calculator.prototype, 'add').and.returnValues(null, 'something');

      calculate('9+4');

      expect(window.updateResult).toHaveBeenCalledWith('something');
    });

    it('does not handle errors', function() {
      spyOn(Calculator.prototype, 'add').and.throwError('some error');

      expect(function() {calculate('9+4')}).toThrowError('some error');
    });

  });

  describe('showVersion()', function() {
    it('should show current version', function() {
      spyOn(document, 'getElementById').and.returnValue({
        innerText: null
      });

      let spy = spyOnProperty(Calculator.prototype, 'version', 'get').and.returnValue(
          Promise.resolve(
              new Response('{"version":"0.1"}')
          )
      );
      showVersion();

      expect(spy).toHaveBeenCalled();
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

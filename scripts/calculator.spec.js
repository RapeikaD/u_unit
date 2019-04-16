describe('calculator.js', function() {
  describe('Calculator', function() {
    let calculator;

    beforeEach(function() {
      calculator = new Calculator();
    });
    
    it('can overwrite total', function() {

      expect(calculator.total).toBeNull();
    });

    it('has common operations', function() {

      expect(calculator.add).toBeDefined();
    });

    it('attempt to try asymmetric matchers', function() {
      calculator.total = 600 + Math.random()*50;
      calculator.add(4);

      expect(calculator.total).toEqual(jasmine.anything());
      //expect(null).not.toEqual(jasmine.anything());
      //expect(undefined).not.toEqual(jasmine.anything());
    });

    describe('add()', function() {
      it('should add number to total', function() {
        calculator.add(5);

        expect(calculator.total).toBe(5);
      });

      it('returns total as a number', function() {
        calculator.total = 50;
        calculator.add(4);

        expect(calculator.total).toMatch(/-?\d+/);
        expect(typeof(calculator.total)).toMatch('number');
      });
    });

    describe('subtract()', function() {
      it('should subtract number from total', function() {
        calculator.total = 50;
        calculator.subtract(5);

        expect(calculator.total).toBe(45);
      });
    });

    describe('multiply()', function() {
      it('should multiply number by number', function() {
        calculator.total = 50;
        calculator.multiply(5);

        expect(calculator.total).toBe(250);
      });

      it('does not handle NaN', function() {
        calculator.total = 50;
        calculator.multiply('a');

        expect(calculator.total).toBeNaN();
      });
    });

    describe('divide()', function() {
      it('should divide number by number', function() {
        calculator.total = 50;
        calculator.divide(50);

        expect(calculator.total).toBe(1);
      });

      it('should not divide number by zero', function() {
        calculator.total = 50;

        expect(function() {calculator.divide(0)}).toThrow();
        expect(function() {calculator.divide(0)}).toThrowError(Error);
        expect(function() {calculator.divide(0)}).toThrowError(Error, 'Cannot divide by 0');
      });
    });

    describe('get "version"', function() {
      it('should fetch version', function(done) {
        spyOn(window, 'fetch').and.returnValue(Promise.resolve(
           new Response('{ "version" :"0.1" }')
        ));

           calculator.version
               .then(function(version) {
                 expect(version).toBe('0.1');
                 done()
               })
      });
    });
  });
});

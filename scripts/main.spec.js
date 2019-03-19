describe('main.js', function() {
  describe('calculate()', function() {
    xit('calls add()', function() {

    });

    xit('calls subtract()', function() {

    });

    xit('calls multiply()', function() {

    });

    xit('calls divide()', function() {

    });

    xit('validates operation', function() {

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

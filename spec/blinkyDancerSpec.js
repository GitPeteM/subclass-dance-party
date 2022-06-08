describe('vibinCat', function() {

  var vibinCat, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    vibinCat = new makeVibinCat(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(vibinCat.$node).to.be.an.instanceof(jQuery);
  });

  // it('should have a step function that makes its node blink', function() {
  //   sinon.spy(vibinCat.$node, 'toggle');
  //   vibinCat.step();
  //   expect(vibinCat.$node.toggle.called).to.be.true;
  // });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(vibinCat, 'step');
      expect(vibinCat.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(vibinCat.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(vibinCat.step.callCount).to.be.equal(2);
    });
  });
});

var twoStepDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);


};


twoStepDancer.prototype = Object.create(makeDancer.prototype);

twoStepDancer.prototype.constructor = twoStepDancer;

twoStepDancer.prototype.step = function () {

  makeDancer.prototype.step.call(this);

  this.$node.toggle();
};
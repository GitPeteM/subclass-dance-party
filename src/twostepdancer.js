var twoStepDancer = function(top, left, timeBetweenSteps) {

  // this.id = this.id += 1 || 0;
  this.$node = $(`<span class="dancer"> <img class="carlton" src="https://thumbs.gfycat.com/MeanPleasedAsianlion-max-1mb.gif"></img></span>`);
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = blinkyDancer.step;
  //


};


twoStepDancer.prototype = Object.create(makeDancer.prototype);

twoStepDancer.prototype.constructor = twoStepDancer;

twoStepDancer.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step
  //this.oldStep();

  makeDancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();

};
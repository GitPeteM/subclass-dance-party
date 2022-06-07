var mrBean = function(top, left, timeBetweenSteps) {

  this.$node = $(`<img class="mrBean" src="https://thumbs.gfycat.com/GloomyInsidiousChinchilla-max-1mb.gif">
  </img>`);
  this.x = 1;

  //this.$node = $(`<img class="carlton" src="https://thumbs.gfycat.com/MeanPleasedAsianlion-max-1mb.gif"></img>`);
  makeDancer.call(this, top, left, timeBetweenSteps);

};


mrBean.prototype = Object.create(makeDancer.prototype);

mrBean.prototype.constructor = mrBean;

mrBean.prototype.step = function () {

  makeDancer.prototype.step.call(this);
  this.x *= -1;
  this.$node.css({transform: 'scaleX(' + this.x + ')'});

  //this.$node.toggle();
};
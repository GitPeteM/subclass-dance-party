var mrBean = function(top, left, timeBetweenSteps) {

  this.$node = $(`<img class="mrBean" id="0" src="https://thumbs.gfycat.com/GloomyInsidiousChinchilla-max-1mb.gif">
  </img>`);
  this.$node.css({'height': '480px'});
  this.scale = Math.abs(((($("body").height() * 0.36737692872887584) - top )) * 0.0033333333333333335) + .5;
  this.top = top;
  this.left = left;
  makeDancer.prototype.pickUp(this);
  //this.$node = $(`<img class="carlton" src="https://thumbs.gfycat.com/MeanPleasedAsianlion-max-1mb.gif"></img>`);
  makeDancer.call(this, top, left, timeBetweenSteps);


};


mrBean.prototype = Object.create(makeDancer.prototype);

mrBean.prototype.constructor = mrBean;

mrBean.prototype.step = function () {

  makeDancer.prototype.step.call(this);
  //this.x *= -1;
  //this.$node.css({transform: `scaleX(${this.x})'`});

  this.scale *= -1;
  if (this.animate) {
    this.$node.css({'transform': 'matrix(' + this.scale + ', 0, 0,' + Math.abs(this.scale) + ', 0, 0)'});
    console.log(this.scale, this.x);
  }

  //this.$node.css({transform: 'scaleX(' + this.x + ')'});
  //this.$node.toggle();
};
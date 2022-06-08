var makeVibinCat = function(top, left, timeBetweenSteps) {

  this.$node = $(`<img class="cat" src="https://media.giphy.com/media/JVglf7QjxaZZM2tjfB/giphy.gif">
  </img>`);
  this.left = left;
  this.scale = 1;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.goRight = true;

};


makeVibinCat.prototype = Object.create(makeDancer.prototype);

makeVibinCat.prototype.constructor = makeVibinCat;

makeVibinCat.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step
  //this.oldStep();
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
  //$("body").width()
  var bodyWidth = $("body").width();

  // var goRight = true;
  // console.log(this.goRight);
  if (this.left <= bodyWidth && this.goRight) {
    if (this.left > bodyWidth - 100) {
      this.goRight = false;
      this.$node.css({'transform': 'scaleX(-1)'});
    }
    // console.log(this.left, bodyWidth);

    this.$node.animate({ 'left': this.left += 50}, 'slow');
  }
  if (this.left > 0 && !this.goRight) {
    if (this.left < 100) {
      this.goRight = true;
      this.$node.css({'transform': 'scaleX(1)'});
    }

    this.$node.animate({ 'left': this.left -= 50}, 'slow');

  }

};
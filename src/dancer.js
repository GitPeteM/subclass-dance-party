// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  // var dancer = {};

  // use jQuery to create an HTML <span> tag
  this.$node = this.$node || $('<span class="dancer"></span>');

  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.animate = true;
  this.scale = this.scale || Math.abs(((($("body").height() * 0.36737692872887584) - this.top )) * 0.0033333333333333335);
  this.$node.css({'transform': 'scale(' + this.scale + ')'});
  this.clicked = false;

  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);


};


makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};

makeDancer.prototype.getPosition = function () {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };

  return styleSettings;
};


makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setScale = function(top) {
  var scale = Math.abs(((($("body").height() * 0.36737692872887584) - top )) * 0.0033333333333333335) + .5;
  this.$node.css({'transform': 'matrix(' + scale + ', 0, 0,' + scale + ', 0, 0)'});
};

makeDancer.prototype.pickUp = function(thiss) {
  var newStyle = {};
  thiss.$node.mousedown(function() {
    thiss.clicked = !thiss.clicked;

    console.log('clicked = ', thiss.clicked);
  });
  thiss.$node.mousemove(function(e) {
    if (thiss.clicked) {
      thiss.animate = false;
      thiss.$node.stop();
      thiss.scale = Math.abs(((($('body').height() * 0.36737692872887584) - parseFloat(thiss.$node.css('top')) )) * 0.0033333333333333335) + .5;
      thiss.value = (e.clientY - (50 / thiss.scale) * 2);
      // console.log('scale:', thiss.scale, 'value', thiss.value, 'this.clicked:', thiss.clicked);
      // console.log(($('body').height() * 0.36737692872887584 + '<=' + thiss.value + '<=' + $('body').height() * 0.5878030859662013));
      if (thiss.value >= $('body').height() * 0.36737692872887584 && thiss.value <= $('body').height() * 0.5878030859662013) {
        newStyle.top = thiss.value;
      }
      newStyle.left = e.clientX - 150 + 'px';
      newStyle.transform = 'scale(' + thiss.scale + ')';
      newStyle['z-index'] = parseInt(newStyle.top / 10);
      thiss.$node.css(newStyle);
      // console.log('cursorX:', e.clientX, 'cursorY:', e.clientY, 'itemTop:', parseFloat(thiss.$node.css('top')), 'SCALE:', thiss.$node.css('transform'), thiss.scale);
    } else {
      //console.log('FALSE');
      thiss.animate = true;
    }
  });
};

///var Dist = Math.sqrt((obj2[Top] - obj1[Top])**2 + (obj2[Left] - obj1[Left])**2)
$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var top = Math.floor(Math.random() * ($("body").height() * .58 - $("body").height() * 0.426 + 1)) + ($("body").height() * 0.426);
    var left = Math.floor(Math.random() * ($("body").width() * .9 - $("body").width() * 0 + 1)) + ($("body").width() * 0 + 1);

    var dancer = new dancerMakerFunction(top, left, Math.random() * 1000);
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  var leftOffset = 100;
  var topOffset = 500;
  var lastIndex = 0;
  $('.lineUp').on('click', function(event) {
    for (var i = lastIndex || 0; i < window.dancers.length; i++) {
      //debugger;
      if (leftOffset <= $("body").width() * .9) {
        window.dancers[i].setPosition(topOffset, leftOffset);
        leftOffset += 175;
      }
      if (leftOffset >= $("body").width() * .9) {

        //debugger;
        leftOffset = 50;

        if (topOffset <= 750) {
          //debugger
          topOffset += 50;
        }
      }
      lastIndex = i + 1;

    }
  });
});


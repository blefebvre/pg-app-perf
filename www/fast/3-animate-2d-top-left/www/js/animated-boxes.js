// Bouncing boxes
(function() {
  var boxes = document.getElementsByClassName('animatedBox');
  for (var i = 0; i < boxes.length; i++) {
    (function(box) {
      var isAnimationRunning = false;
      // Get the int value of how far left the box is
      var boxRect = box.getBoundingClientRect();
      var elementLeft = boxRect.left;
      var elementTop = boxRect.top;
      var boxWidth = box.offsetWidth;
      var boxHeight = box.offsetHeight;
      var xspeed = parseInt(box.dataset.xspeed);
      var yspeed = parseInt(box.dataset.yspeed);
      var bodyWidth = document.body.offsetWidth;
      var bodyHeight = document.body.offsetHeight;
      console.log('starting point: left: ' + elementLeft + ' top: ' + elementTop);
      // Handle clicks
      var clickHandler = function itemClicked(event) {
        // Stop propogating after 1st event is caught
        event.stopPropagation();
        if (isAnimationRunning) {
          // Cancel animation
          console.log('stopping. no further `frame` functions will be called.');
          isAnimationRunning = false;
        }
        else {
          // Animate element
          
          // Function to call each frame
          var frame = function() {
            // Check for x edges
            var rightEdge = elementLeft + boxWidth;
            if ((xspeed > 0 && rightEdge >= bodyWidth) ||
                (xspeed < 0 && elementLeft <= 0)) {
              // Flip direction
              xspeed = xspeed * -1;
            }
            
            // Check for y edges
            var bottomEdge = elementTop + boxHeight;
            if ((yspeed > 0 && bottomEdge >= bodyHeight) ||
                (yspeed < 0 && elementTop <= 0)) {
              // Flip direction
              yspeed = yspeed * -1;
            }

            elementLeft = elementLeft + xspeed;
            elementTop = elementTop + yspeed;
            box.style.left = elementLeft + 'px';
            box.style.top = elementTop + 'px';
            
            // Call function again next frame
            if (isAnimationRunning) {
              window.requestAnimationFrame(frame);
            }
          };
          
          isAnimationRunning = true;
          // Call `frame()` at the beginning of the next frame
          window.requestAnimationFrame(frame);
        }
      };
      // Register touch handler
      box.addEventListener('touchstart', clickHandler, false);
    })(boxes[i]);
  }
})();
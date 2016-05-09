// Bouncing boxes
(function() {
  var boxes = document.getElementsByClassName('animatedBox');
  for (var i = 0; i < boxes.length; i++) {
    (function(box) {
      var isAnimationRunning = false;
      // Get the int value of how far left the box is
      var distanceFromStartX = 0;
      var distanceFromStartY = 0;
      var boxRect = box.getBoundingClientRect();
      var elementLeft = boxRect.left;
      var originalLeft = elementLeft;
      var elementTop = boxRect.top;
      var originalTop = elementTop;
      var boxWidth = box.offsetWidth;
      var boxHeight = box.offsetHeight;
      var xspeed = parseInt(box.dataset.xspeed);
      var yspeed = parseInt(box.dataset.yspeed);
      var parentWidth = box.parentElement.offsetWidth;
      var parentHeight = box.parentElement.offsetHeight;
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
            var rightEdge = elementLeft + boxWidth;
            // Check for x edges
            if ((xspeed > 0 && rightEdge >= parentWidth) ||
                (xspeed < 0 && elementLeft <= 0)) {
              // Flip direction
              xspeed = xspeed * -1;
            }
            
            var bottomEdge = elementTop + boxHeight;
            // Check for y edges
            if ((yspeed > 0 && bottomEdge >= parentHeight) ||
                (yspeed < 0 && elementTop <= 0)) {
              // Flip direction
              yspeed = yspeed * -1;
            }

            // Move the box, using `transform`!
            distanceFromStartX = distanceFromStartX + xspeed;
            distanceFromStartY = distanceFromStartY + yspeed;
            elementLeft = originalLeft + distanceFromStartX;
            elementTop = originalTop + distanceFromStartY;
            box.style.transform = 'translate3d(' + distanceFromStartX + 'px, ' + distanceFromStartY + 'px, 0)';
            
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
// Bouncing boxes
(function() {
  var boxes = document.getElementsByClassName('animatedBox');
  for (var i = 0; i < boxes.length; i++) {
    (function(box) {
      var isAnimationRunning = false;
      var frameTimer = null;
      // Handle clicks
      var clickHandler = function itemClicked(event) {
        // Stop propogating after 1st event is caught
        event.stopPropagation();
        if (isAnimationRunning) {
          // Cancel animation
          console.log('stopping.');
          clearInterval(frameTimer);
          isAnimationRunning = false;
        }
        else {
          // Animate element
          var xspeed = parseInt(box.dataset.xspeed);
          var yspeed = parseInt(box.dataset.yspeed);
          // Get the int value of how far left the box is
          
          frameTimer = setInterval(function frame() {
            var boxRect = box.getBoundingClientRect();
            var bodyWidth = box.parentElement.offsetWidth;
            var bodyHeight = box.parentElement.offsetHeight;
            
            // Check x edges
            var leftEdge = parseInt(box.style.left.replace('px', ''));
            var rightEdge = leftEdge + box.offsetWidth;
            if ((xspeed > 0 && rightEdge >= bodyWidth) ||
                (xspeed < 0 && leftEdge <= 0)) {
              // Flip direction
              xspeed = xspeed * -1;
            }
            // Move the box horizontally
            leftEdge = leftEdge + xspeed;
            box.style.left = leftEdge + 'px';
            
            // Check y edges
            var topEdge = parseInt(box.style.top.replace('px', ''));
            var bottomEdge = topEdge + box.offsetHeight;
            if ((yspeed > 0 && bottomEdge >= bodyHeight) ||
                (yspeed < 0 && topEdge <= 0)) {
              // Flip direction
              yspeed = yspeed * -1;
            }
            
            // Move the box vertically
            topEdge = topEdge + yspeed;
            box.style.top = topEdge + 'px';

          }, 15); // Fire this interval every 10 millis
          isAnimationRunning = true;
        }
      };
      // Register mouse and touch handlers 
      //box.addEventListener('mousedown', clickHandler, false);
      box.addEventListener('touchstart', clickHandler, false);
    })(boxes[i]);
  }
})();
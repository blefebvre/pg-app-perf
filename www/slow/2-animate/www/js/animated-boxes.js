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
          var speed = parseInt(box.dataset.speed);
          // Get the int value of how far left the box is
          var elementLeft = parseInt(box.style.left.replace('px', ''));
          frameTimer = setInterval(function frame() {
            var rightEdge = elementLeft + box.offsetWidth;
            var bodyWidth = document.body.offsetWidth;
            if ((speed > 0 && rightEdge >= bodyWidth) ||
                (speed < 0 && elementLeft <= 0)) {
              // Flip direction
              speed = speed * -1;
              console.log('reversing!');
            }

            // Move the box
            elementLeft = elementLeft + speed
            box.style.left = elementLeft + 'px';

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
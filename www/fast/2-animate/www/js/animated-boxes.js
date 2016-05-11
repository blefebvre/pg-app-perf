// Animated boxes - put this script at the end of the body
(function() {
  var boxes = document.getElementsByClassName('animatedBox');
  for (var i = 0; i < boxes.length; i++) {
  	(function(box) {
    	var isAnimationRunning = false;
      // Get the int value of how far left the box is
      var distanceFromStartX = 0;
      var originalLeft = parseInt(box.style.left.replace('px', ''));
      var elementLeft = originalLeft;
      var speed = parseInt(box.dataset.speed);
      var boxWidth = box.offsetWidth;
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
          var bodyWidth = document.body.offsetWidth;
          var frame = function() {
            var rightEdge = elementLeft + boxWidth;
            if ((speed > 0 && rightEdge >= bodyWidth) ||
                (speed < 0 && elementLeft <= 0)) {
              // Flip direction
              speed = speed * -1;
            	console.log('reversing!');
            }

            // Move the box, using `transform`!
            distanceFromStartX = distanceFromStartX + speed;
            elementLeft = originalLeft + distanceFromStartX;
            box.style.transform = 'translateX(' + distanceFromStartX + 'px)';
            
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
      // Register mouse and touch handlers 
    	//box.addEventListener('mousedown', clickHandler, false);
    	//box.addEventListener('touchstart', clickHandler, false);
      box.addEventListener('click', clickHandler, false);
    })(boxes[i]);
  }
})();
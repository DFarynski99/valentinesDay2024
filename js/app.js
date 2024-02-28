document.addEventListener('DOMContentLoaded', function() {
    // Check if the openButton exists before attaching the event listener

  var openCounter = 0;
  var openButton = document.getElementById('openButton');
    if (openButton) {
      openButton.addEventListener('click', function() {
          openCounter++;


          if (openCounter % 2 === 0) {
            var letter = document.getElementById('letter');
            var letterTop = parseFloat(window.getComputedStyle(letter).top); // Convert to number
            letter.style.top = (letterTop + 30) + 'px'; // Subtract 20 and add 'px' back

            var openButtonText = document.getElementById('openButton')
            openButtonText.innerText = 'OPEN'


            setTimeout(function () { // Timeout to ensure the animation reset takes effect
              var triangle = document.getElementById('envelopeTop');
              letter.style.zIndex = "2";

              triangle.classList.toggle('flip');

            }, 1000);

          } else {
            var triangle = document.getElementById('envelopeTop');
            triangle.classList.toggle('flip');


            var openButtonText = document.getElementById('openButton')
            openButtonText.innerText = 'CLOSE';

            setTimeout(function () {
              var letter = document.getElementById('letter');
              var letterTop = parseFloat(window.getComputedStyle(letter).top); // Convert to number
              letter.style.top = (letterTop - 30) + 'px'; // Subtract 20 and add 'px' back
              letter.style.zIndex = "3";

            }, 400);


          }


          var heartOne = document.getElementById('heartOne');
          heartOne.style.display = 'block'; // Make the heart visible
          setTimeout(function () { // Timeout to ensure the animation reset takes effect
            heartOne.style.animation = 'floatUpwards1 8s ease-in forwards';
          }, 10);


          var heartTwo = document.getElementById('heartTwo');
          heartTwo.style.display = 'block'; // Make the heart visible
          setTimeout(function () { // Timeout to ensure the animation reset takes effect
            heartTwo.style.animation = 'floatUpwards1 8s ease-in forwards';
          }, 10);


          var heartThree = document.getElementById('heartThree');
          heartThree.style.display = 'block'; // Make the heart visible
          setTimeout(function () { // Timeout to ensure the animation reset takes effect
            heartThree.style.animation = 'floatUpwards1 8s ease-in forwards';
          }, 10);




        });
      };


    // Check if the resetButton exists before attaching the event listener
    var resetButton = document.getElementById('resetButton');
    if (resetButton) {
      resetButton.addEventListener('click', function() {
        window.location.reload();
      });
    }

  var envelope = document.getElementById('envelope');
  if (envelope) {
    envelope.addEventListener('click', function() {
      window.location.href = 'letter.html';
    });
  }

    // Check if the backLetter exists before attaching the event listener
    var backLetter = document.getElementById('backLetter');
    if (backLetter) {
      backLetter.addEventListener('click', function() {
        window.location.href = 'index.html';
      });
    }


  // Check if on the letter page to handle sessionStorage for the message
  var messageTextarea = document.getElementById('message');
  if (messageTextarea) {
    // Load the message from sessionStorage (if it exists) when the page loads
    var savedMessage = sessionStorage.getItem('savedMessage');
    if (savedMessage !== null) {
      messageTextarea.value = savedMessage;
    }

    // Save the message to sessionStorage whenever it changes
    messageTextarea.addEventListener('input', function() {
      sessionStorage.setItem('savedMessage', this.value);
    });
  }

  // If the user is navigating back to the index.html from the letter.html
  var backLetter = document.getElementById('backLetter');
  if (backLetter) {
    backLetter.addEventListener('click', function() {
      // No need to clear the message here since we want it to persist
      window.location.href = 'index.html';
    });
  }

  // If the user is navigating to the letter.html from the index.html
  var envelope = document.getElementById('envelope');
  if (envelope) {
    envelope.addEventListener('click', function() {
      window.location.href = 'letter.html';
    });
  }


});

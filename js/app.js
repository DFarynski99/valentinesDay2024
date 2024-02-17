
var openCounter = 0;
document.getElementById('openButton').addEventListener('click', function() {
  openCounter++;


  if (openCounter % 2 === 0){
    var letter = document.getElementById('letter');
    var letterTop = parseFloat(window.getComputedStyle(letter).top); // Convert to number
    letter.style.top = (letterTop + 30) + 'px'; // Subtract 20 and add 'px' back

    var openButtonText = document.getElementById('openButton')
    openButtonText.innerText = 'OPEN'


    setTimeout(function() { // Timeout to ensure the animation reset takes effect
      var triangle = document.getElementById('envelopeTop');
      letter.style.zIndex = "2";

      triangle.classList.toggle('flip');

    }, 1000);

  } else {
    var triangle = document.getElementById('envelopeTop');
    triangle.classList.toggle('flip');


    var openButtonText = document.getElementById('openButton')
    openButtonText.innerText = 'CLOSE';

    setTimeout(function() {
      var letter = document.getElementById('letter');
      var letterTop = parseFloat(window.getComputedStyle(letter).top); // Convert to number
      letter.style.top = (letterTop - 30) + 'px'; // Subtract 20 and add 'px' back
      letter.style.zIndex = "3";

    }, 400);


  }




  var heartOne = document.getElementById('heartOne');
  heartOne.style.display = 'block'; // Make the heart visible
  setTimeout(function() { // Timeout to ensure the animation reset takes effect
    heartOne.style.animation = 'floatUpwards1 8s ease-in forwards';
  }, 10);


  var heartTwo = document.getElementById('heartTwo');
  heartTwo.style.display = 'block'; // Make the heart visible
  setTimeout(function() { // Timeout to ensure the animation reset takes effect
    heartTwo.style.animation = 'floatUpwards1 8s ease-in forwards';
  }, 10);


  var heartThree = document.getElementById('heartThree');
  heartThree.style.display = 'block'; // Make the heart visible
  setTimeout(function() { // Timeout to ensure the animation reset takes effect
    heartThree.style.animation = 'floatUpwards1 8s ease-in forwards';
  }, 10);







});

document.getElementById('envelope').addEventListener('click', function (){

  window.location.href = 'letter.html';


});


document.getElementById('resetButton').addEventListener('click', function(){
  window.location.reload();
});


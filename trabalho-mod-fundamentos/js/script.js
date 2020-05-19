function alterColor() {
  var redRGB = document.getElementById('scroll-red');
  var redRGB = redRGB.value;

  var greenRGB = document.getElementById('scroll-green');
  var greenRGB = greenRGB.value;

  var blueRGB = document.getElementById('scroll-blue');
  var blueRGB = blueRGB.value;

  document.getElementById('number-red').value = redRGB;
  document.getElementById('number-green').value = greenRGB;
  document.getElementById('number-blue').value = blueRGB;

  document.getElementById('box').style.backgroundColor =
    'rgb(' + redRGB + ',' + greenRGB + ',' + blueRGB + ')';
}

function alterParamScroll() {
  var redRGBScroll = document.getElementById('scroll-red');
  var redRGBInput = document.getElementById('number-red');
  redRGBScroll.value = redRGBInput.value;

  var greenRGBScroll = document.getElementById('scroll-green');
  var greenRGBInput = document.getElementById('number-green');
  greenRGBScroll.value = greenRGBInput.value;

  var blueRGBScroll = document.getElementById('scroll-blue');
  var blueRGBInput = document.getElementById('number-blue');
  blueRGBScroll.value = blueRGBInput.value;
}

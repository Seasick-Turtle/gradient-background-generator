let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('gradient');
let rand = document.querySelector('.random');

function setGradient() {
  body.style.background =
    'linear-gradient(to right, '
    + color1.value
    + ', '
    + color2.value + ')';

  css.textContent = body.style.background + ';';
}

function randomize() {
  let min = Math.ceil(0);
  let max = Math.ceil(255);
  let color1Value = [];
  let color2Value = [];

  for (let i = 0; i < 3; i++) {
    color1Value.push((Math.floor(Math.random() * (max - min +1)) +min).toString(16));
    color2Value.push((Math.floor(Math.random() * (max - min +1)) +min).toString(16));

    color1Value[i] = (color1Value[i].length < 2 ? '0' + color1Value[i] : color1Value[i]);
    color2Value[i] = (color2Value[i].length < 2 ? '0' + color2Value[i] : color2Value[i]);

  }

  color1.value = '#' + color1Value.join('');
  color2.value = '#' + color2Value.join('');

  setGradient();


}

// invoke to set initial gradient
setGradient();

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

rand.addEventListener('click', randomize);

let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let rand = document.querySelector('.random');

const setGradient = () => {
  let css = document.querySelector('h3');
  let body = document.getElementById('gradient');

  body.style.background =
    `linear-gradient(to right, ${color1.value},${color2.value})`;

  // set the text value of h3 element to show css rule
  // ex: linear-gradient(to right, rgb(65, 175, 219), rgb(188, 236, 144));
  css.textContent = `${body.style.background};`;
};

const generateColors = () => {
  let min = Math.ceil(0);
  let max = Math.ceil(255);
  let color1Value = [];
  let color2Value = [];

  for (let i = 0; i < 3; i++) {
    // generate 3 rgb values, convert to hex values, push to array
    color1Value.push((Math.floor(Math.random() * (max - min +1)) +min).toString(16));
    color2Value.push((Math.floor(Math.random() * (max - min +1)) +min).toString(16));

    // if converted hex value is too short, add 0 to the front of the value
    color1Value[i] = (color1Value[i].length < 2 ? `0${color1Value[i]}` : color1Value[i]);
    color2Value[i] = (color2Value[i].length < 2 ? `0${color2Value[i]}` : color2Value[i]);

  }

  // combine values from loop to properly convert into usable hex code
  color1.value = `#${color1Value.join('')}`;
  color2.value = `#${color2Value.join('')}`;
};

const randomize = () => {
  // call to generate random colors
  generateColors();

  // call setGradient to use new color values from generateColors()
  setGradient();

};

// invoke to set the initial gradient
setGradient();

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

rand.addEventListener('click', randomize);

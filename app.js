const [color1, color2] = document.querySelectorAll('.color');
const rand = document.querySelector('.random');

const setGradient = () => {
  let css = document.querySelector('h3');
  let body = document.getElementById('gradient');

  body.style.background =
    `linear-gradient(to right, ${color1.value},${color2.value})`;

  // set the text value of h3 element to show css rule
  // ex: linear-gradient(to right, rgb(65, 175, 219), rgb(188, 236, 144));
  css.textContent = `${body.style.background};`;
};

const generateRandomValues = (color1, color2) => {
  const min = Math.ceil(0);
  const max = Math.ceil(255);

  for (let i = 0; i < 3; i++) {
    // generate 3 rgb values, convert to hex values, push to array
    color1.push((Math.floor(Math.random() * (max - min +1)) +min).toString(16));
    color2.push((Math.floor(Math.random() * (max - min +1)) +min).toString(16));

    // if converted hex value is too short, add 0 to the front of the value
    color1[i] = (color1[i].length < 2 ? `0${color1[i]}` : color1[i]);
    color2[i] = (color2[i].length < 2 ? `0${color2[i]}` : color2[i]);

  }
};

const generateColors = () => {

  let color1Value = [];
  let color2Value = [];

  generateRandomValues(color1Value, color2Value);

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

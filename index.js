// Import stylesheets
import './style.css';

const getHexCode = () => {
  let hexBits = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexBits[Math.floor(Math.random() * 16)];
  }
  return color;
};

function changeColor() {
  const hexCode = getHexCode();
  document.getElementById('hex').innerHTML = hexCode;
  document.getElementsByTagName('BODY')[0].style.backgroundColor = hexCode;
}

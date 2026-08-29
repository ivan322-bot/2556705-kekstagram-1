import { userPictureImg } from './open-user-picture';

const zoomOut = document.querySelector('.scale__control--smaller');
const zoomIn = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');

function getNumberFromText() {
  const scaleInputValues = scaleInput.value.split('%');
  console.log(scaleInputValues);
  return Number(scaleInputValues[0]);
}

function zooimngOut() {
  if (scaleInput.value == '25%') {
    console.log('Изображение больше нельзя уменьшить');
  } else {
    const numberScale = getNumberFromText() / 2;
    userPictureImg.style.scale = `${numberScale / 100}`;
    scaleInput.value = `${numberScale}%`;
    console.log(scaleInput.value);
  }
}

function zooimngIn() {
  if (scaleInput.value == '100%') {
    console.log('Изображение больше нельзя увеличить');
  } else {
    const numberScale = getNumberFromText() * 2;
    userPictureImg.style.scale = `${numberScale / 100}`;
    scaleInput.value = `${numberScale}%`;
    console.log(scaleInput.value);
  }
}

zoomOut.addEventListener('click', zooimngOut);
zoomIn.addEventListener('click', zooimngIn);

export { scaleInput };

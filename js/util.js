// Получаем рандомное число
function getRandomInteger (min, max) {
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const randomInteger = Math.floor(Math.random() * (upper - lower + 1) + lower);
  return randomInteger;
}
// Получаем рандомный элемент массива и выводим его значение
function getRandomValueArray (valuesArray) {
  return valuesArray[getRandomInteger(0, valuesArray.length - 1)];
}
// Получаем уникальное число
function getUniqueInteger (min, max) {
  const previosValues = [];
  return function () {
    let currentValue = getRandomInteger (min, max);
    if (previosValues.length >= (max - min + 1)) {
      return null;
    }
    while (previosValues.includes(currentValue)) {
      currentValue = getRandomInteger (min, max);
    }
    previosValues.push(currentValue);
    return currentValue;
  };
}

const isEscapeKey = (event) => event.key === 'Escape';
const isEnterKey = (event) => event.key === 'Enter';

function changeMultiDigitalNumber (likesCount) {
  switch (likesCount.length) {
    case 4: return `${likesCount[0]},${likesCount[1]}K`;
    case 5: return `${likesCount[0]}${likesCount[1]},${likesCount[2]}K`;
    case 6: return `${likesCount[0]}${likesCount[1]}${likesCount[2]}K`;
    case 7: return `${likesCount[0]},${likesCount[1]}М`;
    case 8: return `${likesCount[0]}${likesCount[1]},${likesCount[2]}М`;
    case 9: return `${likesCount[0]}${likesCount[1]}${likesCount[2]}М`;
  }
}

function isNumber (likesCount) {
  return Number.isNaN(Number(likesCount.textContent)) == false;
}

export {getRandomInteger, getRandomValueArray, getUniqueInteger, isEscapeKey, isEnterKey, changeMultiDigitalNumber, isNumber};


function getRandomInteger (min, max) {
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const randomInteger = Math.floor(Math.random() * (upper - lower + 1) + lower);
  return randomInteger;
}

function getRandomValueArray (valuesArray) {
  return valuesArray[getRandomInteger(0, valuesArray.length - 1)];
}

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

export {getRandomInteger, getRandomValueArray, getUniqueInteger, isEscapeKey, isEnterKey};


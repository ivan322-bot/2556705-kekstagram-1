import './consts.js';
import { DESCRIPTION_PHOTO, MAX_LIKES_PHOTO, MAX_PHOTO_ID, MAX_PHOTO_URL, MIN_LIKES_PHOTO, MIN_PHOTO_ID, MIN_PHOTO_URL } from './consts.js';

function getRandomInteger (min, max) {
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const randomInteger = Math.floor(Math.random * (upper - lower + 1) + lower);
  return randomInteger;
}

function getRandomValueArray (array) {
  return array[getRandomInteger (0, array[length - 1])];
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

function getDataPhoto () {
  let objectWithDataPhoto = {};
  return function () {
    objectWithDataPhoto = {
      id: getUniqueInteger(MIN_PHOTO_ID, MAX_PHOTO_ID),
      url: `photos/${getUniqueInteger(MIN_PHOTO_URL, MAX_PHOTO_URL)}.jpg`,
      description: getRandomValueArray(DESCRIPTION_PHOTO),
      likes: getRandomInteger(MIN_LIKES_PHOTO, MAX_LIKES_PHOTO),
      commentsgetRandomValueArray
    };
  };
}

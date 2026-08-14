import './consts.js';
import { DESCRIPTIONS_PHOTO, MAX_AVATAR, MAX_COMMENTS_ID, MAX_LIKES_PHOTO, MAX_PHOTO_ID, MAX_PHOTO_URL, MESSAGES_IN_COMMENTS, MIN_COMMENTS, MAX_COMMENTS, MIN_AVATAR, MIN_COMMETNS_ID, MIN_LIKES_PHOTO, MIN_PHOTO_ID, MIN_PHOTO_URL, NAMES, COUNT_PHOTOS} from './consts.js';

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


const getComments = () =>
  function () {
    return {
      id: getUniqueInteger(MIN_COMMETNS_ID, MAX_COMMENTS_ID)(),
      avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
      message: getRandomValueArray(MESSAGES_IN_COMMENTS),
      name: getRandomValueArray(NAMES)
    };
  };

const getDataPhoto = () =>
  function () {
    return {
      id: getUniqueInteger(MIN_PHOTO_ID, MAX_PHOTO_ID)(),
      url: `photos/${getUniqueInteger(MIN_PHOTO_URL, MAX_PHOTO_URL)()}.jpg`,
      description: getRandomValueArray(DESCRIPTIONS_PHOTO),
      likes: getRandomInteger(MIN_LIKES_PHOTO, MAX_LIKES_PHOTO),
      comments: Array.from({length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)}, getComments())
    };
  };

const getArrayDataPhoto = Array.from({length: COUNT_PHOTOS}, getDataPhoto());
console.log(getArrayDataPhoto);

export {getArrayDataPhoto};


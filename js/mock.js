import { DESCRIPTIONS_PHOTO, MAX_AVATAR, MAX_COMMENTS_ID, MAX_LIKES_PHOTO, MAX_PHOTO_ID, MAX_PHOTO_URL, MESSAGES_IN_COMMENTS, MIN_COMMENTS, MAX_COMMENTS, MIN_AVATAR, MIN_COMMETNS_ID, MIN_LIKES_PHOTO, MIN_PHOTO_ID, MIN_PHOTO_URL, NAMES, COUNT_PHOTOS} from './consts.js';
import {getRandomInteger, getRandomValueArray, getUniqueInteger} from './util.js';

const idComment = getUniqueInteger(MIN_COMMETNS_ID, MAX_COMMENTS_ID);
const idPhoto = getUniqueInteger(MIN_PHOTO_ID, MAX_PHOTO_ID);
const urlPhoto = getUniqueInteger(MIN_PHOTO_URL, MAX_PHOTO_URL);

function getComments () {
  return {
    id: idComment(),
    avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
    message: getRandomValueArray(MESSAGES_IN_COMMENTS),
    name: getRandomValueArray(NAMES)
  };
}

function getDataPhoto () {
  return {
    id: idPhoto(),
    url: `photos/${urlPhoto()}.jpg`,
    description: getRandomValueArray(DESCRIPTIONS_PHOTO),
    likes: getRandomInteger(MIN_LIKES_PHOTO, MAX_LIKES_PHOTO),
    comments: Array.from({length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)}, getComments)
  };
}

const getArrayDataPhoto = Array.from({length: COUNT_PHOTOS}, getDataPhoto);
console.log(getArrayDataPhoto);

export {getArrayDataPhoto};

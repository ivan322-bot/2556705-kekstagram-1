import { DESCRIPTIONS_PHOTO, MAX_AVATAR, MAX_COMMENTS_ID, MAX_LIKES_PHOTO, MAX_PHOTO_ID, MAX_PHOTO_URL, MESSAGES_IN_COMMENTS, MIN_COMMENTS, MAX_COMMENTS, MIN_AVATAR, MIN_COMMETNS_ID, MIN_LIKES_PHOTO, MIN_PHOTO_ID, MIN_PHOTO_URL, NAMES, COUNT_PHOTOS } from './data.js';
import { getRandomInteger, getRandomValueArray, getUniqueInteger } from './util.js';
import { getData } from './api.js';
import {getMessage, errorMessage, closeMessage, closeMessageBtnClick} from './send-data-message.js';
const idComment = getUniqueInteger(MIN_COMMETNS_ID, MAX_COMMENTS_ID);
const idPhoto = getUniqueInteger(MIN_PHOTO_ID, MAX_PHOTO_ID);
const urlPhoto = getUniqueInteger(MIN_PHOTO_URL, MAX_PHOTO_URL);

function getComments() {
  return {
    id: idComment(),
    avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
    message: getRandomValueArray(MESSAGES_IN_COMMENTS),
    name: getRandomValueArray(NAMES)
  };
}

function getDataPhoto() {
  return {
    id: idPhoto(),
    url: `photos/${urlPhoto()}.jpg`,
    description: getRandomValueArray(DESCRIPTIONS_PHOTO),
    likes: getRandomInteger(MIN_LIKES_PHOTO, MAX_LIKES_PHOTO),
    comments: Array.from({ length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS) }, getComments)
  };
}

let dataTrumbnails;

try {
  dataTrumbnails = await getData();
} catch (err) {
  dataTrumbnails = Array.from({ length: COUNT_PHOTOS }, getDataPhoto);
  getMessage(errorMessage);
  const timeoutId = setTimeout(() => {
    document.querySelector('.error__button').removeEventListener('click', closeMessage);
    document.removeEventListener('keydown', closeMessageBtnClick);
    document.body.removeChild(document.querySelector('.error__inner'));
  }, 5000);
  // Добавляем обработчики закрывающие сообщение
  document.querySelector('.error__button').addEventListener('click', closeMessage);
  document.addEventListener('keydown', closeMessageBtnClick);
}

export { dataTrumbnails };

import { getArrayDataPhotos } from './mock.js';
import { pictures } from './render-trumbnails.js';
import { openCommentsFullPicture } from './drawing-comments.js';
import { closeFullPictureClick, closeFullPictureEscape } from './close-full-picture.js';
import {checkUserLike} from './add-user-like.js';

const buttonCloseFullPicture = document.querySelector('.big-picture__cancel');
const body = document.body;
const fullPicture = document.querySelector('.big-picture');
const fullPictureImg = document.querySelector('.big-picture__img img');
const fullPictureDescription = document.querySelector('.social__caption');
const fullPictureLikes = document.querySelector('.likes-count');
const fullPictureShownComments = document.querySelector('.social__comment-shown-count');
const fullPictureTotalComments = document.querySelector('.social__comment-total-count');


fullPictureLikes.style.fontSize = '11px';

function isChoosedTrumbnail (openedTrumbnail) {
  if (openedTrumbnail.matches('.img-upload__label') || openedTrumbnail.matches('.img-upload__input') || openedTrumbnail.matches('.img-upload__start')) {
    return true;
  }
}

function openFullPicture (evt) {
  const picture = evt.target;
  if (isChoosedTrumbnail(picture)) {
    return null;
  }
  let currentPicture;
  getArrayDataPhotos.forEach((value) => {
    if (picture.src.includes(value.url)) {
      currentPicture = value;
      return value;
    }
  });
  fullPictureImg.src = picture.src;
  fullPictureDescription.textContent = currentPicture.description;
  fullPictureLikes.textContent = currentPicture.likes;
  fullPictureTotalComments.textContent = currentPicture.comments.length;
  fullPictureShownComments.textContent = currentPicture.comments.length;

  openCommentsFullPicture(currentPicture);
  fullPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', closeFullPictureEscape);
  buttonCloseFullPicture.addEventListener('click', closeFullPictureClick);
  pictures.removeEventListener('click', openFullPicture);
}

pictures.addEventListener('click', openFullPicture);
fullPictureLikes.addEventListener('click', checkUserLike);
export {fullPicture, body, fullPictureLikes, pictures, buttonCloseFullPicture, openFullPicture, };


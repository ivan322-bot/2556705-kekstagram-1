import { getArrayDataPhotos } from './mock.js';
import { pictures } from './drawing-trumbnails.js';
// import { isEscapeKey } from './util.js';

const buttonCloseFullPicture = document.querySelector('.big-picture__cancel');
const body = document.body;
const fullPicture = document.querySelector('.big-picture');
const fullPictureFragment = document.createDocumentFragment();
const fullPictureCommentsFragment = document.createDocumentFragment();
const fullPictureImg = document.querySelector('.big-picture__img img');
const fullPictureDescription = document.querySelector('.social__caption');
const fullPictureLikes = document.querySelector('.likes-count');
const fullPictureShownComments = document.querySelector('.social__comment-shown-count');
const fullPictureTotalComments = document.querySelector('.social__comment-total-count');
const fullPictureCommentCount = document.querySelector('.social__comment-count');
const fullPictureCommentsLoader = document.querySelector('.comments-loader');

function openFullPicture (evt) {
  const picture = evt.target;
  console.log(picture);
  console.log(picture.src);
  fullPicture.classList.remove('hidden');
  fullPictureCommentCount.classList.add('hidden');
  fullPictureCommentsLoader.classList.add('hidden');
  let currentPicture;
  getArrayDataPhotos.forEach((value) => {
    if (picture.src.includes(value.url)) {
      currentPicture = value;
      return value;
    }
  });
  console.log(currentPicture);
  fullPictureImg.src = picture.src;
  fullPictureDescription.textContent = currentPicture.description;
  fullPictureLikes.textContent = currentPicture.likes;
  fullPictureTotalComments.textContent = currentPicture.comments.length;
  fullPictureShownComments.textContent = currentPicture.comments.length;

  currentPicture.comments.forEach((value) => {
    const fullPictureSocialComment = document.querySelector('.social__comment').cloneNode(true);
    const fullPictureCommentPicture = fullPictureSocialComment.querySelector('.social__picture');
    const fullPictureTextComment = fullPictureSocialComment.querySelector('.social__text');
    fullPictureCommentPicture.src = value.avatar;
    fullPictureCommentPicture.alt = value.name;
    fullPictureTextComment.textContent = value.message;
    fullPictureCommentsFragment.appendChild(fullPictureSocialComment);
  });
  const fullPictureComments = document.querySelector('.social__comments');
  fullPictureComments.innerHTML = '';
  fullPictureComments.appendChild(fullPictureCommentsFragment);
  body.classList.add('modal-open');
  fullPictureImg.appendChild(fullPictureFragment);
  document.addEventListener('keydown', closeFullPictureEscape);
  buttonCloseFullPicture.addEventListener('click', closeFullPicture);
}

function closeFullPicture () {
  fullPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  pictures.removeEventListener('click', openFullPicture);
  pictures.addEventListener('click', openFullPicture);
  buttonCloseFullPicture.removeEventListener('click', closeFullPicture);
}

function closeFullPictureEscape (evt) {
  if (evt.key === 'Enter') {
    evt.preventDefault();
    return null;
  }
  if (evt.key === 'Escape') {
    console.log(evt.key);
    evt.preventDefault();
    fullPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    pictures.removeEventListener('click', openFullPicture);
    pictures.addEventListener('click', openFullPicture);
    document.removeEventListener('keydown', closeFullPictureEscape);
  }
}

pictures.addEventListener('click', openFullPicture);



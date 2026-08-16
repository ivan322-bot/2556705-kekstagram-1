import { getArrayDataPhotos } from './mock.js';
import { pictures } from './drawing-trumbnails.js';


const body = document.body;
const fullPicture = document.querySelector('.big-picture');
const fullPictureFragment = document.createDocumentFragment();
const fullPictureCommentsFragment = document.createDocumentFragment();
const fullPictureImg = document.querySelector('.big-picture__img img').cloneNode(true);
const fullPictureDescription = document.querySelector('.social__caption').cloneNode(true);
const fullPictureLikes = document.querySelector('.likes-count').cloneNode(true);
const fullPictureShownComments = document.querySelector('.social__comment-shown-count').cloneNode(true);
const fullPictureTotalComments = document.querySelector('.social__comment-total-count').cloneNode(true);
const fullPictureCommentCount = document.querySelector('.social__comment-count');
const fullPictureCommentsLoader = document.querySelector('.comments-loader');
const fullPictureCommentsCloned = document.querySelector('.social__comment').cloneNode(true);
const fullPictureCommentPicture = fullPictureCommentsCloned.querySelector('.social__picture');
const fullPictureTextComment = fullPictureCommentsCloned.querySelector('.social__text');
const allTrumbnails = pictures.querySelectorAll('.picture__img');
function openFullPicture (evt) {
  if (evt.target.nodeName === 'IMG') {
    const picture = evt.target;
    console.log(picture);
    console.log(picture.src);
    fullPicture.classList.remove('hidden');
    fullPictureCommentCount.classList.add('hidden');
    fullPictureCommentsLoader.classList.add('hidden');
    const currentPicture = getArrayDataPhotos.forEach((value) => {
      console.log(value.url);
      console.log(picture.src);
      if (picture.src.includes(value.url)) {
        return value;
      }
    });

  fullPictureImg.src = picture.src;
  fullPictureDescription.textContent = currentPicture.description;
  fullPictureLikes.textContent = currentPicture.likes;
  fullPictureTotalComments.textContent = currentPicture.commets.length;
  fullPictureShownComments.textContent = currentPicture.commets.length;
  currentPicture.forEach((value) => {
    fullPictureCommentPicture.src = value.avatar;
    fullPictureCommentPicture.alt = value.name;
    fullPictureTextComment.textContent = value.message;
    fullPictureCommentsFragment.appendChild(fullPictureCommentPicture);
    fullPictureCommentsFragment.appendChild(fullPictureTextComment);
  });
  const fullPictureComments = document.querySelector('.social__comment');
  fullPictureComments.appendChild(fullPictureCommentsFragment);
  body.classList.add('modal-open');
  fullPictureImg.appendChild(fullPictureFragment);
  } else {
    console.log('нажатие не на картинку');
    return null;
  }


}

pictures.addEventListener('click', openFullPicture);


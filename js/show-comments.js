import { fullPictureCommentsFragment, fullPictureComments } from './drawing-comments.js';

const fullPictureCommentsLoader = document.querySelector('.comments-loader');
const fullPictureCommentCount = document.querySelector('.social__comment-count');
const btnUserComment = document.querySelector('.social__footer-btn');
const userImg = document.querySelector('.social__footer').querySelector('.social__picture');
const userMessage = document.querySelector('.social__footer-text');

function repairUserComment () {
  userMessage.style.paddingRight = '38px';
}

// const pristine = new Pristine(document.querySelector('.img-upload__form'));
// function checkUserComment () {
//   if (userMessage.value >= 10) {
//     return false;
//   }
// }

// pristine.addValidator(document.querySelector('img-upload__input'), checkUserComment, 'Ошибка');

// function isValidUserComment () {
//   const valid = pristine.validate(); // returns true or false
//   return valid;
// }

// console.log(isValidUserComment());

function addUserComment () {
  const socialComent = document.querySelector('.social__comment').cloneNode(true);
  const socialImg = socialComent.querySelector('.social__picture');
  const socialText = socialComent.querySelector('.social__text');
  socialText.style.maxWidth = '520px';
  socialText.style.overflow = 'hidden';

  socialImg.src = userImg.src;
  socialImg.alt = userImg.alt;
  socialText.textContent = userMessage.value;
  fullPictureCommentsFragment.appendChild(socialComent);
  fullPictureComments.appendChild(fullPictureCommentsFragment.children[fullPictureCommentsFragment.children.length - 1]);
  fullPictureCommentCount.textContent = `${fullPictureComments.children.length} из ${fullPictureComments.children.length + fullPictureCommentsFragment.children.length} комментариев`;
  userMessage.value = '';
}

function showMoreComments() {
  for (let i = 0; i < 5; i++) {
    console.log(fullPictureCommentsFragment.children.length);
    if (fullPictureCommentsFragment.children.length == 0) {
      break;
    }
    fullPictureComments.appendChild(fullPictureCommentsFragment.children[0]);
  }
  if (fullPictureCommentsLoader.matches('.hidden')) {
    fullPictureCommentsLoader.classList.remove('hidden');
  }
  if (fullPictureCommentsFragment.children.length == 0) {
    fullPictureCommentsLoader.classList.add('hidden');
  }
  fullPictureCommentCount.textContent = `${fullPictureComments.children.length} из ${fullPictureComments.children.length + fullPictureCommentsFragment.children.length} комментариев`;
}

function showComments() {
  repairUserComment();
  showMoreComments();
  btnUserComment.addEventListener('click', addUserComment);
  fullPictureCommentsLoader.addEventListener('click', showMoreComments);
}

function clearComments() {
  for (let j = fullPictureCommentsFragment.children.length - 1; j >= 0; j--) {
    fullPictureCommentsFragment.removeChild(fullPictureCommentsFragment.children[j]);
  }
  fullPictureCommentsLoader.removeEventListener('click', showMoreComments);
}

export { showComments, clearComments };

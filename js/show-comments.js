import { fullPictureCommentsFragment, fullPictureComments } from './drawing-comments.js';

const fullPictureCommentsLoader = document.querySelector('.comments-loader');
const fullPictureCommentCount = document.querySelector('.social__comment-count');

function addComments () {
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

function showComments () {
  addComments ();
  fullPictureCommentsLoader.addEventListener('click', addComments);
}

function clearComments () {
  for (let j = fullPictureCommentsFragment.children.length - 1; j >= 0; j--) {
    fullPictureCommentsFragment.removeChild(fullPictureCommentsFragment.children[j]);
  }
  fullPictureCommentsLoader.removeEventListener('click', addComments);
}

export {showComments, clearComments};

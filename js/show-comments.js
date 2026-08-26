import { fullPictureCommentsFragment, fullPictureComments } from './drawing-comments.js';
import { repairUserComment, addUserComment } from './user-comment.js';
import { fullPictureLikes } from './render-full-picture.js';

const fullPictureCommentsLoader = document.querySelector('.comments-loader');
const fullPictureCommentCount = document.querySelector('.social__comment-count');
const btnUserComment = document.querySelector('.social__footer-btn');

// Отрисовывает все комментарии (если их мало) или только часть комметариев
function renderComments() {
  for (let i = 0; i < 5; i++) {
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

function clearComments() {
  for (let j = fullPictureCommentsFragment.children.length - 1; j >= 0; j--) {
    fullPictureCommentsFragment.removeChild(fullPictureCommentsFragment.children[j]);
  }
  fullPictureCommentsLoader.removeEventListener('click', renderComments);
  btnUserComment.removeEventListener('click', addUserComment);
  fullPictureLikes.innerHTML = '';
  // Убираем активированный лайк
}

export { fullPictureCommentCount, repairUserComment, renderComments, btnUserComment, fullPictureCommentsLoader, clearComments };

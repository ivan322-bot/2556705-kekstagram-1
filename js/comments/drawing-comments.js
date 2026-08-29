import { renderComments, repairUserComment, btnUserComment, fullPictureCommentsLoader } from './show-comments';
import {addUserComment} from './user-comment';

const fullPictureCommentsFragment = document.createDocumentFragment();
const fullPictureComments = document.querySelector('.social__comments');

// Корневая/главная функция для отрисовки комментариев у fullPicture
function openCommentsFullPicture(openPicture) {
  openPicture.comments.forEach((value) => {
    const fullPictureSocialComment = document.querySelector('.social__comment').cloneNode(true);
    const fullPictureCommentPicture = fullPictureSocialComment.querySelector('.social__picture');
    const fullPictureTextComment = fullPictureSocialComment.querySelector('.social__text');
    fullPictureCommentPicture.src = value.avatar;
    fullPictureCommentPicture.alt = value.name;
    fullPictureTextComment.textContent = value.message;
    fullPictureCommentsFragment.appendChild(fullPictureSocialComment);
  });

  fullPictureComments.innerHTML = '';
  repairUserComment();
  renderComments();
  btnUserComment.addEventListener('click', addUserComment);
  fullPictureCommentsLoader.addEventListener('click', renderComments);
}

export { openCommentsFullPicture, fullPictureCommentsFragment, fullPictureComments };

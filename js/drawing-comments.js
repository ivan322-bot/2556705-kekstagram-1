import {showComments} from './show-comments';

const fullPictureCommentsFragment = document.createDocumentFragment();
const fullPictureComments = document.querySelector('.social__comments');

function openCommentsFullPicture (openPicture) {
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
  showComments();
}

export {openCommentsFullPicture, fullPictureCommentsFragment, fullPictureComments};

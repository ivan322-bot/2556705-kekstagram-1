import { fullPicture, body, pictures, buttonCloseFullPicture, openFullPicture } from './render-full-picture.js';
import { isEscapeKey } from '../util.js';
import { clearComments } from '../comments/show-comments.js';
import { clearUserLike } from '../comments/add-user-like.js';

function closeFullPicture() {
  clearComments();
  clearUserLike();
  fullPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  pictures.addEventListener('click', openFullPicture);
}

function closeFullPictureClick() {
  closeFullPicture();
  buttonCloseFullPicture.removeEventListener('click', closeFullPictureClick);
  document.removeEventListener('keydown', closeFullPictureEscape);
}

function closeFullPictureEscape(evt) {
  if (isEscapeKey(evt)) {
    closeFullPicture();
    document.removeEventListener('keydown', closeFullPictureEscape);
    buttonCloseFullPicture.removeEventListener('click', closeFullPictureClick);
  }
}

export { closeFullPictureClick, closeFullPictureEscape };

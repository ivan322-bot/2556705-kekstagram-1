import { fullPicture, body, pictures, buttonCloseFullPicture, openFullPicture } from './render-full-picture.js';
import { isEscapeKey, isEnterKey } from './util.js';
import { clearComments } from './show-comments.js';


function closeFullPicture() {
  clearComments();
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
  if (isEnterKey(evt)) {
    evt.preventDefault();
    return null;
  }
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullPicture();
    document.removeEventListener('keydown', closeFullPictureEscape);
    buttonCloseFullPicture.removeEventListener('click', closeFullPictureClick);
  }
}

export { closeFullPictureClick, closeFullPictureEscape };

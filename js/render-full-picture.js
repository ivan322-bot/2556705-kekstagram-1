import { getArrayDataPhotos } from './mock.js';
import { pictures } from './render-trumbnails.js';
import { openCommentsFullPicture } from './drawing-comments.js';
import { closeFullPictureClick, closeFullPictureEscape } from './close-full-picture.js';
import { changeUserLike, addLikeImg } from './add-user-like.js';
import { changeMultiDigitalNumber } from './util.js';

const buttonCloseFullPicture = document.querySelector('.big-picture__cancel');
const body = document.body;
const fullPicture = document.querySelector('.big-picture');
const fullPictureImg = document.querySelector('.big-picture__img img');
const fullPictureDescription = document.querySelector('.social__caption');
const fullPictureLikes = document.querySelector('.likes-count');
const fullPictureShownComments = document.querySelector('.social__comment-shown-count');
const fullPictureTotalComments = document.querySelector('.social__comment-total-count');

// Уменьшает шрифт у текста с лайками
document.querySelector('.social__likes').style.fontSize = '11px';

// Получаем эл-нт выбранной миниатюры
function getChoosedTrumbnail() {
  let choosedTrumbnail;
  document.querySelector('.pictures').querySelectorAll('.picture__img').forEach((value) => {
    if (fullPictureImg.src.includes(value.src)) {
      choosedTrumbnail = value;
    }
  });
  return choosedTrumbnail;
}

// Событие произошло на миниатюре или нет?
function isChoosedTrumbnail (openedTrumbnail) {
  let currentTrumblail;
  document.querySelectorAll('.picture__img').forEach((value)=> {
    if (openedTrumbnail == value) {
      currentTrumblail = value;
    }
  });
  if(currentTrumblail == undefined) {
    return true;
  } else {
    return false;
  }
}

function openFullPicture(evt) {
  const picture = evt.target;
  console.log('Выбрана миниатюра');
  if(isChoosedTrumbnail(picture)) {
    return null;
  }
  let currentPicture;
  // Записываем в currentPicture 1 из созданных объектов mock
  getArrayDataPhotos.forEach((value) => {
    if (picture.src.includes(value.url)) {
      currentPicture = value;
      return value;
    }
  });

  // Отрисовываем fullPicture
  fullPictureImg.src = picture.src;
  fullPictureDescription.textContent = currentPicture.description;
  fullPictureLikes.textContent = currentPicture.likes;
  fullPictureTotalComments.textContent = currentPicture.comments.length;
  fullPictureShownComments.textContent = currentPicture.comments.length;

  // Добавляем лайк, если миниатюра была лайкнута ранее
  if (getChoosedTrumbnail().dataset.hasUserLike == 'yes') {
    addLikeImg();
    fullPictureLikes.classList.add('likes-count--liked');
    fullPictureLikes.textContent++;
  }

  // Заменяем число лайков текстом и кладем числовое знач. лайков в id миниатюры, напр. 4200 -> 4,2К
  getChoosedTrumbnail().id = fullPictureLikes.textContent;
  fullPictureLikes.textContent = changeMultiDigitalNumber(fullPictureLikes.textContent);

  // Отрисовываем комментарии
  openCommentsFullPicture(currentPicture);

  fullPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  fullPictureLikes.addEventListener('click', changeUserLike);
  document.addEventListener('keydown', closeFullPictureEscape);
  buttonCloseFullPicture.addEventListener('click', closeFullPictureClick);
  pictures.removeEventListener('click', openFullPicture);
}
if(document.querySelector('.img-upload__overlay').matches('.hidden')) {
  pictures.addEventListener('click', openFullPicture);
}
export { fullPicture, body, fullPictureLikes, pictures, buttonCloseFullPicture, openFullPicture, getChoosedTrumbnail };


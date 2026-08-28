import { isEscapeKey } from './util';
import { userForm, isValidUserForm, hashtagsInput, userComment } from './pristine.js';
import { scaleInput } from './user-picture-scaling.js';
import './user-picture-effects.js';

const uploadUserPicrureInput = document.querySelector('.img-upload__input');
const userPictureOverLay = document.querySelector('.img-upload__overlay');
const btnCloseUserPicture = document.querySelector('.img-upload__cancel');
const userPictureImg = document.querySelector('.img-upload__preview img');
const previews = document.querySelectorAll('.effects__preview');

// Открываем форму для отправки user img и др. данных
function openUserPicture(evt) {
  // evt.preventDefault();
  const file = evt.target.files[0];
  const url = URL.createObjectURL(file);
  userPictureImg.src = url;
  previews.forEach((value) => {
    value.style.backgroundImage = `url(${url})`;
  });
  console.log('Пользователь выбрал файл с изображением');
  userPictureOverLay.classList.remove('hidden');
  btnCloseUserPicture.addEventListener('click', closeUserPictureClick);
  document.addEventListener('keydown', closeUserPictureBtn);
  userForm.addEventListener('submit', isValidUserForm);
}

function closeUserPicture () {
  uploadUserPicrureInput.value = '';
  hashtagsInput.value = '';
  userComment.value = '';
  scaleInput.value = '100%';
  userPictureImg.style.scale = '1';
  document.querySelector('#effect-none').checked = true;
  if(document.querySelector('.pristine-error') !== null) {
    document.querySelector('.pristine-error').textContent = '';
  }
  uploadUserPicrureInput.addEventListener('change', openUserPicture);
  userPictureOverLay.classList.add('hidden');
}

// Закрываем форму отправки user img
function closeUserPictureClick() {
  closeUserPicture();
  btnCloseUserPicture.removeEventListener('click', closeUserPictureClick);
}

// Закрываем форму отправки user img
function closeUserPictureBtn(evt) {
  // Проверяем нажата ли клавиша Esc, открыта ли форма отправки user img и находятся ли в фокусе поле с Хештегами и с сообщением от пользователя
  if (isEscapeKey(evt) && !userPictureOverLay.matches('.hidden') && !evt.target.classList.contains('text__hashtags') && !evt.target.classList.contains('text__description')) {
    closeUserPicture();
    document.removeEventListener('keydown', closeUserPictureBtn);
  }
}

uploadUserPicrureInput.addEventListener('change', openUserPicture);

export {userPictureImg};


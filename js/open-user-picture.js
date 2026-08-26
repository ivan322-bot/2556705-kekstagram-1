import { isEscapeKey } from './util';
import { userForm, isValidUserForm } from './pristine.js';

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

// Закрываем форму отправки user img
function closeUserPictureClick() {
  uploadUserPicrureInput.value = '';
  userPictureOverLay.classList.add('hidden');
  btnCloseUserPicture.removeEventListener('click', closeUserPictureClick);
  uploadUserPicrureInput.addEventListener('change', openUserPicture);
}

// Закрываем форму отправки user img
function closeUserPictureBtn(evt) {
  // Проверяем нажата ли клавиша Esc и открыта ли форма отправки user img
  if (isEscapeKey(evt) && !userPictureOverLay.matches('.hidden') && !evt.target.classList.contains('text__hashtags') && !evt.target.classList.contains('text__description')) {
    closeUserPictureClick();
    document.removeEventListener('keydown', closeUserPictureBtn);
    uploadUserPicrureInput.addEventListener('change', openUserPicture);
  }
}

uploadUserPicrureInput.addEventListener('change', openUserPicture);



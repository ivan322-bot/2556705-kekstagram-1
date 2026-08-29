import { isEscapeKey } from '../util.js';
import { userForm, isValidUserForm, hashtagsInput, userComment } from './pristine.js';
import { scaleInput } from './user-picture-scaling.js';
import { sliderElement } from './user-picture-effects.js';
import { sendData } from '../api.js';
import { getMessage, successMessage, closeMessage, closeMessageBtnClick } from '../send-data-message.js';

const uploadUserPicrureInput = document.querySelector('.img-upload__input');
const userPictureOverLay = document.querySelector('.img-upload__overlay');
const btnCloseUserPicture = document.querySelector('.img-upload__cancel');
const userPictureImg = document.querySelector('.img-upload__preview img');
const previews = document.querySelectorAll('.effects__preview');

// Действия при попытке отправки формы на сервер
const sendUserForm = async (evt) => {
  evt.preventDefault();
  // Проверяем корректно ли введены данные в форму
  const isValid = isValidUserForm();
  if (isValid) {
    console.log('Форма должна быть отправлена, т.к. ошибок нет');
    // Отправляем форму на сервер, закрывает форму
    const formData = new FormData(document.querySelector('.img-upload__form'));
    await sendData(formData);
    evt.preventDefault();
    closeUserPicture();
    getMessage(successMessage);
    //  Удаляем сообщение об успешной отправке форсы
    const timeoutId = setTimeout(() => {
      document.querySelector('.success__button').removeEventListener('click', closeMessage);
      document.removeEventListener('keydown', closeMessageBtnClick);
      document.body.removeChild(document.querySelector('.success__inner'));
    }, 5000);
    // Добавляем обработчики закрывающие форму
    document.querySelector('.success__button').addEventListener('click', closeMessage);
    document.addEventListener('keydown', closeMessageBtnClick);
  } else {
    evt.preventDefault();
    console.log('Форма не может быть отправлена, т.к. ошибки есть');
  }
};

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
  userForm.addEventListener('submit', sendUserForm);
}

function closeUserPicture() {
  uploadUserPicrureInput.value = '';
  hashtagsInput.value = '';
  userComment.value = '';
  scaleInput.value = '100%';
  userPictureImg.style.scale = '1';
  sliderElement.noUiSlider.updateOptions({
    start: 0,
  });
  document.querySelector('#effect-none').checked = true;
  if (document.querySelector('.pristine-error') !== null) {
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

export { userPictureImg, closeUserPicture };


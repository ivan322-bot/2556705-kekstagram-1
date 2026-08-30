import {isEscapeKey} from './util.js';

const templateSuccessMessage = document.querySelector('#success').content;
const templateErrorMessage = document.querySelector('#error').content;
const successMessage = templateSuccessMessage.querySelector('.success__inner');
const errorMessage = templateErrorMessage.querySelector('.error__inner');

function getMessage(message) {
  message.style.position = 'absolute';
  message.style.top = '1%';
  message.style.left = '33%';
  document.body.appendChild(message);
}

function closeMessage () {
  if(document.querySelector('.success__inner') != undefined) {
    document.body.removeChild(document.querySelector('.success__inner'));
  }
  if(document.querySelector('.error__inner') != undefined) {
    document.body.removeChild(document.querySelector('.error__inner'));
  }
}

function closeMessageBtnClick (evt) {
  if (isEscapeKey(evt)) {
    if(document.querySelector('.success__inner') != undefined) {
      document.body.removeChild(document.querySelector('.success__inner'));
    }
    if(document.querySelector('.error__inner') != undefined) {
      document.body.removeChild(document.querySelector('.error__inner'));
    }
  }
}

export { getMessage, successMessage, errorMessage, closeMessage, closeMessageBtnClick};


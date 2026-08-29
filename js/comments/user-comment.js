import { fullPictureCommentsFragment, fullPictureComments } from './drawing-comments.js';
import { fullPictureCommentCount } from './show-comments.js';

const userImg = document.querySelector('.social__footer').querySelector('.social__picture');
const userMessage = document.querySelector('.social__footer-text');

// Чтобы написанный пользователем текст не забеагл на кнопку отправки сообщения
function repairUserComment() {
  userMessage.style.paddingRight = '38px';
}

function addUserComment() {
  const socialComent = document.querySelector('.social__comment').cloneNode(true);
  const socialImg = socialComent.querySelector('.social__picture');
  const socialText = socialComent.querySelector('.social__text');
  socialText.style.maxWidth = '520px';
  socialText.style.overflow = 'hidden';
  socialImg.src = userImg.src;
  socialImg.alt = userImg.alt;
  socialText.textContent = userMessage.value;
  fullPictureCommentsFragment.appendChild(socialComent);
  fullPictureComments.appendChild(fullPictureCommentsFragment.children[fullPictureCommentsFragment.children.length - 1]);
  fullPictureCommentCount.textContent = `${fullPictureComments.children.length} из ${fullPictureComments.children.length + fullPictureCommentsFragment.children.length} комментариев`;
  userMessage.value = '';
}

export { repairUserComment, addUserComment };

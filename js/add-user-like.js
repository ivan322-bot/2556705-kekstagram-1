import { fullPictureLikes } from './render-full-picture.js';
import { isFourDigitalNumber, changeFourDigitalNumber } from './util.js';

const socialLikes = document.querySelector('.social__likes');

let likesCountNumber;

function addLikeCount () {
  addLikeImg();
  fullPictureLikes.classList.add('likes-count--liked');
  if(Number.isNaN(Number(fullPictureLikes.textContent))) {
    console.log('Это не число');
  }
  if (likesCountNumber >= 1) {
    console.log('Счетчик лайков уже был активирован');
    console.log(likesCountNumber);
    console.log(document.querySelector('.likes-count').textContent);
    fullPictureLikes.textContent = likesCountNumber;
  }
  fullPictureLikes.textContent++;
  likesCountNumber = fullPictureLikes.textContent;
  if (isFourDigitalNumber(fullPictureLikes.textContent)) {
    fullPictureLikes.textContent = changeFourDigitalNumber(fullPictureLikes.textContent);
  }
  return likesCountNumber;
}

function removeLikeCount () {
  socialLikes.removeChild(document.querySelector('.user-like'));
  fullPictureLikes.classList.remove('likes-count--liked');
  fullPictureLikes.textContent = likesCountNumber;
  fullPictureLikes.textContent--;
  likesCountNumber = fullPictureLikes.textContent;
  if (isFourDigitalNumber(fullPictureLikes.textContent)) {
    fullPictureLikes.textContent = changeFourDigitalNumber(fullPictureLikes.textContent);
  }
  return likesCountNumber;
}

function addLikeImg() {
  socialLikes.style.position = 'relative';
  fullPictureLikes.style.zIndex = '2';
  const styles = window.getComputedStyle(fullPictureLikes, ':before');
  const heartImgSrc = styles['background-image'];
  const userLike = document.createElement('SPAN');
  userLike.classList.add('user-like');
  userLike.style.position = 'absolute';
  userLike.style.zIndex = '1';
  userLike.style.content = '';
  userLike.style.top = '5px';
  userLike.style.right = '31.5px';
  userLike.style.backgroundImage = heartImgSrc;
  userLike.style.backgroundPosition = '-5px -81px';
  userLike.style.backgroundRepeat = 'no-repeat';
  userLike.style.height = '18px';
  userLike.style.width = '20px';
  socialLikes.appendChild(userLike);
  return userLike;
}

function checkUserLike() {
  let likesCountTextContent;
  // console.log(document.querySelector('.likes-count').textContent);
  if (!fullPictureLikes.matches('.likes-count--liked')) {
    if(document.querySelector('.likes-count').textContent == likesCountTextContent) {
      if(likesCountTextContent > 1) {
        likesCountTextContent++;
        fullPictureLikes.textContent = likesCountTextContent;
      }
      likesCountTextContent = addLikeCount();
      console.log('Добавляем лайк');
      console.log(likesCountTextContent);
    } else {
      console.log('Добавляем лайк. Лайк добавлен первый раз');
      likesCountTextContent = addLikeCount();
      console.log(likesCountTextContent);
    }
  }
  else {
    fullPictureLikes.textContent = likesCountTextContent;
    likesCountTextContent = removeLikeCount();
    console.log('Убираем лайк');
    console.log(likesCountTextContent);
  }
}

export { checkUserLike };


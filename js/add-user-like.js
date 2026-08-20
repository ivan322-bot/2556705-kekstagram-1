import { fullPictureLikes } from './drawing-full-picture.js';

const socialLikes = document.querySelector('.social__likes');

function addLike () {
  socialLikes.style.position = 'relative';
  fullPictureLikes.style.zIndex = '2';
  const styles = window.getComputedStyle(fullPictureLikes, ':before');
  const heartImgSrc = styles['background-image'];
  const userLike = document.createElement('SPAN');
  userLike.classList.add('user-like');
  userLike.style.position = 'absolute';
  userLike.style.zIndex = '1';
  userLike.style.content = '';
  userLike.style.top = '3px';
  userLike.style.right = '32.5px';
  userLike.style.backgroundImage = heartImgSrc;
  userLike.style.backgroundPosition = '-5px -81px';
  userLike.style.backgroundRepeat = 'no-repeat';
  userLike.style.height = '18px';
  userLike.style.width = '20px';
  socialLikes.appendChild(userLike);
  fullPictureLikes.textContent++;
  return userLike;
}

function checkUserLike () {
  if (!fullPictureLikes.matches('.likes-count--liked')) {
    addLike();
    fullPictureLikes.classList.add('likes-count--liked');
  } else {
    socialLikes.removeChild(document.querySelector('.user-like'));
    fullPictureLikes.textContent--;
    fullPictureLikes.classList.remove('likes-count--liked');
  }
}

export {checkUserLike};


import { fullPictureLikes } from './render-full-picture.js';

const socialLikes = document.querySelector('.social__likes');

let likesCountNumber;

function addLikeCount () {
  addLikeImg();
  fullPictureLikes.classList.add('likes-count--liked');
  if (likesCountNumber >= 1) {
    fullPictureLikes.textContent = likesCountNumber;
  }
  fullPictureLikes.textContent++;
  if (fullPictureLikes.textContent >= 1000 && fullPictureLikes.textContent < 10000) {
    likesCountNumber = fullPictureLikes.textContent;
    fullPictureLikes.textContent = `${fullPictureLikes.textContent[0]},${fullPictureLikes.textContent[1]}K`;
  }
  return likesCountNumber;
}

function removeLikeCount () {
  socialLikes.removeChild(document.querySelector('.user-like'));
  fullPictureLikes.classList.remove('likes-count--liked');
  fullPictureLikes.textContent = likesCountNumber;
  fullPictureLikes.textContent--;
  if (fullPictureLikes.textContent >= 1000 && fullPictureLikes.textContent < 10000) {
    likesCountNumber = fullPictureLikes.textContent;
    fullPictureLikes.textContent = `${fullPictureLikes.textContent[0]},${fullPictureLikes.textContent[1]}K`;
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
  let likesCountNumberTwo;
  if (!fullPictureLikes.matches('.likes-count--liked')) {
    if(likesCountNumberTwo > 1) {
      likesCountNumberTwo++;
      fullPictureLikes.textContent = likesCountNumberTwo;
    }
    likesCountNumberTwo = addLikeCount();
    console.log('Добавляем лайк');
  }
  else {
    fullPictureLikes.textContent = likesCountNumberTwo;
    likesCountNumberTwo = removeLikeCount();
    console.log('Убираем лайк');
  }
  console.log(likesCountNumberTwo);
  // likesCountNumberTwo++;
}

export { checkUserLike };


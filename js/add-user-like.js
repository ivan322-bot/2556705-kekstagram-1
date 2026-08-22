// Импортируем эл-нт с одбщим счетчиком лайков
import { fullPictureLikes } from './render-full-picture.js';
import { changeMultiDigitalNumber, isNumber } from './util.js';

const socialLikes = document.querySelector('.social__likes');

let likesCountNumber;
// Добавляем лайк поставленныый пользователем и увеличиваем обдщий счетчик лайков
function addLikeCount () {
  addLikeImg();
  fullPictureLikes.classList.add('likes-count--liked');
  if(isNumber(fullPictureLikes) && likesCountNumber >= 1) {
    likesCountNumber = 0;
  }
  if (likesCountNumber >= 1) {
    fullPictureLikes.textContent = likesCountNumber;
  }
  fullPictureLikes.textContent++;
  likesCountNumber = fullPictureLikes.textContent;
  fullPictureLikes.textContent = changeMultiDigitalNumber(fullPictureLikes.textContent);
  return likesCountNumber;
}
// Удаляем лайк поставленныый пользователем и уменьшаем обдщий счетчик лайков
function removeLikeCount () {
  socialLikes.removeChild(document.querySelector('.user-like'));
  fullPictureLikes.classList.remove('likes-count--liked');
  fullPictureLikes.textContent = likesCountNumber;
  fullPictureLikes.textContent--;
  likesCountNumber = fullPictureLikes.textContent;
  fullPictureLikes.textContent = changeMultiDigitalNumber(fullPictureLikes.textContent);
  return likesCountNumber;
}

// Показываем изображение сердечка при добавлении лайка от пользователя
function addLikeImg() {
  socialLikes.style.position = 'relative';
  fullPictureLikes.style.zIndex = '2';
  const styles = window.getComputedStyle(fullPictureLikes, ':before');
  const heartImgSrc = styles['background-image'];
  // Создаем эл-нт куда поместим img сердечка
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
  // Добаляем сердечко в разметку и возвращаем эл-нт с сердечком
  socialLikes.appendChild(userLike);
  return userLike;
}
// Добавляет, либо удаляет лайк от пользователя
function checkUserLike() {
  let likesCountTextContent;
  // Условие (Если лайк отсутствует) {Добаляем лайк}
  if (!fullPictureLikes.matches('.likes-count--liked')) {
    console.log('Добавляем лайк');
    likesCountTextContent = addLikeCount();
    console.log(likesCountTextContent);
  } else {
    // Условие (Если лайк присутствует) {Удаляем лайк}
    fullPictureLikes.textContent = likesCountTextContent;
    likesCountTextContent = removeLikeCount();
    console.log('Убираем лайк');
    console.log(likesCountTextContent);
  }
}
// Удаляет изображение сердечка
function clearUserLike () {
  if(fullPictureLikes.matches('.likes-count--liked')){
    console.log('Убираем активированный лайк');
    fullPictureLikes.classList.remove('likes-count--liked');
    document.querySelector('.social__likes').removeChild(document.querySelector('.user-like'));
  }
}

export { checkUserLike, clearUserLike };


const uploadUserPicrureInput = document.querySelector('.img-upload__input');
const userPictureOverLay = document.querySelector('.img-upload__overlay');
const btnCloseUserPicture = document.querySelector('.img-upload__cancel');
const userPictureImg = document.querySelector('.img-upload__preview img');
const previews = document.querySelectorAll('.effects__preview');

function openUserPicture (evt) {
  evt.stopPropagation();
  const file = evt.target.files[0];
  const url = URL.createObjectURL(file);
  userPictureImg.src = url;
  previews.forEach((value)=> {
    value.style.backgroundImage = `url(${url})`;
  });
  console.log('Произошекл клик');
  userPictureOverLay.classList.remove('hidden');
}

function closeUserPicture () {
  uploadUserPicrureInput.value = '';
  userPictureOverLay.classList.add('hidden');
}

uploadUserPicrureInput.addEventListener('change', openUserPicture);
btnCloseUserPicture.addEventListener('click', closeUserPicture);


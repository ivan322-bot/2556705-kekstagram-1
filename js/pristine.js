const userForm = document.querySelector('.img-upload__form');
const hashtags = document.querySelector('.text__hashtags');

const pristine = new Pristine(userForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'has-danger',
  successClass: 'has-success',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

let Hashtag = [];

function checkUserHashtags () {
  Hashtag = Hashtag.concat(hashtags.value);
  console.log(Hashtag.length);
  if (Hashtag.length >= 20) {
    return true;
  }
}

pristine.addValidator(hashtags, checkUserHashtags, 'Ошибка в хештегах');

function isValidUserComment (evt) {
  // console.log(evt);
  const isValid = pristine.validate();
  if(isValid) {
    console.log('Форма должна быть отправлена, т.к. ошибок нет');
  } else {
    console.log('Форма не может быть отправлена, т.к. ошибки есть');
  }
}

hashtags.addEventListener('input', isValidUserComment);

export {userForm, isValidUserComment};

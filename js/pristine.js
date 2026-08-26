const userForm = document.querySelector('.img-upload__form');
const hashtagsInput = document.querySelector('.text__hashtags');

const pristine = new Pristine(userForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'has-danger',
  successClass: 'has-success',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

function getHashtags () {
  const rawHashtags = String(hashtagsInput.value).split(' ');
  const hashtags = [];
  rawHashtags.forEach(value => {
    if (value !== '') {
      hashtags.push(value);
    }
  }
  );
  return hashtags;
}

function checkLengthHashtags() {
  const hashtags = getHashtags();
  const isRightLengthHashtag = hashtags.every(value => (value.length <= 20) ? true : false)
  return isRightLengthHashtag;
}

function isReallyHashtag() {
  const hashtags = getHashtags();
  const itIsReallyHashtag = hashtags.every(value => (value.startsWith('#')) ? true : false);
  // console.log(hashtags);
  return itIsReallyHashtag;
}

pristine.addValidator(hashtagsInput, checkLengthHashtags, 'Длина хештега должна быть не больше 20');
pristine.addValidator(hashtagsInput, isReallyHashtag, 'Хештег должен начинаться со знака #');

function isValidUserComment() {
  const isValid = pristine.validate();
  if (isValid) {
    console.log('Форма должна быть отправлена, т.к. ошибок нет');
  } else {
    console.log('Форма не может быть отправлена, т.к. ошибки есть');
  }
}

hashtagsInput.addEventListener('input', checkLengthHashtags);

export { userForm, isValidUserComment };

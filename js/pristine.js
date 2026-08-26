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
      hashtags.push(value.toLowerCase());
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
  const isHashtag = hashtags.every(value => (value.startsWith('#')) ? true : false);
  return isHashtag;
}

function hasOneSymbolHastag () {
  const hashtags = getHashtags();
  const isOneSymbol = hashtags.every(value => (value.startsWith('#') && value.endsWith('#')) ? false : true);
  return isOneSymbol;
}

function isRepeatHashtag () {
  const hashtags = getHashtags();
  const newArrayHashtags = [];
  const hasRepeatHashtag = hashtags.every(value => {
    if (newArrayHashtags.includes(value)) {
      return false;
    } else {
      newArrayHashtags.push(value);
      return true;
    }
  });
  return hasRepeatHashtag;
}

function checkCountHashtags () {
  const hashtags = getHashtags();
  return hashtags.length <= 5;
}

function checkSymbolsHashtags () {
  const hashtags = getHashtags();
  const ishasErrorSymbols = hashtags.every((item) =>
    (item == '#') ? true : /^#[a-zа-яё0-9]{1,19}$/i.test(item)
  );
  console.log(ishasErrorSymbols);
  return ishasErrorSymbols;
}

pristine.addValidator(hashtagsInput, checkLengthHashtags, 'Длина хештега должна быть не больше 20');
pristine.addValidator(hashtagsInput, isReallyHashtag, 'Хештег должен начинаться со знака #');
pristine.addValidator(hashtagsInput, hasOneSymbolHastag, 'Хештег не может состоять только из одной #');
pristine.addValidator(hashtagsInput, isRepeatHashtag, 'Хештеги не могут повторяться');
pristine.addValidator(hashtagsInput, checkCountHashtags, 'Количество хештегов не больше 5');
pristine.addValidator(hashtagsInput, checkSymbolsHashtags, 'Хештеги не должны содержать спецсимволов');

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

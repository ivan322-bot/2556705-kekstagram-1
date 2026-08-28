const userForm = document.querySelector('.img-upload__form');
const hashtagsInput = document.querySelector('.text__hashtags');
const userComment = document.querySelector('.text__description');

const pristine = new Pristine(userForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'has-danger',
  successClass: 'has-success',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

// Получаем обработанный Хештег в нижнем регистре
function getHashtags() {
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

// Проверям длину Хештега
function checkLengthHashtags() {
  const hashtags = getHashtags();
  const isRightLengthHashtag = hashtags.every(value => (value.length <= 20) ? true : false)
  return isRightLengthHashtag;
}

// Проверям имеет ли Хештег знак # в начале
function isReallyHashtag() {
  const hashtags = getHashtags();
  const isHashtag = hashtags.every(value => (value.startsWith('#')) ? true : false);
  return isHashtag;
}

// Проверям состоим ли Хештег из одной #
function hasOneSymbolHastag() {
  const hashtags = getHashtags();
  const isOneSymbol = hashtags.every(value => (value.startsWith('#') && value.endsWith('#')) ? false : true);
  return isOneSymbol;
}

// Проверям имеются ли повторяющиеся Хештеги
function isRepeatHashtag() {
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

// Проверям количество Хештегов
function checkCountHashtags() {
  const hashtags = getHashtags();
  return hashtags.length <= 5;
}

// Проверям имеют ли Хештеги спецсимволы
function checkSymbolsHashtags() {
  const hashtags = getHashtags();
  return hashtags.every((item) =>
    (item == '#') ? true : /^#[a-zа-яё0-9]{1,19}$/i.test(item)
  );
}

function checkLengthUserComment () {
  return userComment.value.length <= 140;
}

pristine.addValidator(hashtagsInput, checkLengthHashtags, 'Длина хештега должна быть не больше 20');
pristine.addValidator(hashtagsInput, isReallyHashtag, 'Хештег должен начинаться со знака #');
pristine.addValidator(hashtagsInput, hasOneSymbolHastag, 'Хештег не может состоять только из одной #');
pristine.addValidator(hashtagsInput, isRepeatHashtag, 'Хештеги не могут повторяться');
pristine.addValidator(hashtagsInput, checkCountHashtags, 'Количество хештегов не больше 5');
pristine.addValidator(hashtagsInput, checkSymbolsHashtags, 'Хештеги не должны содержать спецсимволов');
pristine.addValidator(userComment, checkLengthUserComment, 'Длина комментария не больше 140 символов');

// Валидация формы и запрет на отправку в случае ошибок
function isValidUserForm(evt) {
  const isValid = pristine.validate();
  const hashtags = getHashtags();
  if (isValid) {
    console.log('Форма должна быть отправлена, т.к. ошибок нет');
    hashtagsInput.value = hashtags;
    console.log(hashtagsInput.value);
  } else {
    evt.preventDefault();
    console.log('Форма не может быть отправлена, т.к. ошибки есть');
  }
}

export { userForm, isValidUserForm, hashtagsInput, userComment };

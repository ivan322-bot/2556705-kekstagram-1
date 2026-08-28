// import {userPictureImg} from './open-user-picture';

const effectsList = document.querySelector('.img-upload__effects');
const sliderElement = document.querySelector('.effect-level__slider');
const valueSlider = document.querySelector('.effect-level__value');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 0,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      return Number(value);
    },
    from: function (value) {
      return Number(value);
    }
  }
});

function convertValueEffectOnNone (value, effect) {
  if (effect == 'effect-none' || effect == 'effect-marvin') {
    return value;
  }
  if (effect == 'effect-chrome' || effect == 'effect-sepia') {
    return value * 100;
  }
  if (effect == 'effect-phobos') {
    return value * 33.3;
  }
  if (effect == 'effect-heat') {
    value--;
    return (value / 0.1) / 20 * 100;
  }
}

valueSlider.value = sliderElement.noUiSlider.get();

let currentEffect = 'none';

function checkCurrentEffect () {
  if(currentEffect == 'invert') {
    document.querySelector('.img-upload__preview img').style.filter = `${currentEffect}(${sliderElement.noUiSlider.get()}%)`;
  } else if (currentEffect == 'blur') {
    document.querySelector('.img-upload__preview img').style.filter = `${currentEffect}(${sliderElement.noUiSlider.get()}px)`;
  } else if (currentEffect == 'none') {
    document.querySelector('.img-upload__preview img').style.filter = 'none';
  } else {
    document.querySelector('.img-upload__preview img').style.filter = `${currentEffect}(${sliderElement.noUiSlider.get()})`;
  }
}

sliderElement.noUiSlider.on('update', () => {
  valueSlider.value = sliderElement.noUiSlider.get();
  checkCurrentEffect();
  console.log(valueSlider.value);
});

function changeEffectPicture (evt) {
  let effectName = 'effect-none';
  document.querySelectorAll('.effects__radio').forEach(element => {
    if(element.checked == true) {
      effectName = element.id;
    }
  });

  if (evt.target.closest('.effects__preview--none')) {
    currentEffect = 'none';
    checkCurrentEffect();
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0 ,
        max: 100,
      },
      start: Number(convertValueEffectOnNone(valueSlider.value, effectName)),
      step: 1,
    });
    evt.target.checked = true;
    valueSlider.value = sliderElement.noUiSlider.get();
    console.log('Оригинал');
  }
  if (evt.target.closest('.effects__preview--chrome')) {
    currentEffect = 'grayscale';
    checkCurrentEffect();
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: convertValueEffectOnNone(valueSlider.value, effectName) / 100,
      step: 0.1,
    });
    evt.target.checked = true;
    valueSlider.value = sliderElement.noUiSlider.get();
    console.log('Хром');
  }
  if (evt.target.closest('.effects__preview--marvin')) {
    currentEffect = 'invert';
    checkCurrentEffect();
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: convertValueEffectOnNone(valueSlider.value, effectName),
      step: 1,
    });
    evt.target.checked = true;
    valueSlider.value = sliderElement.noUiSlider.get();
    console.log('Марвин');
  }
  if (evt.target.closest('.effects__preview--sepia')) {
    currentEffect = 'sepia';
    checkCurrentEffect();
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: convertValueEffectOnNone(valueSlider.value, effectName) / 100,
      step: 0.1,
    });
    evt.target.checked = true;
    valueSlider.value = sliderElement.noUiSlider.get();
    console.log('Сепия');
  }
  if (evt.target.closest('.effects__preview--phobos')) {
    currentEffect = 'blur';
    checkCurrentEffect();
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: convertValueEffectOnNone(valueSlider.value, effectName) / 33.3,
      step: 0.1,
    });
    evt.target.checked = true;
    valueSlider.value = sliderElement.noUiSlider.get();
    console.log('Фобос');
  }
  if (evt.target.closest('.effects__preview--heat')) {
    currentEffect = 'brightness';
    checkCurrentEffect();
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: convertValueEffectOnNone(valueSlider.value, effectName) / 100 * 20 * 0.1 + 1,
      step: 0.1,
    });
    evt.target.checked = true;
    valueSlider.value = sliderElement.noUiSlider.get();
    console.log('Зной');
  }
}

effectsList.addEventListener('click', changeEffectPicture);

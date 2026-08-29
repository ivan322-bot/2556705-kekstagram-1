import { dataTrumbnails } from './mock';
import { getUniqueValueArray, getRandomValueArray } from './util.js';

const pictures = document.querySelector('.pictures');
const photosFragment = document.createDocumentFragment();
const templapePicture = document.querySelector('#picture').content;
const templapePictureLink = templapePicture.querySelector('.picture');
const templapePictureImg = templapePicture.querySelector('.picture__img');
const templapePictureComments = templapePicture.querySelector('.picture__comments');
const templapePictureLikes = templapePicture.querySelector('.picture__likes');
const filtersFormSection = document.querySelector('.img-filters');
const filtersForm = document.querySelector('.img-filters__form');
const filters = document.querySelectorAll('.img-filters__button');

// Создаем фрагмент куда помещаем все миниатюры
function renderTrumbnails (datasTrumbnails) {
  datasTrumbnails.forEach((value) => {
    templapePictureImg.src = value.url;
    templapePictureImg.alt = value.description;
    templapePictureLikes.textContent = value.likes;
    templapePictureComments.textContent = value.comments.length;
    const clonedPictureLink = templapePictureLink.cloneNode(true);
    photosFragment.appendChild(clonedPictureLink);
  });
  // Отрисовываем все миниатюры
  pictures.appendChild(photosFragment);
}

renderTrumbnails(dataTrumbnails);
// Добавляем фильтр миниатюр, если они отрисовались на странице
if (dataTrumbnails != undefined) {
  filtersFormSection.classList.remove('img-filters--inactive');
}

// Изменение миниатюр при смене фильтра
function changeFilterTrumbnails (evt) {
  // При клике на фильтр удаляем все миниатюры, чтобы создать новые
  const allTrumbnails = document.querySelectorAll('.picture');
  allTrumbnails.forEach(element => {
    pictures.removeChild(element);
  });
  filters.forEach(element => {
    if(element.closest('.img-filters__button--active')) {
      element.classList.remove('img-filters__button--active');
    }
  });
  evt.target.classList.add('img-filters__button--active');

  if (evt.target.id == 'filter-default') {
    console.log('Миниатюры по умолчанию');
    const newDataTrumbnails = dataTrumbnails.slice();
    renderTrumbnails(newDataTrumbnails);
  }
  if (evt.target.id == 'filter-random') {
    console.log('Случайные миниатюры');
    // const newDataTrumbnails = Array.from({ length: 10}, newDataTrumbnail);
    // console.log(newDataTrumbnails);
    renderTrumbnails(getUniqueValueArray(dataTrumbnails, 10));
  }
  if (evt.target.id == 'filter-discussed') {
    console.log('Обсуждаемые миниатюры');
    const newDataTrumbnails = dataTrumbnails.slice().reverse();
    renderTrumbnails(newDataTrumbnails);
  }
}

// Отрисовывает все миниаьюры по умолчанию и добавляем обработчтик события на фильтры для миниатюр

filtersForm.addEventListener('click', changeFilterTrumbnails);

export { pictures };

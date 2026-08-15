import { getArrayDataPhotos } from './mock';

const pictures = document.querySelector('.pictures');
const photosFragment = document.createDocumentFragment();
const templapePicture = document.querySelector('#picture').content;
const templapePictureLink = templapePicture.querySelector('.picture');
const templapePictureImg = templapePicture.querySelector('.picture__img');
const templapePictureComments = templapePicture.querySelector('.picture__comments');
const templapePictureLikes = templapePicture.querySelector('.picture__likes');


getArrayDataPhotos.forEach((value)=> {
  templapePictureImg.src = value.url;
  templapePictureImg.alt = value.description;
  templapePictureLikes.textContent = value.likes;
  templapePictureComments.textContent = value.comments.length;
  const clonedPictureLink = templapePictureLink.cloneNode(true);
  photosFragment.appendChild(clonedPictureLink);
});

pictures.appendChild(photosFragment);

console.log(photosFragment);



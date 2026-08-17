const fullPictureCommentCount = document.querySelector('.social__comment-count');
const fullPictureCommentsLoader = document.querySelector('.comments-loader');
const fullPictureCommentsFragment = document.createDocumentFragment();

function openCommentsFullPicture (openPicture) {
  openPicture.comments.forEach((value) => {
    const fullPictureSocialComment = document.querySelector('.social__comment').cloneNode(true);
    const fullPictureCommentPicture = fullPictureSocialComment.querySelector('.social__picture');
    const fullPictureTextComment = fullPictureSocialComment.querySelector('.social__text');
    fullPictureCommentPicture.src = value.avatar;
    fullPictureCommentPicture.alt = value.name;
    fullPictureTextComment.textContent = value.message;
    fullPictureCommentsFragment.appendChild(fullPictureSocialComment);
  });

  const fullPictureComments = document.querySelector('.social__comments');
  fullPictureComments.innerHTML = '';
  fullPictureComments.appendChild(fullPictureCommentsFragment);
  fullPictureCommentCount.classList.add('hidden');
  fullPictureCommentsLoader.classList.add('hidden');
}

export {openCommentsFullPicture};

const fullPictureCommentsLoader = document.querySelector('.comments-loader');

function showFirstComments (comments, commentsFullPicture) {
  if (comments.children.length < 6){
    fullPictureCommentsLoader.classList.add('hidden');
    commentsFullPicture.appendChild(comments);
  } else {
    for (let i = 0; i < 5; i++) {
      fullPictureCommentsLoader.classList.remove('hidden');
      if (comments.children.length == 1) {
        break;
      }
      commentsFullPicture.appendChild(comments.children[0]);
    }
    for (let j = comments.children.length - 1; j >= 0; j--) {
      comments.removeChild(comments.children[j]);
    }
  }
}

export {showFirstComments};

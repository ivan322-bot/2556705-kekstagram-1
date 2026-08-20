function addLikeCount () {
  fullPictureLikes.textContent++;
  let likesCountNumber;
  if (fullPictureLikes.textContent >= 1000 && fullPictureLikes.textContent < 10000) {
    likesCountNumber = fullPictureLikes.textContent;
    console.log(likesCountNumber);
    fullPictureLikes.textContent = `${fullPictureLikes.textContent[0]},${fullPictureLikes.textContent[1]}K`;
  }
  return likesCountNumber;
}

let likesCountNumber;

function removeLikeCount () {
  fullPictureLikes.textContent = likesCountNumber;
  console.log(likesCountNumber);
  fullPictureLikes.textContent--;
  if (fullPictureLikes.textContent >= 1000 && fullPictureLikes.textContent < 10000) {
    likesCountNumber = fullPictureLikes.textContent;
    console.log(likesCountNumber);
    fullPictureLikes.textContent = `${fullPictureLikes.textContent[0]},${fullPictureLikes.textContent[1]}K`;
  }
  return likesCountNumber;
}

function getRandomInteger (min, max) {
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const randomInteger = Math.floor(Math.random * (upper - lower + 1) + lower);
  return randomInteger;
}


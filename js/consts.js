const MIN_PHOTO_ID = 1;
const MAX_PHOTO_ID = 25;
const MIN_PHOTO_URL = 1;
const MAX_PHOTO_URL = 25;
const DESCRIPTION_PHOTO = 'Всё отлично! В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'.split('.');
const MIN_LENGTH_DESCRIPTION_PHOTO = 0;
const MAX_LENGTH_DESCRIPTION_PHOTO = DESCRIPTION_PHOTO.length - 1;
const MIN_LIKES_PHOTO = 15;
const MAX_LIKES_PHOTO = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MIN_COMMETNS_ID = 1;
const MAX_COMMENTS_ID = 1000;
const MIN_AVATAR: 1,
const MAX_AVATAR: 6,
const MESSAGE_IN_COMMENTS: 'Всё отлично! В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'.split('.'),
const MIN_LENGTH_MESSAGE_IN_COMMENTS: 0,
const MAX_LENGTH_MESSAGE_IN_COMMENTS: MESSAGE_IN_COMMENTS.length - 1,

export * as default

const PHOTO_COUNT = 25;
const MAX_LIKES = 200;
const MIN_LIKES = 15;
const MAX_COMMENTS = 30;
const MIN_COMMENTS = 0;

const DESCRIPTIONS = [
  'Закат на берегу моря',
  'Утренняя чашка кофе',
  'Прогулка по осеннему парку',
  'Городской пейзаж вечером',
  'Любимый кот на подоконнике',
  'Вид из окна офиса',
  'Домашний ужин с друзьями',
  'Первый снег зимой',
  'Цветущая вишня весной',
  'Велопрогулка по набережной',
  'Книга и плед вечером',
  'Поездка в горы',
  'Уютная кофейня в центре',
  'Закат в поле',
  'Прогулка с собакой',
  'Рождественские огни',
  'Пикник на природе',
  'Архитектура старого города',
  'Рассвет на озере',
  'Уличное искусство',
  'Семейное фото',
  'Путешествие на поезде',
  'Цветы на балконе',
  'Вечерний город',
  'Тихий уголок парка'
];

const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Артём',
  'Мария',
  'Иван',
  'Елена',
  'Дмитрий',
  'Анна',
  'Сергей',
  'Ольга',
  'Александр',
  'Наталья',
  'Максим',
  'Екатерина',
  'Андрей',
  'Татьяна',
  'Алексей'
];

// Функция для получения случайного числа в диапазоне [min, max]
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для получения случайного элемента массива
function getRandomArrayElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Функция для генерации случайного комментария
function generateComment(commentId) {
  const messagePartsCount = getRandomNumber(1, 2);
  let message = '';
  
  for (let i = 0; i < messagePartsCount; i++) {
    message += getRandomArrayElement(COMMENT_MESSAGES) + ' ';
  }
  
  return {
    id: commentId,
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: message.trim(),
    name: getRandomArrayElement(NAMES)
  };
}

// Функция для генерации массива комментариев
function generateComments(count, startId) {
  const comments = [];
  for (let i = 0; i < count; i++) {
    comments.push(generateComment(startId + i));
  }
  return comments;
}

// Функция для генерации одного объекта фотографии
function generatePhoto(id) {
  const commentsCount = getRandomNumber(MIN_COMMENTS, MAX_COMMENTS);
  
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: DESCRIPTIONS[id - 1],
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comments: generateComments(commentsCount, id * 100)
  };
}

// Функция для генерации массива из 25 фотографий
function generatePhotos() {
  const photos = [];
  for (let i = 1; i <= PHOTO_COUNT; i++) {
    photos.push(generatePhoto(i));
  }
  return photos;
}

// Генерируем и экспортируем массив фотографий
const photos = generatePhotos();

module.exports = { photos, generatePhotos };

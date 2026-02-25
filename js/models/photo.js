import { getRandomNumber } from '../utils/random.js';
import { DESCRIPTIONS } from '../data/descriptions.js';
import { generateComments } from './comment.js';
import { MIN_COMMENTS, MAX_COMMENTS, MIN_LIKES, MAX_LIKES } from '../constants.js';

function generatePhoto(id) {
  const commentsCount = getRandomNumber(MIN_COMMENTS, MAX_COMMENTS);

  return {
    id,
    url: `photos/${id}.jpg`,
    description: DESCRIPTIONS[id - 1],
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comments: generateComments(commentsCount, id * 100)
  };
}

function generatePhotosData() {
  const generatedPhotos = [];
  for (let i = 1; i <= 25; i++) {
    generatedPhotos.push(generatePhoto(i));
  }
  return generatedPhotos;
}

const photos = generatePhotosData();

export { photos, generatePhoto, generatePhotosData };

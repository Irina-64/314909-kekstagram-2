import { getRandomNumber, getRandomArrayElement } from '../utils/random.js';
import { COMMENT_MESSAGES } from '../data/comments.js';
import { NAMES } from '../data/names.js';

function generateComment(commentId) {
  const messagePartsCount = getRandomNumber(1, 2);
  let message = '';

  for (let i = 0; i < messagePartsCount; i++) {
    message = `${message}${getRandomArrayElement(COMMENT_MESSAGES)} `;
  }

  return {
    id: commentId,
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: message.trim(),
    name: getRandomArrayElement(NAMES)
  };
}

function generateComments(count, startId) {
  const comments = [];
  for (let i = 0; i < count; i++) {
    comments.push(generateComment(startId + i));
  }
  return comments;
}

export { generateComment, generateComments };

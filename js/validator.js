// Валидация хэштегов и описания

import { MAX_HASHTAGS, MAX_DESCRIPTION_LENGTH } from './const.js';

const HashtagRegex = /^#[a-zа-яё0-9]{1,19}$/i;

/**
 * Проверяет валидность хэштегов
 * @param {string} value - строка с хэштегами
 * @returns {Object}
 */
function validateHashtags(value) {
  if (!value.trim()) {
    return { valid: true };
  }

  const hashtags = value.trim().split(/\s+/);

  if (hashtags.length > MAX_HASHTAGS) {
    return {
      valid: false,
      message: `Нельзя указать больше ${MAX_HASHTAGS} хэштегов`
    };
  }

  for (const hashtag of hashtags) {
    if (!HashtagRegex.test(hashtag)) {
      return {
        valid: false,
        message: 'Хэштег должен начинаться с # и содержать только буквы и цифры'
      };
    }
  }

  const lowerHashtags = hashtags.map((tag) => tag.toLowerCase());
  const uniqueHashtags = new Set(lowerHashtags);

  if (uniqueHashtags.size !== lowerHashtags.length) {
    return {
      valid: false,
      message: 'Хэштеги не должны повторяться'
    };
  }

  return { valid: true };
}

/**
 * Проверяет валидность описания
 * @param {string} value - строка описания
 * @returns {Object}
 */
function validateDescription(value) {
  if (value.length > MAX_DESCRIPTION_LENGTH) {
    return {
      valid: false,
      message: `Длина описания не должна превышать ${MAX_DESCRIPTION_LENGTH} символов`
    };
  }

  return { valid: true };
}

export { validateHashtags, validateDescription };

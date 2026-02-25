// Фильтрация фотографий

import { RANDOM_PHOTO_COUNT } from './constants.js';

/**
 * Фильтр по умолчанию
 * @param {Array} photos - массив фотографий
 * @returns {Array}
 */
function filterDefault(photos) {
  return photos;
}

/**
 * Фильтр случайных фотографий
 * @param {Array} photos - массив фотографий
 * @returns {Array}
 */
function filterRandom(photos) {
  const shuffled = [...photos].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, RANDOM_PHOTO_COUNT);
}

/**
 * Фильтр обсуждаемых фотографий
 * @param {Array} photos - массив фотографий
 * @returns {Array}
 */
function filterDiscussed(photos) {
  return [...photos].sort((a, b) => b.comments.length - a.comments.length);
}

const filters = {
  'filter-default': filterDefault,
  'filter-random': filterRandom,
  'filter-discussed': filterDiscussed
};

/**
 * Применяет фильтр к фотографиям
 * @param {string} filterType - тип фильтра
 * @param {Array} photos - массив фотографий
 * @returns {Array}
 */
function applyFilter(filterType, photos) {
  const filter = filters[filterType];
  return filter ? filter(photos) : photos;
}

export { applyFilter, filters };

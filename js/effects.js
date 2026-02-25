// Эффекты для изображений

import { SCALE_STEP, SCALE_MIN, SCALE_MAX } from './constants.js';

const Effects = {
  none: {
    style: 'none',
    min: 0,
    max: 100,
    step: 1
  },
  chrome: {
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1
  },
  sepia: {
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1
  },
  marvin: {
    style: 'invert',
    min: 0,
    max: 100,
    step: 1
  },
  phobos: {
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1
  },
  heat: {
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1
  }
};

/**
 * Применяет эффект к изображению
 * @param {HTMLImageElement} img - элемент изображения
 * @param {string} effectName - название эффекта
 * @param {number} value - значение эффекта
 */
function applyEffect(img, effectName, value) {
  const effect = Effects[effectName];
  if (!effect) {
    img.style.filter = 'none';
    return;
  }

  if (effect.style === 'none') {
    img.style.filter = 'none';
  } else if (effect.style === 'blur') {
    img.style.filter = `${effect.style}(${value}px)`;
  } else if (effect.style === 'brightness') {
    img.style.filter = `${effect.style}(${value})`;
  } else {
    img.style.filter = `${effect.style}(${value})`;
  }
}

/**
 * Изменяет масштаб изображения
 * @param {HTMLImageElement} img - элемент изображения
 * @param {number} scale - текущий масштаб
 * @param {string} direction - направление изменения ('up' или 'down')
 * @returns {number}
 */
function changeScale(img, scale, direction) {
  let newScale = scale;

  if (direction === 'up') {
    newScale = Math.min(scale + SCALE_STEP, SCALE_MAX);
  } else if (direction === 'down') {
    newScale = Math.max(scale - SCALE_STEP, SCALE_MIN);
  }

  img.style.transform = `scale(${newScale})`;
  return newScale;
}

export { Effects, applyEffect, changeScale };

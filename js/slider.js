// Инициализация слайдера для эффектов

import noUiSlider from 'nouislider';

/**
 * Инициализирует слайдер эффектов
 * @param {HTMLElement} container - контейнер слайдера
 * @param {Object} options - опции слайдера
 * @param {Function} onUpdate - callback при изменении значения
 * @returns {Object}
 */
function initEffectSlider(container, options, onUpdate) {
  noUiSlider.create(container, {
    range: {
      min: options.min,
      max: options.max
    },
    start: options.max,
    step: options.step,
    connect: 'lower'
  });

  container.noUiSlider.on('update', (values) => {
    onUpdate(parseFloat(values[0]));
  });

  return container.noUiSlider;
}

/**
 * Уничтожает слайдер
 * @param {HTMLElement} container - контейнер слайдера
 */
function destroyEffectSlider(container) {
  if (container.noUiSlider) {
    container.noUiSlider.destroy();
  }
}

export { initEffectSlider, destroyEffectSlider };

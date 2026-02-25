// Утилиты

/**
 * Возвращает случайное число в диапазоне
 * @param {number} min - минимальное значение
 * @param {number} max - максимальное значение
 * @returns {number}
 */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Возвращает случайный элемент массива
 * @param {Array} array - массив элементов
 * @returns {*}
 */
function getRandomArrayElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Создаёт debounced функцию
 * @param {Function} callback - функция для вызова
 * @param {number} timeoutDelay - задержка в мс
 * @returns {Function}
 */
function debounce(callback, timeoutDelay) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

/**
 * Создаёт throttled функцию
 * @param {Function} callback - функция для вызова
 * @param {number} timeoutDelay - задержка в мс
 * @returns {Function}
 */
function throttle(callback, timeoutDelay) {
  let isThrottled = false;
  let savedArgs = null;
  let savedThis = null;

  return function (...rest) {
    if (isThrottled) {
      savedArgs = rest;
      savedThis = this;
      return;
    }

    callback.apply(this, rest);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (savedThis) {
        callback.apply(savedThis, savedArgs);
        savedThis = null;
        savedArgs = null;
      }
    }, timeoutDelay);
  };
}

export { getRandomNumber, getRandomArrayElement, debounce, throttle };

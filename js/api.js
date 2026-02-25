// API для работы с сервером

import { API_URL } from './constants.js';

/**
 * Загружает данные с сервера
 * @param {string} endpoint - эндпоинт API
 * @returns {Promise}
 */
function loadData(endpoint) {
  return fetch(`${API_URL}/${endpoint}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
}

/**
 * Отправляет данные на сервер
 * @param {string} endpoint - эндпоинт API
 * @param {FormData} body - данные формы
 * @returns {Promise}
 */
function sendData(endpoint, body) {
  return fetch(`${API_URL}/${endpoint}`, {
    method: 'POST',
    body
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
}

export { loadData, sendData };

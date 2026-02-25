// Отрисовка фотографий

import { createPhoto } from './model.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;

/**
 * Отрисовывает список фотографий
 * @param {Array} photos - массив данных фотографий
 */
function renderPhotos(photos) {
  const photoElements = photos.map((photoData) => {
    const photo = createPhoto(photoData);
    const photoElement = pictureTemplate.cloneNode(true);
    const pictureElement = photoElement.querySelector('.picture');

    pictureElement.querySelector('.picture__img').src = photo.url;
    pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = photo.likes;

    return pictureElement;
  });

  picturesContainer.append(...photoElements);
}

/**
 * Очищает контейнер с фотографиями
 */
function clearPhotos() {
  const photoElements = picturesContainer.querySelectorAll('.picture');
  photoElements.forEach((element) => element.remove());
}

export { renderPhotos, clearPhotos };

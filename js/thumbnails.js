// Модуль отрисовки миниатюр фотографий

import { photos } from './main.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;

/**
 * Создаёт DOM-элемент миниатюры фотографии
 * @param {Object} photo - объект фотографии
 * @returns {HTMLElement}
 */
function createPictureElement(photo) {
  const pictureElement = pictureTemplate.cloneNode(true).querySelector('.picture');

  const img = pictureElement.querySelector('.picture__img');
  img.src = photo.url;
  img.alt = photo.description;

  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;

  return pictureElement;
}

/**
 * Отрисовывает миниатюры фотографий на странице
 */
function renderPictures() {
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const pictureElement = createPictureElement(photo);
    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
}

export { renderPictures };

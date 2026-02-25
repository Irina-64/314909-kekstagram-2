// Обработчики событий для полноэкранного просмотра

import { initPictureModal, openPicture } from '../view/picture-modal-view.js';
import { renderComments, clearComments } from '../view/comments-view.js';

/**
 * Инициализирует просмотр фотографий
 * @param {Array} photos - массив фотографий
 */
function initPictureViewer(photos) {
  const picturesContainer = document.querySelector('.pictures');
  const commentsLoader = document.querySelector('.comments-loader');
  let currentPhoto = null;
  let shownComments = 5;

  initPictureModal(() => {
    currentPhoto = null;
    shownComments = 5;
  });

  picturesContainer.addEventListener('click', (evt) => {
    const pictureElement = evt.target.closest('.picture');
    if (pictureElement) {
      evt.preventDefault();
      const index = Array.from(picturesContainer.querySelectorAll('.picture')).indexOf(pictureElement);
      currentPhoto = photos[index];
      openPicture(currentPhoto);
      clearComments();
      renderComments(currentPhoto.comments.slice(0, shownComments), shownComments);
    }
  });

  commentsLoader.addEventListener('click', () => {
    if (currentPhoto) {
      shownComments += 5;
      const visibleComments = currentPhoto.comments.slice(0, shownComments);
      renderComments(visibleComments, shownComments);

      if (shownComments >= currentPhoto.comments.length) {
        commentsLoader.classList.add('hidden');
      }
    }
  });
}

export { initPictureViewer };

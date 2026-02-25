// Модальное окно полноэкранного просмотра

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const bigPictureCaption = bigPicture.querySelector('.social__caption');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureComments = bigPicture.querySelector('.social__comments');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');

/**
 * Открывает модальное окно с фотографией
 * @param {Object} photo - объект фотографии
 */
function openPicture(photo) {
  bigPictureImg.src = photo.url;
  bigPictureCaption.textContent = photo.description;
  bigPictureLikes.textContent = photo.likes;
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

/**
 * Закрывает модальное окно
 */
function closePicture() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  bigPictureComments.innerHTML = '';
}

/**
 * Инициализирует обработчики закрытия
 * @param {Function} onClose - callback при закрытии
 */
function initPictureModal(onClose) {
  bigPictureCancel.addEventListener('click', () => {
    closePicture();
    onClose();
  });

  bigPicture.addEventListener('click', (evt) => {
    if (evt.target === bigPicture) {
      closePicture();
      onClose();
    }
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' && !bigPicture.classList.contains('hidden')) {
      evt.preventDefault();
      closePicture();
      onClose();
    }
  });
}

export { openPicture, closePicture, initPictureModal };

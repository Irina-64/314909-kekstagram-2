// Модуль отрисовки полноразмерного изображения

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const bigPictureCaption = bigPicture.querySelector('.social__caption');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureCommentShown = bigPicture.querySelector('.social__comment-shown-count');
const bigPictureCommentTotal = bigPicture.querySelector('.social__comment-total-count');
const bigPictureComments = bigPicture.querySelector('.social__comments');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

/**
 * Отрисовывает комментарии к фотографии
 * @param {Array} comments - массив комментариев
 */
function renderComments(comments) {
  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');

    const avatarImg = document.createElement('img');
    avatarImg.classList.add('social__picture');
    avatarImg.src = comment.avatar;
    avatarImg.alt = comment.name;
    avatarImg.width = 35;
    avatarImg.height = 35;

    const commentText = document.createElement('p');
    commentText.classList.add('social__text');
    commentText.textContent = comment.message;

    commentElement.appendChild(avatarImg);
    commentElement.appendChild(commentText);
    fragment.appendChild(commentElement);
  });

  bigPictureComments.appendChild(fragment);
}

/**
 * Открывает полноразмерное изображение
 * @param {Object} photo - объект фотографии
 */
function openPicture(photo) {
  bigPictureImg.src = photo.url;
  bigPictureCaption.textContent = photo.description;
  bigPictureLikes.textContent = photo.likes;
  bigPictureCommentShown.textContent = photo.comments.length;
  bigPictureCommentTotal.textContent = photo.comments.length;

  bigPictureComments.innerHTML = '';
  renderComments(photo.comments);

  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

/**
 * Закрывает полноразмерное изображение
 */
function closePicture() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

/**
 * Инициализирует обработчики закрытия
 * @param {Function} onClose - callback при закрытии
 */
function initPictureModal(onClose) {
  bigPictureCancel.addEventListener('click', () => {
    closePicture();
    if (onClose) {
      onClose();
    }
  });

  bigPicture.addEventListener('click', (evt) => {
    if (evt.target === bigPicture) {
      closePicture();
      if (onClose) {
        onClose();
      }
    }
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' && !bigPicture.classList.contains('hidden')) {
      evt.preventDefault();
      closePicture();
      if (onClose) {
        onClose();
      }
    }
  });
}

export { openPicture, closePicture, initPictureModal };

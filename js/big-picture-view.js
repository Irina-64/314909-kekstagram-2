// Модуль отрисовки полноразмерного изображения

const SELECTORS = {
  bigPicture: '.big-picture',
  bigPictureImg: '.big-picture__img img',
  bigPictureCaption: '.social__caption',
  bigPictureLikes: '.likes-count',
  bigPictureCommentShown: '.social__comment-shown-count',
  bigPictureCommentTotal: '.social__comment-total-count',
  bigPictureComments: '.social__comments',
  bigPictureCancel: '.big-picture__cancel',
  socialCommentCount: '.social__comment-count',
  commentsLoader: '.comments-loader'
};

/**
 * Получает элементы модального окна
 * @returns {Object|null}
 */
function getElements() {
  const bigPicture = document.querySelector(SELECTORS.bigPicture);
  if (!bigPicture) {
    return null;
  }
  return {
    bigPicture,
    bigPictureImg: bigPicture.querySelector(SELECTORS.bigPictureImg),
    bigPictureCaption: bigPicture.querySelector(SELECTORS.bigPictureCaption),
    bigPictureLikes: bigPicture.querySelector(SELECTORS.bigPictureLikes),
    bigPictureCommentShown: bigPicture.querySelector(SELECTORS.bigPictureCommentShown),
    bigPictureCommentTotal: bigPicture.querySelector(SELECTORS.bigPictureCommentTotal),
    bigPictureComments: bigPicture.querySelector(SELECTORS.bigPictureComments),
    bigPictureCancel: bigPicture.querySelector(SELECTORS.bigPictureCancel),
    socialCommentCount: bigPicture.querySelector(SELECTORS.socialCommentCount),
    commentsLoader: bigPicture.querySelector(SELECTORS.commentsLoader)
  };
}

/**
 * Отрисовывает комментарии к фотографии
 * @param {Object} elements - элементы модального окна
 * @param {Array} comments - массив комментариев
 */
function renderComments(elements, comments) {
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

  elements.bigPictureComments.appendChild(fragment);
}

/**
 * Открывает полноразмерное изображение
 * @param {Object} photo - объект фотографии
 */
function openPicture(photo) {
  const elements = getElements();
  if (!elements) {
    return;
  }

  elements.bigPictureImg.src = photo.url;
  elements.bigPictureCaption.textContent = photo.description;
  elements.bigPictureLikes.textContent = photo.likes;
  elements.bigPictureCommentShown.textContent = photo.comments.length;
  elements.bigPictureCommentTotal.textContent = photo.comments.length;

  elements.bigPictureComments.innerHTML = '';
  renderComments(elements, photo.comments);

  elements.socialCommentCount.classList.add('hidden');
  elements.commentsLoader.classList.add('hidden');

  elements.bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

/**
 * Закрывает полноразмерное изображение
 */
function closePicture() {
  const elements = getElements();
  if (!elements) {
    return;
  }

  elements.bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  elements.bigPictureComments.innerHTML = '';
}

/**
 * Инициализирует обработчики закрытия
 * @param {Function} onClose - callback при закрытии
 */
function initPictureModal(onClose) {
  const elements = getElements();
  if (!elements) {
    return;
  }

  elements.bigPictureCancel.addEventListener('click', () => {
    closePicture();
    if (onClose) {
      onClose();
    }
  });

  elements.bigPicture.addEventListener('click', (evt) => {
    if (evt.target === elements.bigPicture) {
      closePicture();
      if (onClose) {
        onClose();
      }
    }
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' && !elements.bigPicture.classList.contains('hidden')) {
      evt.preventDefault();
      closePicture();
      if (onClose) {
        onClose();
      }
    }
  });
}

export { openPicture, closePicture, initPictureModal };

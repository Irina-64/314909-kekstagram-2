// Модальное окно загрузки изображения

const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');
const uploadFile = document.querySelector('#upload-file');
const uploadPreview = uploadOverlay.querySelector('.img-upload__preview img');
const uploadEffectsPreviews = uploadOverlay.querySelectorAll('.effects__preview');

/**
 * Открывает модальное окно загрузки
 * @param {File} file - файл изображения
 */
function openUpload(file) {
  const imageUrl = URL.createObjectURL(file);
  uploadPreview.src = imageUrl;
  uploadEffectsPreviews.forEach((preview) => {
    preview.style.backgroundImage = `url(${imageUrl})`;
  });
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

/**
 * Закрывает модальное окно загрузки
 */
function closeUpload() {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadFile.value = '';
  uploadPreview.src = 'img/upload-default-image.jpg';
  uploadEffectsPreviews.forEach((preview) => {
    preview.style.backgroundImage = '';
  });
}

/**
 * Инициализирует обработчики закрытия
 * @param {Function} onClose - callback при закрытии
 */
function initUploadModal(onClose) {
  uploadCancel.addEventListener('click', () => {
    closeUpload();
    onClose();
  });

  uploadOverlay.addEventListener('click', (evt) => {
    if (evt.target === uploadOverlay) {
      closeUpload();
      onClose();
    }
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' && !uploadOverlay.classList.contains('hidden')) {
      const activeElement = document.activeElement;
      const isTextArea = activeElement.tagName === 'TEXTAREA';
      const isInput = activeElement.tagName === 'INPUT';

      if (!isTextArea && !isInput) {
        evt.preventDefault();
        closeUpload();
        onClose();
      }
    }
  });
}

export { openUpload, closeUpload, initUploadModal };

// Обработчики событий для формы загрузки

import { openUpload } from '../view/upload-modal-view.js';
import { validateHashtags, validateDescription } from '../validator.js';
import { sendData } from '../api.js';
import { showSuccess, showError } from '../view/notifications-view.js';

/**
 * Инициализирует форму загрузки
 * @param {Function} onClose - callback при закрытии формы
 */
function initUploadForm(onClose) {
  const uploadFile = document.querySelector('#upload-file');
  const uploadForm = document.querySelector('.img-upload__form');
  const uploadPreview = uploadForm.querySelector('.img-upload__preview img');
  const effectsRadios = uploadForm.querySelectorAll('.effects__radio');
  const scaleSmaller = uploadForm.querySelector('.scale__control--smaller');
  const scaleBigger = uploadForm.querySelector('.scale__control--bigger');
  const scaleValue = uploadForm.querySelector('.scale__control--value');
  const hashtagsInput = uploadForm.querySelector('.text__hashtags');
  const descriptionInput = uploadForm.querySelector('.text__description');
  const submitButton = uploadForm.querySelector('.img-upload__submit');

  let currentScale = 1;

  // Открытие формы при выборе файла
  uploadFile.addEventListener('change', (evt) => {
    const file = evt.target.files[0];
    if (file) {
      openUpload(file);
    }
  });

  // Выбор эффекта
  effectsRadios.forEach((radio) => {
    radio.addEventListener('change', () => {
      // Здесь будет логика переключения слайдера
    });
  });

  // Изменение масштаба
  scaleSmaller.addEventListener('click', () => {
    currentScale = Math.max(currentScale - 0.25, 0.25);
    scaleValue.value = `${currentScale * 100}%`;
    uploadPreview.style.transform = `scale(${currentScale})`;
  });

  scaleBigger.addEventListener('click', () => {
    currentScale = Math.min(currentScale + 0.25, 1);
    scaleValue.value = `${currentScale * 100}%`;
    uploadPreview.style.transform = `scale(${currentScale})`;
  });

  // Валидация формы
  uploadForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    const hashtagsValue = hashtagsInput.value;
    const descriptionValue = descriptionInput.value;

    const hashtagsValidation = validateHashtags(hashtagsValue);
    const descriptionValidation = validateDescription(descriptionValue);

    if (!hashtagsValidation.valid) {
      // Показать ошибку валидации хэштегов
      return;
    }

    if (!descriptionValidation.valid) {
      // Показать ошибку валидации описания
      return;
    }

    // Блокировка кнопки отправки
    submitButton.disabled = true;

    try {
      const formData = new FormData(uploadForm);
      await sendData('upload', formData);
      showSuccess(() => {
        onClose();
      });
    } catch (error) {
      showError(() => {
        onClose();
      });
    } finally {
      submitButton.disabled = false;
    }
  });
}

export { initUploadForm };

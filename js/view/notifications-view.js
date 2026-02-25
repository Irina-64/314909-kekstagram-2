// Отрисовка уведомлений

const errorTemplate = document.querySelector('#error').content;
const successTemplate = document.querySelector('#success').content;
const dataErrorTemplate = document.querySelector('#data-error').content;

/**
 * Показывает уведомление об ошибке загрузки файла
 * @param {Function} onClose - callback для закрытия
 */
function showError(onClose) {
  const errorElement = errorTemplate.cloneNode(true);
  document.body.append(errorElement);

  const closeButton = errorElement.querySelector('.error__button');
  closeButton.addEventListener('click', () => {
    errorElement.remove();
    onClose();
  });

  document.addEventListener('keydown', handleEscKey);

  function handleEscKey(evt) {
    if (evt.key === 'Escape') {
      errorElement.remove();
      document.removeEventListener('keydown', handleEscKey);
      onClose();
    }
  }
}

/**
 * Показывает уведомление об успешной загрузке
 * @param {Function} onClose - callback для закрытия
 */
function showSuccess(onClose) {
  const successElement = successTemplate.cloneNode(true);
  document.body.append(successElement);

  const closeButton = successElement.querySelector('.success__button');
  closeButton.addEventListener('click', () => {
    successElement.remove();
    onClose();
  });

  document.addEventListener('keydown', handleEscKey);

  function handleEscKey(evt) {
    if (evt.key === 'Escape') {
      successElement.remove();
      document.removeEventListener('keydown', handleEscKey);
      onClose();
    }
  }
}

/**
 * Показывает уведомление об ошибке загрузки данных
 */
function showDataError() {
  const dataErrorElement = dataErrorTemplate.cloneNode(true);
  document.body.append(dataErrorElement);

  setTimeout(() => {
    dataErrorElement.remove();
  }, 5000);
}

export { showError, showSuccess, showDataError };

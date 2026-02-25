// Главный модуль приложения

import { loadData } from './api.js';
import { showDataError } from './view/notifications-view.js';
import { renderPhotos } from './view/photos-view.js';
import { initFilters } from './controller/filters-controller.js';
import { initPictureViewer } from './controller/picture-viewer-controller.js';
import { initUploadForm } from './controller/upload-form-controller.js';
import { initUploadModal, closeUpload } from './view/upload-modal-view.js';

/**
 * Инициализирует приложение
 */
function init() {
  // Инициализация модального окна загрузки
  initUploadModal(() => {
    closeUpload();
  });

  // Инициализация формы загрузки
  initUploadForm(() => {
    closeUpload();
  });

  // Загрузка данных с сервера
  loadData('data')
    .then((photos) => {
      renderPhotos(photos);
      initFilters(photos, () => {
        // Фильтр изменён
      });
      initPictureViewer(photos);
    })
    .catch(() => {
      showDataError();
    });
}

export { init };

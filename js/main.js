// Точка входа в приложение

import { photos, generatePhotosData } from './models/photo.js';
import { renderPictures } from './thumbnails.js';
import { initGallery } from './gallery.js';

// Отрисовка миниатюр
renderPictures(photos);

// Инициализация галереи
initGallery(photos);

// Экспорт для использования в других модулях
export { photos, generatePhotosData };

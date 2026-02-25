// Точка входа в приложение

import { photos } from './models/photo.js';
import { renderPictures } from './thumbnails.js';

renderPictures();

// Экспорт для использования в других модулях
export { photos };

// Обработчики событий для фильтров

import { applyFilter } from '../filter.js';
import { renderPhotos, clearPhotos } from '../view/photos-view.js';
import { debounce } from '../util.js';
import { DEBOUNCE_DELAY } from '../const.js';

/**
 * Инициализирует фильтры фотографий
 * @param {Array} photos - массив фотографий
 * @param {Function} onFilterChange - callback при изменении фильтра
 */
function initFilters(photos, onFilterChange) {
  const filtersForm = document.querySelector('.img-filters__form');
  const filterButtons = filtersForm.querySelectorAll('.img-filters__button');
  let currentFilter = 'filter-default';

  const debouncedRender = debounce((filteredPhotos) => {
    clearPhotos();
    renderPhotos(filteredPhotos);
  }, DEBOUNCE_DELAY);

  filterButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      const target = evt.target;
      if (target.classList.contains('img-filters__button')) {
        // Переключение активного класса
        filterButtons.forEach((btn) => btn.classList.remove('img-filters__button--active'));
        target.classList.add('img-filters__button--active');

        const filterType = target.id;
        if (filterType !== currentFilter) {
          currentFilter = filterType;
          const filteredPhotos = applyFilter(filterType, photos);
          debouncedRender(filteredPhotos);
          onFilterChange(filterType);
        }
      }
    });
  });
}

export { initFilters };

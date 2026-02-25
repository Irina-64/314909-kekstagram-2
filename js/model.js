// Модель данных

/**
 * Создаёт объект фотографии
 * @param {Object} data - данные с сервера
 * @returns {Object}
 */
function createPhoto(data) {
  return {
    id: data.id,
    url: data.url,
    description: data.description,
    likes: data.likes,
    comments: data.comments.map(createComment)
  };
}

/**
 * Создаёт объект комментария
 * @param {Object} data - данные комментария
 * @returns {Object}
 */
function createComment(data) {
  return {
    id: data.id,
    avatar: data.avatar,
    message: data.message,
    name: data.name
  };
}

export { createPhoto, createComment };

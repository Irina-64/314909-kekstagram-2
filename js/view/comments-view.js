// Отрисовка комментариев

const socialCommentsList = document.querySelector('.social__comments');
const socialCommentTemplate = document.querySelector('.social__comment');
const socialCommentShownCount = document.querySelector('.social__comment-shown-count');
const socialCommentTotalCount = document.querySelector('.social__comment-total-count');

/**
 * Отрисовывает комментарии
 * @param {Array} comments - массив комментариев
 * @param {number} shownCount - количество показанных комментариев
 */
function renderComments(comments, shownCount) {
  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const commentElement = socialCommentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;
    fragment.appendChild(commentElement);
  });

  socialCommentsList.appendChild(fragment);
  socialCommentShownCount.textContent = shownCount;
  socialCommentTotalCount.textContent = comments.length;
}

/**
 * Очищает список комментариев
 */
function clearComments() {
  socialCommentsList.innerHTML = '';
}

export { renderComments, clearComments };

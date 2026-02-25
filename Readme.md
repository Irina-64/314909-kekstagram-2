# Личный проект «Кекстаграм»

* Студент: [Ирина Трубчик](https://up.htmlacademy.ru/javascript-individual/2/user/314909).
* Наставник: `Денис Лопатин`.

---

_Не удаляйте и не изменяйте самовольно файлы и папки:_
_`.editorconfig`, `.eslintrc`, `.gitattributes`, `.gitignore`, `package-lock.json`, `package.json`., `.github`_

---

[Как работать с Git на проекте](Contributing.md) | [Как работать над проектом](Workflow.md)

### задание 7.15. Отрисуй меня полностью

Модуль отрисовки миниатюр создан и подключён:

Структура thumbnails.js:

createPictureElement(photo) — создаёт DOM-элемент миниатюры
renderPictures() — отрисовывает все миниатюры в .pictures через DocumentFragment
Что делает:

Берёт данные из массива photos
Для каждой фотографии создаёт клон шаблона #picture
Заполняет:
src ← photo.url
alt ← photo.description
.picture__comments ← photo.comments.length
.picture__likes ← photo.likes
Вставляет все элементы через DocumentFragment
Результат:

✅ ESLint: 0 ошибок
✅ Тесты: 16 passed
---

<a href="https://htmlacademy.ru/intensive/javascript"><img align="left" width="50" height="50" alt="HTML Academy" src="https://up.htmlacademy.ru/static/img/intensive/javascript/logo-for-github-2.png"></a>

Репозиторий создан для обучения на интенсивном онлайн‑курсе «[JavaScript. Профессиональная разработка веб-интерфейсов](https://htmlacademy.ru/intensive/javascript)» от [HTML Academy](https://htmlacademy.ru).

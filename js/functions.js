/* eslint-disable no-unused-vars */

// Функция для проверки длины строки
function isStringLengthValid(str, maxLength) {
  return str.length <= maxLength;
}

// Функция для извлечения цифр из строки
function extractDigits(value) {
  const strValue = String(value);
  const digits = strValue.replace(/[^0-9]/g, '');
  if (digits === '') {
    return NaN;
  }
  return parseInt(digits, 10);
}

/**
 * Преобразует строку времени в минуты от начала суток
 * @param {string} time - время в формате "чч:мм"
 * @returns {number} количество минут
 */
function timeToMinutes(time) {
  const parts = time.split(':');
  const hours = parseInt(parts[0], 10);
  const minutes = parseInt(parts[1], 10);
  return hours * 60 + minutes;
}

/**
 * Проверяет, помещается ли встреча в рабочее время
 * @param {string} workStart - начало рабочего дня
 * @param {string} workEnd - конец рабочего дня
 * @param {string} meetingStart - начало встречи
 * @param {number} meetingDuration - продолжительность встречи в минутах
 * @returns {boolean}
 */
function isMeetingFitsWorkTime(workStart, workEnd, meetingStart, meetingDuration) {
  const workStartMinutes = timeToMinutes(workStart);
  const workEndMinutes = timeToMinutes(workEnd);
  const meetingStartMinutes = timeToMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  return meetingStartMinutes >= workStartMinutes &&
    meetingEndMinutes <= workEndMinutes;
}

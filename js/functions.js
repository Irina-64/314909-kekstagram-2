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

export { isStringLengthValid, extractDigits };

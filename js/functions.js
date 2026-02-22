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

function runTests() {
  console.group('Тесты isStringLengthValid');

// Строка короче 20 символов
  console.assert(
    isStringLengthValid('проверяемая строка', 20) === true,
    'Строка короче 20 символов должна вернуть true');

// Длина строки ровно 18 символов
  console.assert(
    isStringLengthValid('проверяемая строка', 18) === true,
    'Строка длиной 18 символов должна вернуть true'
  );

// Строка длиннее 10 символов
  console.assert(
    isStringLengthValid('проверяемая строка', 10) === false,
    'Строка длиннее 10 символов должна вернуть false'
  );

  console.groupEnd();

  console.group('Тесты extractDigits');

// Строки с цифрами
  console.assert(
    extractDigits('2023 год') === 2023,
    '2023 год должен вернуть 2023'
  );

  console.assert(
    extractDigits('ECMAScript 2022') === 2022,
    'ECMAScript 2022 должен вернуть 2022'
  );

  console.assert(
    extractDigits('1 кефир, 0.5 батона') === 105,
    '1 кефир, 0.5 батона должен вернуть 105'
  );

  console.assert(
    extractDigits('агент 007') === 7,
    'агент 007 должен вернуть 7'
  );

// Строка без цифр
  console.assert(
    Number.isNaN(extractDigits('а я томат')),
    'а я томат должен вернуть NaN'
  );

// Числа вместо строки
  console.assert(
    extractDigits(2023) === 2023,
    '2023 должен вернуть 2023'
  );

  console.assert(
    extractDigits(-1) === 1,
    '-1 должен вернуть 1'
  );

  console.assert(
    extractDigits(1.5) === 15,
    '1.5 должен вернуть 15'
  );

  console.groupEnd();

  console.log('Все тесты завершены!');
}

runTests();

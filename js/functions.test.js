import { isStringLengthValid, extractDigits } from './functions.js';

describe('isStringLengthValid', () => {
  test('строка короче maxLength должна вернуть true', () => {
    expect(isStringLengthValid('проверяемая строка', 20)).toBe(true);
  });

  test('строка длиной ровно maxLength должна вернуть true', () => {
    expect(isStringLengthValid('проверяемая строка', 18)).toBe(true);
  });

  test('строка длиннее maxLength должна вернуть false', () => {
    expect(isStringLengthValid('проверяемая строка', 10)).toBe(false);
  });
});

describe('extractDigits', () => {
  test('извлекает цифры из строки с годом', () => {
    expect(extractDigits('2023 год')).toBe(2023);
  });

  test('извлекает цифры из строки с версией', () => {
    expect(extractDigits('ECMAScript 2022')).toBe(2022);
  });

  test('извлекает цифры из строки с несколькими числами', () => {
    expect(extractDigits('1 кефир, 0.5 батона')).toBe(105);
  });

  test('извлекает цифры из строки с ведущими нулями', () => {
    expect(extractDigits('агент 007')).toBe(7);
  });

  test('строка без цифр возвращает NaN', () => {
    expect(extractDigits('а я томат')).toBeNaN();
  });

  test('число возвращает себя', () => {
    expect(extractDigits(2023)).toBe(2023);
  });

  test('отрицательное число возвращает абсолютное значение', () => {
    expect(extractDigits(-1)).toBe(1);
  });

  test('число с плавающей точкой возвращает все цифры', () => {
    expect(extractDigits(1.5)).toBe(15);
  });
});

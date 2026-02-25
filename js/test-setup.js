// Setup файл для тестов functions.js
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import vm from 'vm';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Читаем и выполняем functions.js в глобальном контексте
const functionsPath = join(__dirname, 'functions.js');
const functionsCode = readFileSync(functionsPath, 'utf-8');

// Создаём контекст для выполнения
const script = new vm.Script(functionsCode);
const context = vm.createContext({
  console,
  setTimeout,
  clearTimeout,
  setInterval,
  clearInterval,
  setImmediate,
  clearImmediate,
  Buffer,
  process
});

// Выполняем скрипт в контексте
script.runInContext(context);

// Копируем функции в global
global.isStringLengthValid = context.isStringLengthValid;
global.extractDigits = context.extractDigits;
global.isMeetingFitsWorkTime = context.isMeetingFitsWorkTime;
global.timeToMinutes = context.timeToMinutes;

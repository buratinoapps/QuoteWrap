const fs = require('fs');

// Читаем слова из файла
const words = fs.readFileSync('words.txt', 'utf8')
    .split(/\s+/) // Разделяем по пробелам и переносам строк
    .filter(word => word.trim() !== ''); // Убираем пустые строки

// Форматируем слова в двойные кавычки и через запятую
const formattedWords = words.map(word => "${word}").join(", ");

// Записываем результат в файл
fs.writeFileSync('formatted_words.txt', formattedWords, 'utf8');

console.log('Файл formatted_words.txt создан!');
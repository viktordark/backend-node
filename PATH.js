const path = require('path')
const fs = require('fs')

console.log(__filename); 
console.log(__dirname);

console.log(path.isAbsolute(__filename)) //Метод path.isAbsolute() визначає, чи є шлях абсолютним шляхом.
console.log(path.isAbsolute('a//a'))

console.log(path.dirname(__filename)) //Метод path.dirname() повертає назву каталогу шляху

console.log(path.extname(__filename)) //Метод path.extname() повертає розширення шляху

console.log(path.resolve('tasty.txt')) //Метод path.resolve() перетворює послідовність шляхів або сегментів шляху в абсолютний шлях.

fs.mkdir(path.resolve('static'), (err) => { //Асинхронно створює каталог.
    if (err) throw err;
  });

fs.appendFile('tasty.txt', 'test', (err) => { //Асинхронно додає дані до файлу, створюючи файл, якщо він ще не існує.
    if (err) throw err;
  });

fs.readFile(path.resolve('tasty.txt'), (err, data) => { //Асинхронно читає весь вміст файлу.
  if (err) throw err;
  console.log(data);
});
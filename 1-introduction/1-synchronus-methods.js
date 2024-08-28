// Para acceder al filesystem y poder leer y escribir archivos, necesitamos importar el módulo fs.
const fs = require('fs');

// Para leer un archivo, utilizamos la función readFileSync del módulo fs. Esta función recibe dos parámetros: el primero es la ruta del archivo que queremos leer y el segundo es el formato en el que queremos leerlo. En este caso, vamos a leer un archivo de texto, por lo que el segundo parámetro será 'utf-8'.
// Con este método, la lectura se hace de manera síncrona, es decir, un archivo tras otro, línea por línea.
const readTextSync = fs.readFileSync('./text/1-text.txt', 'utf-8');
console.log(readTextSync);

// Para escribir un archivo, utilizamos la función writeFileSync del módulo fs. Esta función recibe tres parámetros: el primero es la ruta del archivo que queremos escribir, el segundo es el contenido que queremos escribir y el tercero es el formato en el que queremos escribirlo.
fs.writeFileSync('./text/2-text.txt', 'El aguacate posee propiedades antioxidantes que mejoran la circulación, y un elevado valor nutritivo.', 'utf-8');
console.log('Archivo escrito correctamente.');


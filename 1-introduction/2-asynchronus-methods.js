// Para acceder al filesystem y poder leer y escribir archivos, necesitamos importar el módulo fs.
const fs = require('fs');

// Para leer un archivo, utilizamos la función readFile del módulo fs. Esta función recibe tres parámetros: el primero es la ruta del archivo que queremos leer, el segundo el encoding y el tercero es una función de callback con respuesta y error.
// Con este método, la lectura se hace de manera asíncrona, es decir, varios archivos a la vez.
// De hecho, podemos ver que se ejecuta primero el console.log('Leyendo archivo...') y luego el contenido del archivo.
fs.readFile('./text/1-text.txt', 'utf-8', (e, data1) => {
    console.log(data1);
});

// A continuación, hacemos un ejemplo de hilado de funciones asíncronas con callbacks con pasos secuenciales.
// En este caso, leemos el archivo 2-text.txt y luego el archivo 3-text.txt. Por último, escribimos el contenido de ambos archivos en un nuevo archivo 4-text.txt.
// Además, ejemplificamos como se añaden errores.
fs.readFile('./text/2-text.txt', 'utf-8', (e, data2) => {
    if (e) return console.log('Error al leer el archivo.');;
    console.log(data2);
    fs.readFile('./text/3-text.txt', 'utf-8', (e, data3) => {
        if (e) return console.log('Error al leer el archivo.');;
        console.log(data3);
        fs.writeFile('./text/4-text.txt', `${data2}\n${data3}`, 'utf-8', e => {
            if (e) return console.log('Error al escribir el archivo.');;
            console.log('Archivo escrito correctamente.');
        });
    });
});

console.log('Leyendo programa...');
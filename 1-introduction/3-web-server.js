// El móulo http nos permite crear un servidor web.
const http = require('http');

// Para crear un servidor web, utilizamos la función createServer del módulo http. Esta función recibe un callback con dos parámetros: req y res, que son la petición y la respuesta, respectivamente.
// El método end de la respuesta finaliza la comunicación con el cliente.
const server = http.createServer((req, res) => {
    res.end('Mensaje de prueba.');
})

// Para que el servidor escuche en un puerto específico, utilizamos el método listen. Este método recibe tres parámetros: el puerto, la dirección IP y un callback. El callback se ejecuta una vez que el servidor está escuchando.
server.listen(3007, 'localhost', () => {
    console.log('Servidor escuchando en el puerto 3007...');
});
# Comandos Básicos de Node.js

## Comandos principales

### `node`

- **Función**: Inicia el entorno de ejecución de Node.js.
- **Uso básico**:
  - `node` - Inicia el REPL (Read-Eval-Print Loop) interactivo.
  - `node archivo.js` - Ejecuta el archivo JavaScript especificado.
- **Ejemplo**:

  ```js
  $ node
  > console.log('Hola Mundo')
  Hola Mundo
  ```

### `.exit`

- **Función**: Sale del entorno REPL de Node.js.
- **Alternativas**: También puedes presionar Ctrl+C dos veces o Ctrl+D una vez.
- **Ejemplo**:

  ```js
  > .exit
  ```

### Tab (Tabulación)

- **Función**: Proporciona autocompletado de comandos y propiedades.
- **Uso**:
  - Presiona Tab después de escribir parte de un comando o método.
  - Muestra todas las propiedades disponibles de un objeto.
- **Ejemplo**:

  ```js
  > console. [presiona Tab]
  // Mostrará todas las propiedades y métodos del objeto console
  ```

### Buscar ayuda

- **Función**: Muestra la ayuda del REPL de Node.js.
- **Comandos**:
  - `.help` - Muestra todos los comandos disponibles en el REPL.
  - `node --help` - Muestra todas las opciones de línea de comandos.
- **Ejemplo**:
  
  ```js
  > .help
  ```

### `.break`

- **Función**: Cuando estás escribiendo una expresión de múltiples líneas, este comando permite cancelarla.

### `.clear`

- **Función**: Reinicia el contexto del REPL (borra todas las variables y funciones definidas).

### `.save`

- **Función**: Guarda la sesión actual a un archivo.
- **Ejemplo**: `.save ./mi_sesion.js`

### `.load`

- **Función**: Carga un archivo en la sesión actual.
- **Ejemplo**: `.load ./mi_script.js`

### Evaluar expresiones

- **Función**: El REPL de Node.js permite evaluar expresiones JavaScript directamente.
- **Ejemplo**:

  ```js
  > 2 + 2
  4
  > let nombre = "Desarrollador"
  undefined
  > console.log(`Hola, ${nombre}!`)
  Hola, Desarrollador!
  ```

## Recomendaciones

- Usa el REPL para probar rápidamente código JavaScript.
- Aprovecha el autocompletado con Tab para descubrir métodos y propiedades.
- Explora los módulos integrados como `fs`, `http`, `path`, etc.
- Utiliza `.help` cuando necesites recordar los comandos disponibles.

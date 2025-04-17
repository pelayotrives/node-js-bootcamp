const fs = require('fs');
const http = require('http');

/** 
 * 
 * @description
 * This is a simple Node.js script that reads from an input text file, processes the content, and writes the output to another text file. 
 * It's synchronous (blocking), meaning it will block the execution until the file operations are completed.
 * Node.js is single-threaded, so synchronous operations can block the event loop. A thread is basically a sequence of instructions that can be managed independently by a scheduler.
 * 
 * @note
 * 1. It reads the content of 'input.txt' using the 'fs' module.
 * 2. It writes the processed content to 'output.txt'.
 * 3. It logs the output to the console.
 * 
*/
// const textInput = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log('Synchronous:', textInput);
// const textOutput = `This is what we know about the avocado: ${textInput}. \nCreated on: ${new Date().toLocaleString()}`; 
// fs.writeFileSync('./txt/output.txt', textOutput, 'utf-8')
// console.log('Synchronous: The file has been created!');

// ---

/**
 * 
 * @description
 * Asynchronous file operations example.
 * This demonstrates non-blocking I/O operations in Node.js using callbacks.
 * 
 * @note
 * 1. Reads 'start.txt' file
 * 2. Uses its content as a filename to read another text file
 * 3. Reads 'append.txt' file
 * 4. Combines the content from steps 2 and 3
 * 5. Writes the combined content to 'final.txt'
 * 
 */
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     if (err) return console.error('Error reading file:', err);
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log('Asynchronous:', data2);
//         fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log('Asynchronous:', data3);
//             fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, 'utf-8', err => {
//                 if (err) console.error('Error writing file:', err);
//                 console.log('Asynchronous: The final file has been written!');
//             })
//         })
//     })
// })
// console.log('Asynchronous: Reading file...');

// ---

/**
 * 
 * @description
 * This is a simple HTTP server that handles incoming requests and sends responses.
 * It uses the 'http' module to create a server and handle requests.
 * 
 * @note
 * 1. Creates an HTTP server
 * 2. Responds with a simple message for each request
 * 3. Listens on port 3005
 */
const server = http.createServer((req, res) => {
    res.end('Server is working!');
})

server.listen(3005, 'localhost', () => {
    console.log('Server is running on port 3005');
})


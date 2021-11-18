
// const fs = require("fs");
// const readStream = fs.createReadStream("./doc/doc.txt");
// readStream.on("data", (chunk) => {
//     console.log("--- New chunk");
//     console.log(chunk);
//     console.log(chunk.length);
//     // console.log(chunk.toString());
// });

//----------------------------------------------------------------

// const fs = require("fs");
// const readStream = fs.createReadStream("./doc/doc.txt", { encoding: 'utf-8'});
// readStream.on("data", (chunk) => {
//     console.log("--- New chunk");
//     console.log(chunk);
//     console.log(chunk.length);
// });

//----------------------------------------------------------------


// const fs = require("fs");
// const readStream = fs.createReadStream("./video.mp4");
// readStream.on("data", (chunk) => {
//     console.log("--- New chunk");
//     console.log(chunk);
//     console.log(chunk.length);
// });

//----------------------------------------------------------------


// const fs = require("fs");

// const readStream = fs.createReadStream("./doc/doc.txt");
// const writeStream = fs.createWriteStream("./doc/doc2.txt");

// readStream.on("data", (chunk) => {
//     console.log("--- New chunk");
//     console.log(chunk.length);
    
//     writeStream.on("data", (chunk) => {
//         console.log("--- New chunk");
//         console.log(chunk);
//         writeStream("\n New Chunk \n");
//         writeStream.write(chunk);
//     });
// });

// //----------------------------------------------------------------

// const fs = require("fs");

// const readStream = fs.createReadStream("./video.mp4");
// const writeStream = fs.createWriteStream("./video2.mp4");

// readStream.on("data", (chunk) => {
//     console.log("--- New chunk");
//     console.log(chunk.length);
    
//     writeStream.on("data", (chunk) => {
//         console.log("--- New chunk");
//         console.log(chunk);
//         writeStream("\n New Chunk \n");
//         writeStream.write(chunk);
    
//     });
// });

//----------------------------------------------------------------

//  + piping

const fs = require("fs"); 
const readStream = fs.createReadStream("./doc/doc.txt");
const writeStream = fs.createWriteStream("./doc/doc3.txt");
readStream.pipe(writeStream);

const readStream2 = fs.createReadStream("./video.mp4");
const writeStream2 = fs.createWriteStream("./video3.mp4");
readStream.pipe(writeStream2);
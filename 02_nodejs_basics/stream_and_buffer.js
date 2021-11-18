
// const fs = require("fs");

// const { WriteStream } = require("tty ???");
 
// const readStream = fs.createReadStream("./video.mp4");

// readStream.on("data", (chunk) => {
//     console.log("--- New chunk");
//     console.log(chunk.length);
// });



// const fs = require("fs");

// const readStream = fs.createReadStream("./video.mp4");
// const writeStream = fs.createWriteStream("./video2.mp4");

// readStream.on("data", (chunk) => {
//     console.log("--- New chunk");
//     console.log(chunk);
    
//     writeStream.on("data", (chunk) => {
//         console.log("--- New chunk");
//         console.log(chunk);
//         writeStream("\n New Chunk \n");
//         writeStream.write(chunk);
    
//     });
// });


//  + piping

const fs = require("fs"); 

const readStream = fs.createReadStream("./video.mp4");
const writeStream = fs.createWriteStream("./video2.mp4");

readStream.pipe(writeStream)
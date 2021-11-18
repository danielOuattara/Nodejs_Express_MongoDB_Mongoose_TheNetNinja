
//--------------------------------- 6
// 18:49 -- node & the file system (creating, reading, deleting files etc)

const fs = require("fs");

// console.log(fs);

//----------------------------------------------------

// // reading

// fs.readFile("./doc/blog.html", (err, data) => {
    //     if (err) console.log(err.message)
    //     // console.log(data); // --> output a buffer
    //     console.log(data.toString()); // --> output html page
    // });
    
//----------------------------------------------------

// writing

// fs.writeFile("./doc/doc.txt", "New content", (err, data) => {
    //          if(err) console.log(err.message)
    //          console.log("File written !")
    //      }
    // );
    
//----------------------------------------------------

// fs.writeFile("./doc/doc.txt", "write and see", (err) => {
    //         if(err) console.log(err.message);
    //         fs.readFile("./doc/doc.txt", (err, data) => {
        //             if (err) console.log(err.message)
        //             console.log(data.toString()); 
        //         })
        //     }
        // );

//----------------------------------------------------

// // directories

// fs.mkdir("./assets", ((err) => {
//     if (err) console.log("ERROR: ", err.message);
//     console.log("Folder created !")
// }));

//----------------------------------------------------

// if(!fs.existsSync("./assets")) {
//     fs.mkdir("./assets", (err => {
//         if (err) console.log(err.message);
//         console.log("Folder created !");
//     }));
// }

//----------------------------------------------------

// if(!fs.existsSync("./assets")) {
//     fs.mkdir("./assets", ( (err) => {
//         if (err) console.log(err.message);
//         console.log("Folder created !");
//     }));
// } else {
//     fs.rm("./assets", (err)=> {
//         if(err) console.log(err.message);
//         console.log("Folder deleted !");
//     })
// }

//----------------------------------------------------

// deleting files

if(fs.existsSync("./doc/deleteMe.txt")) {
    fs.unlink("./doc/deleteMe.txt", (err) => {
        if(err) console.log(err.message);
        console.log("File Deleted !")
    })
} else {
    console.log("File is undefined")
}


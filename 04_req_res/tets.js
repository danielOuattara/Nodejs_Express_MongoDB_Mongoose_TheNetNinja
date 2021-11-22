

const reqUrl = 'style.css'
const dotOffset = reqUrl.lastIndexOf('.');
console.log(dotOffset);

for (let i = 0; i< reqUrl.length; i++) {
    console.log(reqUrl[i], ' - ', i )
}

const typeList = {
    '.html' : 'text/html',
    '.ico' : 'image/x-icon',
    '.jpg' : 'image/jpeg',
    '.png' : 'image/png',
    '.gif' : 'image/gif',
    '.css' : 'text/css',
    '.js' : 'text/javascript'
};


const mimeType = dotOffset === -1 ? 'text/plain' : typeList[reqUrl.substring(dotOffset)];

console.log(mimeType);
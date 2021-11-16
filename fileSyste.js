const fs = require('fs');

//With Using Sync --> Avoid it as its blocking sing thread operation of node js.
const files = fs.readdirSync('./');
console.log(files);

//With Async and non blocking sing thread operation

fs.readdir('./', function(err, files) {
    if (err) {
        console.error(err);
    }
    console.log(files);
})

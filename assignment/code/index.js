const fs = require('fs');

fs.appendFile('C:/Users/gtiwa/OneDrive/Desktop/webdev/node js/assignment/code/nodejs_architecture.txt', 'data appended', 'utf-8', (err) => {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log("Success");
    }
});
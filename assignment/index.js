const fs = require('fs');

fs.readFile('C:/Users/gtiwa/OneDrive/Desktop/webdev/node js/assignment/code/nodejs_architecture.txt',
    'utf-8' ,(err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Success:', data.toString());
    }  
});  
fs.appendFile('C:/Users/gtiwa/OneDrive/Desktop/webdev/node js/assignment/code/nodejs_architecture.txt','High Performance ,Scalability.Easy to Learn,Reduces Loading time using caching,Improves Response time and boosts performance,Large Community Support,Cost-Effective,Extensibility.',err=>{
    if(err){
        console.log(err,'error');
    }
    else{
        console.log('Success')
    }
});
fs.unlinkSync('C:/Users/gtiwa/OneDrive/Desktop/webdev/node js/assignment/code/nodejs_architecture.txt',err=>{
    if (err) {
        console.log(err,'error')
    }
    else{
        console.log('successfully deleted');
    }
})
const os=require('os');
console.log(os.platform());
console.log(os.release());
console.log(os.type());
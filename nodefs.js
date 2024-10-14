const fs = require('fs');
fs.writeFile('./file.txt', "This is from node filegff", (err)=>{
    if (err) {
        console.log('error is', err)
        
    }
    else{
        console.log('sucessfull')
    }
})
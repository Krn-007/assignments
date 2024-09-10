
const fs = require("fs")

function readFile(){
    fs.readFile("a.txt","utf-8",(err,data)=>{
        if(err){
            console.log("something went wrong");
        } else {
            console.log("file read Successfully");
            console.log(data);
        }
    })
}

readFile()

for (let i = 0; i < 5; i++) {
    console.log("hi karanm");
}
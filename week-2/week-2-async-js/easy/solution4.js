
const fs = require("fs")

function writeFile(){
    fs.writeFile("a.txt","hi my name is karan and i like to code",(err,data)=>{
        if(err){
            console.log("something went wrong");
        } else {
            console.log("file overwritten Successfully");
        }
    })
}

writeFile()

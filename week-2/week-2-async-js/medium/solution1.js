const fs= require("fs")

const promiseThree = new Promise(readFile);

function readFile(resolve, reject){
    fs.readFile("a.txt", "utf-8",(err,data)=>{
        if(err){
            console.log("something went wrong");
        }
        console.log("file read done");
        console.log(data);

        const cleanedContent = data.replace(/\s+/g,' ').trim()

        fs.writeFile("a.txt", cleanedContent,(err)=>{
            if(err){
                console.log("something is wrong");
            }
            console.log("file written successfully");
            if(resolve){
                resolve(cleanedContent)
            } else{
                reject();
            }
        })

    })

}

promiseThree.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})
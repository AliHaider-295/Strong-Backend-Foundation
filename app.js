// Simple Async file reader , with non blocking code recommended 
 const fs = require("fs");

 fs.readFile("file.txt", "utf-8", (err, data)=>{
    if(err){
        console.log("Error in reading file", err)
    return

    }
    console.log("File Content:")
    console.log(data)
 })

//  with blocking code simple way 

 try{
    const newData = fs.readFileSync("file.txt", "utf8");
    console.log("File Content");
    console.log(newData)
 } catch(err){
    console.log("New Error", err)
 }
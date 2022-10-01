const http = require('http');
const fs= require('fs');
const port=4000;

const server = http.createServer(requestHandler);

function requestHandler(req,res){
    console.log(req.url);

    res.writeHead(200,{'content-type':'text/html'});

    let filePath;

    switch(req.url){

            case '/':
                filePath='./index.html'
                break;
            default :
            filePath ='404.html';


    }

    fs.readFile(filePath,(err,data)=>{

        if(err){
            console.log("error occured in reading the file");
            return res.end("<h1>ERROR!</h1>");
        }

        return res.end(data);

    })


}


server.listen(port,(err)=>{

    if(err){
        console.log("ERROR",err)
        return;
    }
        console.log("server is working on port :", port);
})
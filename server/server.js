var http = require("http");
var fs = require("fs")
var axios = require('axios')
http.createServer((request,response)=>{
  //允許'http://localhost:8000'進行跨域操作
  // response.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:8080')
  response.writeHead(200,{"Content-Type":"application/json"});
  var url = request.url;
  console.log("url",url)
  // response.write(url)
  if(url===("/getJson")){
    fs.readFile('./data.json','utf-8',(err,data)=>{
      if(!err){
        console.log("data==",data)
        // return data
        response.write(JSON.stringify(JSON.parse(data)))
        response.end()
      }else{
        console.log("err==",err)
        response.write(err)
        response.end()
      }
    })
  }
  // response.write("   hello world3")
}).listen(8888);

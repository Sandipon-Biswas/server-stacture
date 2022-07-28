
const http =require('http');
const app=require('./app/app');
require('dotenv').config()
const server=http.createServer(app);
const port =process.env.PORT || 8080;
//  const port = 8080;

server.listen(port,()=>{
    console.log(`server is runing ${port}`);
})
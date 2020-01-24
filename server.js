const express = require('express');
const server = express();
const Router = require('./router/router');

server.use(express.json());
server.use('/api/projects', Router);

server.use((err, req, res, next)=>{
    console.log(err)
    res.status(500).json({message:'something went wrong'})
})


module.exports = server;
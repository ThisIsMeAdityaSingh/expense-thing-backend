const express = require('express');

const server = express();
const PORT = 5000;

server.listen(PORT, function(){
    console.log(`Express listening to PORT - ${PORT}`);
});
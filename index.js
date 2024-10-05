const express = require('express');
const dotenv = require('dotenv');

const server = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

server.listen(PORT, function(){
    console.log(`Express listening to PORT - ${PORT}`);
});
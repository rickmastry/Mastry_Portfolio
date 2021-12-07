const express = require('express');
const dotenv = require('dotenv');

const app = express();

app.use(express.json());
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));

app.get('/', ()=> {
    
})
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();

const cors = require("cors");


console.log(`your api key = ${process.env.API_KEY} and ID = ${process.env.API_ID}`)


const app = express()

// Require the Aylien npm package
// var aylien = require("aylien_textapi");
const AYLIENTextAPI = require('aylien_textapi');
const { response } = require('express');
var textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
 });

 app.use(cors());
 // summary example



app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})



app.get('/summary', function (req, res) {
    textapi.summarize({
        url: 'http://techcrunch.com/2015/04/06/john-oliver-just-changed-the-surveillance-reform-debate',
        sentences_number: 3
    }, function(error, response) {
        if (error === null) {
            response.sentences.forEach(function(s) {
                console.log(s);
                res.send(response);
            });
        }
    })
    res.send()
})
console.log('hello from the summary page')
console.log(response)


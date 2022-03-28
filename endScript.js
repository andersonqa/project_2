const generateButton = document.querySelector('button')
const adviceSpot = document.querySelector('p')
const imageDiv = document.querySelector('div')

generateButton.addEventListener('click', async () => {
    let response = await axios.get(`https://api.adviceslip.com/advice`)
    console.log(response.data.slip.advice)
    let adviceLine = response.data.slip.advice
    adviceSpot.innerHTML = `Your advice is... ${adviceLine}`
    let imgResponse = await axios.get('https://cors-anywhere.herokuapp.com/thispersondoesnotexist.com')
    console.log(response)})
    // let person = response.data.img
    // imageDiv.innerHTML = `<img src = https://thispersondoesnotexist.com/>`})

import express from 'express'
import request from 'request'
import { json as _json } from 'body-parser'
var app = express()

var myLimit = typeof(process.argv[2]) != 'undefined' ? process.argv[2] : '100kb';
console.log('Using limit: ', myLimit);

app.use(_json({limit: myLimit}));

app.all('*', function (req, res, next) {

    // Set CORS headers: allow all origins, methods, and headers: you may want to lock this down in a production environment
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));

    if (req.method === 'OPTIONS') {
        // CORS Preflight
        res.send();
    } else {
        var targetURL = req.header('https://thispersondoesnotexist.com'); // Target-URL ie. https://example.com or http://example.com
        if (!targetURL) {
            res.send(500, { error: 'There is no Target-Endpoint header in the request' });
            return;
        }
        request({ url: targetURL + req.url, method: req.method, json: req.body, headers: {'Authorization': req.header('Authorization')} },
            function (error, response, body) {
                if (error) {
                    console.error('error: ' + response.statusCode)
                }
//                console.log(body);
            }).pipe(res);
    }
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
    console.log('Proxy server listening on port ' + app.get('port'));
});

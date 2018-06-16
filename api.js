'use strict';

import express from 'express';
const router = express.Router();

import Foods from '..models/foods.js';

import fs from 'fs';

let sendJSON = (res, data) => {
    res.statusCode = 200;
    res.statusMessage = 'good';
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(data));
    res.end();
};

let serverError = (res, err) => {
    let error = {error:err};
    res.statusCode = 500;
    res.statusMessage = 'Server Error';
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(error));
    res.end();
};
router.get('/', (req, res) => {

    fs.readFile('index.html', (err, data) => {

        let dataString = data.toString();
        let filler = 'This is the homepage'
        res.write(dataString.replace('{{filler}}', filler));
        res.end();

    });
});

router.get('/api/v1/food', (req, res) => {
    if(req.query.id){
        Food.findOne(req.query.id)
            .then(data => sendJSON(res, data))
            .catch(err => serverError(res, err));
            res.write(req.query.id);
            res.end();
    } else {
        Food.fetchAll()
            .then(data => sendJSON(res, data))
            .catch(err => serverError(res, err));
    }
});

router.delete('api/v1/food', (req, res) => {
    if(req.query.id){
        Food.deleteOne(req.query.id)
            .then(success => {
                let data = {id:req.query.id, deleted:success};
                sendJSON(res, data);
            })
            .catch(console.error);
    }
});

router.post('/api/v1/food', (req, res) => {

    let record = new Food(req.body);
    record.save()
        .then(data => sendJSON(res, data))
        .catch(console.error);
});

module.exports = [];
'use strict';

const router = require('../../lib/router.js'); 

router.get('/api/v1/magazines/', (req, res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  let id = req.query.id || '';
  res.write(`magazine number ${id} is needed`);
  res.end();
});

router.get('/', (req, res) => {
  res.statusCode = 400;
  res.statusMessage = 'Bad Request';
  res.write('Bad Request');
  res.end();
});

router.get('/', (req, res) => {
  res.statusCode = 404;
  res.statusMessage = 'Not Found';
  res.write('Not Found');
  res.end();
});

router.post('/api/v1/magazines/', (req, res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.write(JSON.stringify(req.body));
  res.end();
});

router.post('/api/v1/magazines/', (req, res) => {
  res.statusCode = 400;
  res.statusMessage = 'Bad Request';
  res.write('Bad Request');
  res.end();
});

router.put('/api/v1/magazines/', (req, res) => {
  res.statusCode = 400;
  res.statusMessage = 'Bad Request';
  res.write('Bad Request');
  res.end();
});
router.put('/api/v1/magazines/', (req, res) => {
  res.statusCode = 200;
  let id = req.query.id || '';
  res.statusMessage = `${id} Requested`;
  res.write(JSON.stringify(req.body));
  res.end();
});

router.delete('/api/v1/magazines/', (req, res) => {
  let id = req.query.id || '';
  if (id !== '') {
    res.statusCode = 200;
    res.statusMessage = 'OK' + id;
    res.write(`Magazine ${id} has been deleted`);
    res.end();
  } else {
    res.statusCode = 400;
    res.statusMessage = 'Bad Request';
    res.write('Bad Request');
    res.end();
  }
});



module.exports = {};


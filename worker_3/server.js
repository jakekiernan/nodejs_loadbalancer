'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const PORT = 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post('/', (req, res) => {
  console.log('Request recieved on worker 3');
  const timeout = Math.random() * 3;

  const delayedResponse = () => {
    console.log('Responding to load balancer');
    res.send({ node: 'three', timeout: timeout })
  };

  setTimeout(delayedResponse, timeout * 1000);
});

app.listen(PORT);
console.log(`Worker 3 running`);

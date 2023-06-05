import models from './src/models/index.js';
import express from 'express';
import cors from 'cors';

// const express = require("express");

const app = express();

// const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.use((req, res, next) => {
    req.context = {
      models,
      me: models.notes[1],
    };
    next();
  });

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get('/notes/', (req, res) => {
    return res.send(Object.values(req.context.models.notes));
  });
  
  app.get('/notes/:noteId/', (req, res) => {
    return res.send(req.context.models.notes[req.params.noteId]);
  });

app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
  });
  
  app.post('/', (req, res) => {
    return res.send('Received a POST HTTP method');
  });
  
  app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
  });
  
  app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
  });

  app.get("/about", (req, res) => {
    res.send("About route");
});

//app.get('/api/notes', (request, response) => {
//    response.json(notes)
//  })

const PORT = 3001
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
  })

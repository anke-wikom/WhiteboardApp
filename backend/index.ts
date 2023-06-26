import models from './src/models/index';
import express, { Router } from 'express';
import cors from 'cors';

// const app = express();

// const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

// export const app = Router()
const app = express();

// router.get("/", handleLanguageHeader, HelloWorldController.default)
// router.get("/hello", handleTokenBasedAuthentication, HelloWorldController.hello)

app.use(cors(corsOptions)) // Use this after the variable declaration

app.use((req, res, next) => {
    req.body = {
      models,
      me: models.notes,
    };
    next();
  });

// router.post();

app.get('/notes/', (req, res) => {
    return res.send(Object.values(req.body.models.notes));
  });
  
app.get('/notes/:noteId/', (req, res) => {
  return res.send(req.body.models.notes[req.params.noteId]);
});

app.get('/test/', (req, res) => {
  return res.send('Test received');
})

app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});

  
  app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
  });
  
  app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
  });


const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

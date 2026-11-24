const express = require('express')

const app = express(); //Instance of a server

app.use(express.json()) //middleware.

let notes = [];

app.post('/notes', (req, res) => { // create an entry in server
      notes.push(req.body);
      // res.send("TODO created successfully");
      res.status(201).json({
            success: true,
            message: "TODO created successfully",
            data: []
      })
})

app.get('/notes', (req, res) => {// fetch the data in server
      res.send(notes)
      // res.status(200).json({
      //       success: true,
      //       message: "fetched successfully",
      //       data: notes
      // })
})

app.put('/notes/:id', (req, res) => {
      //update the notes object
      const index = req.params.id;
      notes[index].title = req.body.title;

      res.status(200).json({
            message: "Updated"
      })
})
app.delete('/notes/:id', (req, res) =>{
      const index = req.params.id;
      delete notes[index];

      res.status(200).json({
            message: "Deleted"
      })
})
app.listen(3000); // Start the server on port 3000

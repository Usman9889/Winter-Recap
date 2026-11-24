const express = require('express')

const app = express();
const PORT = 3000;

app.use(express.json());

// Store todos in memory
const Todos = [];

app.get('/', (req, res)=>{
      res.json({
            message: "Welcome to Todo API"
      })
})

app.post('/todo', (req, res)=>{
      const title = req.body.title;
      const description = req.body.description;

      const newTodo = {
            title: title,
            description: description
      };

      Todos.push(newTodo);
      res.status(200).json({
            success: true,
            message: "Todo created successfully",
            todo: newTodo
      })
})

app.get('/todo', (req, res)=>{
      res.status(200).json({
            success: true,
            Todo: Todos
      })
})

app.listen(PORT, ()=>{
      console.log(`Server running at http://localhost:${PORT}`)
})
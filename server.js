const express = require("express");
const app = express();
const PORT = 4000;

const data = {
  "data": [
    {
      "name":"A",
      "description":"This is a description of A",
      "parent":""
      },
      {
      "name":"B",
      "description":"This is a description of B",
      "parent":"A"
      },
      {
      "name":"C",
      "description":"This is a description of C",
      "parent":"A"
      },
      {
      "name":"D",
      "description":"This is a description of D",
      "parent":"A"
      },
      {
      "name":"B-1",
      "description":"This is a description of B-1",
      "parent":"B"
      },
      {
      "name":"B-2",
      "description":"This is a description of B-2",
      "parent":"B"
      },
      {
      "name":"B-3",
      "description":"This is a description of B-3",
      "parent":"B"
      }
  ]
}

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/greet/:name', (req, res) => {
  res.json({message: `Hello, ${req.params.name}`});
});

app.get('/data', (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});

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
        "name":"E",
        "description":"This is a description of E",
        "parent":"A"
      },
      {
        "name":"F",
        "description":"This is a description of F",
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
      },
      {
        "name":"B-4",
        "description":"This is a description of B-4",
        "parent":"B"
      },
      {
        "name":"E-1",
        "description":"This is a description of E-1",
        "parent":"E"
      }
  ]
}

app.use(express.static('public'));

app.get('/data', (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});

module.exports = app;

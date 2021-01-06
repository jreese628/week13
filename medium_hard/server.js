var express = require("express");

var app = express();

var data = require("./public/database.json");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/workers", (req, res) => {
  if (!data) {
    res.status(404).send("Could not find information");
  }
  res.send(data);
});

app.get("/workers/:id", (req, res) => {
  /* finding an ID: created a const named findEmployee, pulled data from data uptop and did .workers to retrieve info from worker array  */

  const findEmployee = data.workers.find(function (employee) {
    return parseInt(req.params.id) === employee.id;
  });

  if (!findEmployee) {
    res.status(404).send("Could not find information");
  }
  res.send(findEmployee);
});

app.listen(3000);
const express = require("express");

const app = express();

const data = require("./employees.json");

app.use(express.json());

app.get("/api/employees", (req, res) => {
  if (!data) {
    res.status(404).send("Could not find information");
  }
  res.send(data);
});

app.get("/employees/:id", (req, res) => {
  const findID = data.workers.find(function (employee) {
    return parseInt(req.params.id) == employee.id;
  });
  if (!findID) {
    res.status(404).send("Error 404 Page Not Found");
  }
  res.send(findID);
});

const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`Listening on port ${port}...`));

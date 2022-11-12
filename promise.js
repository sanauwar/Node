
const express = require("express");
const { Worker } = require('worker_threads')
const app = express();
const port = process.env.PORT || 3000;


app.get("/blocking", async (req, res) => {
    let data = await calculateCount()
    res.status(200).send(`result is ${data}`);
})

app.get("/non-blocking/", (req, res) => {
  res.status(200).send("This page is non-blocking");
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});


function calculateCount() {
    return new Promise((resolve, reject) => {
      let counter = 0;
      for (let i = 0; i < 20_000_000_000; i++) {
        counter++;
      }
      resolve(counter);
    });
  }
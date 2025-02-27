const fs = require("fs/promises");
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const app = express();
const datapath = path.join(__dirname, "data");
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.post("/formdata", async (req, res) => {
  const formsdata = req.body.form;
  if (
    formsdata.recruiter.name === null ||
    !formsdata.recruiter.email.includes("@") ||
    formsdata.recruiter.email === null ||
    formsdata.recruiter.phone === null ||
    formsdata.recruiter.name.trim() === ""
  ) {
    return res
      .status(400)
      .json.parse({ message: "missing email name or phone number" });
  }
  const newdata = {
    ...formsdata,
    id: (Math.random() * 1000).toString(),
  };
  const latestformdata = path.join(datapath, "formdata.json");
  const datas = await fs.readFile(latestformdata, "utf8");
  const alldata = JSON.parse(datas);
  alldata.push(newdata);
  await fs.writeFile(latestformdata, JSON.stringify(alldata, null, 2));

  res.status(201).json({ message: "order created" });
});
app.use((req, res) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  res.status(404).json({ message: "Not found" });
});
app.listen(3000);

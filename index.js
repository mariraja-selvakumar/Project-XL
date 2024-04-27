const express = require("express");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const excelRoute = require("./route/file-upload.route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", excelRoute);

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.use((req, res, next) => {
  next(createError(404, "Not found"));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("Server started on port " + PORT + "...");
});

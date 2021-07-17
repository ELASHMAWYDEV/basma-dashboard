const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const cookeiParser = require("cookie-parser");
const PORT = process.env.PORT || 5000;
const HistoryModel = require("./models/History.model");

//Init
require("./init");

//Middlewares
app.use(cors());
app.use(cookeiParser());
app.use(express.json());

//API
app.use("/api", require("./api"));

//For the react app
if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
/*********************************************************/

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

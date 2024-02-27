const express = require("express")();
const axios = require("axios");

express.get("/versionQTStudio", (req, res) => {
  axios
    .get("http://setup.roblox.com/versionQTStudio")
    .then((response) => res.send(response.data));
});

express.get("/:version", (req, res) => {
  axios
    .get(`http://setup.roblox.com/${req.params.version}`)
    .then((response) => res.json(response.data))
    .catch((error) => console.log(error));
});

express.listen(3000, () => {});

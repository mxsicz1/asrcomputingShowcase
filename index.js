require('dotenv').config()

var groupId = '15159367'
var cookie = process.env.COOKIE

const express = require("express");
const rbx = require("noblox.js");
const app = express();

//const PORT = Math.floor(Math.random() * (65535 - 3000 + 1)) + 3000;

app.use(express.static("public"));

async function startApp() {
  await rbx.setCookie(cookie);
  let currentUser = await rbx.getAuthenticatedUser();
  //console.log(currentUser.name);
}
startApp();

app.get("/ranker", (req, res) => {
    var User = req.query.userid;
    var Rank = req.query.rank;
  
    rbx.setRank(groupId, parseInt(User), parseInt(Rank));
    res.json("Ranked!");
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

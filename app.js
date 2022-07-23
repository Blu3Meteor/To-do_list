const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

console.log(date);

// template lets
const items = ["Add your first item for today"];

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

  const day = date.getDate();
  res.render("list", {
    listTitle: day,
    newListItems: items,
  });

});

app.post("/", function(req, res) {
  items.push(req.body.newItem);
  res.redirect("/");
})

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is listening");
});

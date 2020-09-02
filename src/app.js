const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();
// Define paths for Express
const publicDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//Setup handlebars template
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirPath));

app.get("", (req, res) => {
  res.render("index", {
    heading: "Weather App",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    heading: "About",
    caption: "This is me",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    heading: "Help",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, praesentium quas quidem asperiores numquam enim ex et. In, tenetur eaque id, eligendi beatae esse corporis sit, quae molestiae non ad?",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    temperature: 15,
    feelslike: 14,
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    heading: "404",
    message: "Oops, help article not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    heading: "404",
    message: "Oops, something went wrong",
  });
});

// Server running info
app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

const path = require("path");
const express = require("express");

const app = express();
// Define paths for Express
const publicDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates");

//Setup handlebars template
app.set("view engine", "hbs");
app.set("views", viewsPath);

app.use(express.static(publicDirPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    heading: "Welcome to the weather App",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    heading: "About",
    caption: "This is me",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
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

// Server running info
app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

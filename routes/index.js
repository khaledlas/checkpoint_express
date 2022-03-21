var express = require("express");
var router = express.Router();
var filepath = "/images/defender.jpg";

//global middleware activité de l'application
router.use((req, res, next) => {
  const date = new Date(); // current time
  const hours = date.getHours();
  // console.log("hours:", hours);

  hours >= 9 && hours <= 17
    ? next()
    : res.send("Le serveur n'est accessible qu'entre 9h et 18h !");
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("home");
});
router.get("/home", function (req, res, next) {
  res.render("home");
});

/* GET services page. */
router.get("/services", function (req, res, next) {
  res.render("services");
});

/* GET contact page. */
router.get("/contact", function (req, res, next) {
  res.render("contact");
});

module.exports = router;

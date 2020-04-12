	// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
  res.render("demo-1", {title: "Home" });
});

app.get("/about", (req, res) => {
  res.render("about", {title: "About Us" });
});

app.get("/blog-listing", (req, res) => {
  res.render("blog-listing", {title: "Blog Listing" });
});

app.get("/contacts-1", (req, res) => {
  res.render("contacts-1", {title: "Contact Us" });
});

app.get("/country-details", (req, res) => {
  res.render("country-details", {title: "Country Details" });
});

app.get("/courses-list", (req, res) => {
  res.render("courses-list", {title: "Courses List" });
});

app.get("/faqs", (req, res) => {
  res.render("faqs", {title: "FAQ's" });
});

app.get("/partners", (req, res) => {
  res.render("partners", {title: "Partners" });
});

app.get("/single-post", (req, res) => {
  res.render("single-post", {title: "Single Post" });
});

app.get("/visa-details", (req, res) => {
  res.render("visa-details", {title: "Visa Details" });
});

app.get("/visa-list-1", (req, res) => {
  res.render("visa-list-1", {title: "Visa List" });
});

app.get("/user", (req, res) => {
  res.render("user", { title: "Profile", userProfile: { nickname: "Auth0" } });
});

/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
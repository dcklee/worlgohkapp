	// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");
const compression = require('compression');

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 *  Google Cloud Storage Definitions
 */

// const {format} = require('util');
// const Multer = require('multer');
// const bodyParser = require('body-parser');

// // By default, the client will authenticate using the service account file
// // specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
// // the project specified by the GOOGLE_CLOUD_PROJECT environment variable. See
// // https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/docs/authentication.md
// // These environment variables are set automatically on Google App Engine
// const {Storage} = require('@google-cloud/storage');

// // Instantiate a storage client
// const storage = new Storage();
// app.use(bodyParser.json());

// // Multer is required to process file uploads and make them available via
// // req.files.
// const multer = Multer({
//   storage: Multer.memoryStorage(),
//   limits: {
//     fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
//   },
// });

// // A bucket is a container for objects (files).
// const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET);

// // Display a form for uploading files.
// app.get('/', (req, res) => {
//   res.render('form.pug');
// });

// // Process the file upload and upload to Google Cloud Storage.
// app.post('/upload', multer.single('file'), (req, res, next) => {
//   if (!req.file) {
//     res.status(400).send('No file uploaded.');
//     return;
//   }

//   // Create a new blob in the bucket and upload the file data.
//   const blob = bucket.file(req.file.originalname);
//   const blobStream = blob.createWriteStream();

//   blobStream.on('error', (err) => {
//     next(err);
//   });

//   blobStream.on('finish', () => {
//     // The public URL can be used to directly access the file via HTTP.
//     const publicUrl = format(
//       `https://storage.googleapis.com/${bucket.name}/${blob.name}`
//     );
//     res.status(200).send(publicUrl);
//   });

//   blobStream.end(req.file.buffer);
// });

/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(compression());

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
app.get("/visa-details-01", (req, res) => {
  res.render("visa-details-01", {title: "Visa Details 01" });
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
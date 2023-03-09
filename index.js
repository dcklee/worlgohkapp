	// index.js

/**
 * Required External Modules
 */

const cors = require("cors");
const express = require("express");
const path = require("path");
const nodemailer = require('nodemailer');
const i18n = require("i18n");
const { Configuration, OpenAIApi } = require("openai");
const pug = require("pug");

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "5000";

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
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
app.get("/visa-details-02", (req, res) => {
  res.render("visa-details-02", {title: "Visa Details 02" });
});
app.get("/visa-details-03", (req, res) => {
  res.render("visa-details-03", {title: "Visa Details 03" });
});
app.get("/visa-details-04", (req, res) => {
  res.render("visa-details-04", {title: "Visa Details 04" });
});
app.get("/visa-details-05", (req, res) => {
  res.render("visa-details-05", {title: "Visa Details 05" });
});
app.get("/visa-details-06", (req, res) => {
  res.render("visa-details-06", {title: "Visa Details 06" });
});
app.get("/visa-chat", (req, res) => {
  res.render("visa-chat", {title: "Visa Chat" });
});
app.get("/visa-list-1", (req, res) => {
  res.render("visa-list-1", {title: "Visa List" });
});
app.get("/privacy", (req, res) => {
  res.render("privacy", {title: "Privacy Policy" });
});
app.get("/OSHC", (req, res) => {
  res.render("discount_insurance_details", {title: "Discount Insurance OSHC" });
});
app.get("/australia", (req, res) => {
  res.render("australia", {title: "Australia" });
});
app.get("/UK", (req, res) => {
  res.render("UK", {title: "UK" });
});
app.get("/USA", (req, res) => {
  res.render("USA", {title: "USA" });
});
app.get("/ireland", (req, res) => {
  res.render("ireland", {title: "Ireland" });
});
app.get("/newzealand", (req, res) => {
  res.render("newzealand", {title: "New Zealand" });
});
app.get("/canada", (req, res) => {
  res.render("canada", {title: "Canada" });
});
app.get("/portugal", (req, res) => {
  res.render("portugal", {title: "Portugal" });
});
app.get("/user", (req, res) => {
  res.render("user", { title: "Profile", userProfile: { nickname: "Auth0" } });
});

app.use(express.urlencoded({
  extended: false
}));

app.post("/send", (req, res) =>{
  
  var transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "info@worlgo.com",
        pass: ""
    }
  });

  var message = {
    from: req.body.email, // Sender address
    to: 'info@worlgo.com',         // List of recipients
    subject: "Client Enquiry " + req.body.name, //website client enquiry
    html: "<b> "+ req.body.name +" " + req.body.phone + " "+ req.body.visa +" " + req.body.country + " </b>", // Client Details
  };
  console.log(message);
  transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
  });
 //res.json({data: 'success', message: message})
});

app.post("/contact", (req, res) =>{
  
  var transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "info@worlgo.com",
        pass: ""
    }
  });

  var message = {
    from: req.body.email, // Sender address
    to: 'info@worlgo.com',         // List of recipients
    subject: "Client Enquiry " + req.body.name, //website client enquiry
    html: "<b> "+ req.body.name +" " + req.body.email + " "+ req.body.subject +" " + req.body.msg + " </b>", // Client Details
  };
  console.log(message);
  transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
});

// Set up OpenAI API credentials
const apiKey = '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';
const model = 'text-davinci-003';
const configuration = new Configuration({
  apiKey: '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',
});
// Initialize OpenAI API client
const openai = new OpenAIApi(configuration);

// Set up middleware to parse form data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Set up route to handle form submission
app.post('/chat-gpt', async (req, res) => {
  // Get form data
  const { age, education, children, maritalStatus, country } = req.body;

  // Construct prompt for OpenAI API
  const prompt = `根据以下信息，为我和家人推荐移民${country}的最佳五個途径，相關費用，簽證費用以及辦理時間。如果有子女，請描述私立跟公立學校的學費。麻煩提供每一個方案的主題當地省市的擔保要求等等：\n
    年龄：${age}\n
    最高学历：${education}\n
    子女人数：${children}\n
    婚姻状况：${maritalStatus}\n
    移民國際：${country}\n`;

  // Generate response from OpenAI API
  
  const response = await openai.createCompletion({
    model: model,
    prompt: prompt,
    temperature: 0,
    max_tokens: 1024,
    top_p: 1.0,
    frequency_penalty: 0.0,
    n: 1,
    presence_penalty: 0.6
  })
    .then(response => {
      // Extract generated text from OpenAI API response
      const jsondata = response.data;
      const text = jsondata.choices[0].text;  
      // Send the raw Openai test response back
      res.status(200).send({ text });
      // Send the HTML response to the client
      //res.send(html);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Internal server error');
    });
});

/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
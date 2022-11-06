const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
const yup = require("yup");
require("dotenv").config();
const path = require("path");

// middleware
app.use(express.json());
app.use(cors());

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "../frontend/build")));

// // yup validation
const schema1 = yup.object({
  body: yup.object({
    firstName: yup
      .string()
      .min(3, "Please, enter a valid name")
      .max(15)
      .required(),
    email: yup.string().email("insert correct email").required(),
    message: yup.string().max(1000).required(),
  }),
});
const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate({
      body: req.body.mailerState,
    });

    next();
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
// end yup validation

const confirm = () => (req, res, next) => {
  console.log("hi");
  console.log(req.body);
  next();
};

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

transporter.verify((err, success) => {
  err
    ? console.log("that's the error: " + err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/send", confirm(), validate(schema1), function (req, res) {
  let mailOptions = {
    from: `${req.body.mailerState.email}`,
    to: process.env.EMAIL,
    subject: `Message from ${req.body.mailerState.email}`,
    text: `${req.body.mailerState.message}`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      console.log("Email sent successfully");
      res.json({
        status: "success",
      });
    }
  });
});

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../frontend/build/index.html"));
});

const port = 4000;
app.listen(process.env.PORT || port, () =>
  console.log(
    `Server is running on port: ${process.env.PORT} (Heroku) or ${port} (local)`
  )
);

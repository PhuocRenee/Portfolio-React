const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
const yup = require("yup");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

// yup validation

const schema1 = yup.object({
  body: yup.object({
    fisrtName: yup.string().required(),
    email: yup.string().email("insert correct email").required(),
    message: yup.string().max(1000).required(),
  }),
});
const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate({
      body: req.body,
      // query: req.query,
      // params: req.params,
    });

    next();
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
// end yup validation

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
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/send", validate(schema1), function (req, res) {
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

const port = 4000;
app.listen(port, () => console.log(`Server is running on port: ${port}`));

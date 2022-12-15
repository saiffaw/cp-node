var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "saif_har@hotmail.com",
    pass: "4546416",
  },
});
var mailOptions = {
  from: "saif_har@hotmail.com",
  to: "saif_har@hotmail.com",
  subject: "sending mail using node js",
  text: "that was easy",
};
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

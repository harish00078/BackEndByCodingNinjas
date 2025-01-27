// 1: Import nodemailer-module:
const nodemailer = require("nodemailer");

// 2: How to Configure and Use Nodemailer to Send Emails:

// -> 1 = first we have to Configure Email and its Email-Service Provider or server:which basically gonna be able to help us to send-emails to the users:

// -> Important Note:
// V.IMP:for configuring the (email) and its (emailer-service) provider or server through which we are gonna be able to send-emails to the (users):
// V.IMP: we are gonna be use the (transporter) or (transporter-object):which is basically help us to send the emails to the (email-server or service) provider:and then that (email-server) is gonna be sending those emails to the (users):

// -> We need to create an asynchronous function for this purpose. By adding the async keyword in front of the function-declaration, we convert it into an async function.
// We'll use async-await syntax to handle the email-sending process.
// V.IMP: The async function will be responsible for sending the email to the user. It will use the transporter object which we have created with in it: To send the email to the email-server, which will then deliver the email to the user:
async function sendEmail() {

  // -> Creating the Transporter:
  // To create a transporter, we use the createTransport method provided by the Nodemailer module. This method takes an object as an argument:

  // Key Points About the createTransport Method:
  // -> The method accepts a configuration object, which specifies the email account and its service provider or server details.
  // -> It returns us a transporter-object that will handle email transmissions.

  // => Within the createTransport method, we must specify the following:
  // -> 1: The host of the email service server (e.g., Gmail, Outlook, etc.).
  // -> 2: The authentication details, such as the user and password, to verify the sender's identity.
  // -> 3: Other settings, depending on the email service provider's requirements.

  // V.IMP-NOTE:the creation of (transporter) or (transporter-object) basically depend the (SMTP-protocol):which is basically used for sending the emails over the internet:
  // => because we have two ways to use (SMTP-protocol) for sending the emails:
  // -> 1: Using the (SMTP-protocol) with the other email-service-provider or server:
    // -> 2: Using the (SMTP-protocol) by creating our own email-server:it used on heavy or bigger projects or applications:

  const transporter = nodemailer.createTransport({

    
    // -> 2 =  Understanding SMTP (Simple Mail Transfer Protocol):
    // SMTP is a protocol used for email transmission over the internet. It is responsible for sending emails from the sender to the receiver. SMTP ensures that emails are delivered efficiently and securely.
    // Just like HTTP/HTTPS is used to establish connections with web-servers, SMTP is the protocol used to send emails over the internet.
    // SMTP ensures smooth and efficient email delivery by acting as a bridge between the application (e.g., our Node.js app) and the email-server.


  });
}

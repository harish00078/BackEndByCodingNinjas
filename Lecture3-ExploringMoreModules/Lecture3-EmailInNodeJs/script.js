// 1: Import nodemailer-module:
const nodemailer = require("nodemailer");

// 2: How to Configure and Use Nodemailer to Send Emails:

// -> 1 = first we have to Configuring Email and its Email-Service Provider or server:which basically gonna be able to help us to send-emails to the users:
// for that We need to create an asynchronous function for this purpose. By adding the async keyword in front of the function-declaration, we convert it into an async function.
// We'll use async-await syntax to handle the email-sending process.

// -> Important Note:
// for configuring the (email) and its (emailer-service) provider or server through which we are gonna be able to send-emails to the (userS):
// we are gonna be using the (transporter) or (transporter-object):which is basically gonna help us to send the emails to the (email-server) or service-provider:and then that (email-server) is gonna be sending those emails to the (users):

async function sendEmail() {
  // -> Creating the Transporter:
  // To create a transporter, we use the createTransport method provided by the Nodemailer module. This method takes an object as an argument:
  // The object contains the configuration details for the email account and its service provider, such as the host , authentication details, and other necessary settings.
 

  // Key Points About the createTransport Method:
  // -> The method accepts a configuration object, which specifies the email account and the service provider or server details.
  // -> It returns a transporter-object that will handle email transmissions.
  // -> Configuration Details for the Transporter Object:
  // -> Within the createTransport method, we must specify the following:

  // -> 1: The host of the email service server (e.g., Gmail, Outlook, etc.).
  // -> 2: The authentication details, such as the user and password, to verify the sender's identity.
  // -> 3: Other settings, depending on the email service provider's requirements.

  const transporter = nodemailer.createTransport({

    // -> 2 =  Understanding SMTP (Simple Mail Transfer Protocol):
    // SMTP is a protocol used for email transmission over the internet. It is responsible for sending emails from the sender to the receiver. SMTP ensures that emails are delivered efficiently and securely.
    // Just like HTTP/HTTPS is used to establish connections with web servers, SMTP is the protocol used to send emails over the internet.
    // SMTP ensures smooth and efficient email delivery by acting as a bridge between the application (e.g., our Node.js app) and the email server.


  });
}

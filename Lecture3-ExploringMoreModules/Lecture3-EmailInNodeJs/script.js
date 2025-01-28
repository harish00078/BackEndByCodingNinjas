// 1: Import nodemailer-module:
const nodemailer = require("nodemailer");

// 2: How to Configure and Use Nodemailer to Send Emails:

// -> 1 = first we have to Configure Email and Email-Service Provider or server:which basically gonna be able to help us to send-emails to the users:

// -> Important Note:
// V.IMP:for configuring the (email) and (emailer-service) provider or server through which we are gonna be able to send-emails to the (users):
// V.IMP: we are gonna be use the (transporter) or (transporter-object):which is basically help us to send the emails to the (email-server or service) provider:and then that (email-server) is gonna be sending those emails to the (users):

// -> We need to create an asynchronous function for this purpose. By adding the async keyword in front of the function-declaration, we convert it into an async function.
// We'll use async-await syntax to handle the email-sending process.
// V.IMP: The async function will be responsible for sending the email to the user. It will use the transporter-object which we have created with in it: To send the email to the email-server, which will then deliver the email to the user:
async function sendEmail() {
  // -> Creating the Transporter:
  // To create a transporter, we use the createTransport method provided by the Nodemailer module. This method takes an object as an argument:

  // Key Points About the createTransport Method:
  // -> The method accepts a configuration object, which specifies the email account and its service provider or server details.
  // -> It returns us a transporter-object that will handle email transmissions.

  // => Within the createTransport method, we must specify the following:
  // -> 1: The host of the email service server (e.g., Gmail, Outlook, etc.).
  // -> 2: The authentication details, such as the user and password, to verify the (sender's identity).
  // -> 3: Other settings, depending on the email service provider's requirements.

  // V.IMP-NOTE:
  // The creation of the transporter (or transporter object) depends on the SMTP protocol. SMTP (Simple Mail Transfer Protocol) is the standard protocol used for sending emails over the internet:
  // V.V.IMP-NOTE:because the things which we have to specify with in the (createTransport) method or (transporter-object) are basically depends on the (SMTP-protocol):so these are basically the requirements or options of the (SMTP-protocol): acc to which we have to create the (transporter) or (transporter-object) to send the emails to the (users) over the internet:

  // There are two main ways to use the SMTP protocol for sending emails:
  // -> 1: Using an SMTP protocol with a third-party email service provider:
  // In this approach, you rely on external email service providers like Gmail, Outlook, or SendGrid, which handle the email delivery process for you.
  
  // -> 2: Using an SMTP protocol by creating your own email server:
  // This approach is typically used for larger or more complex projects where you need complete control over the email-sending process. It allows you to set up your own email server to handle email transmissions independently.


  const transporter = nodemailer.createTransport({

    // -> 2 =  Understanding SMTP (Simple Mail Transfer Protocol):
    // SMTP is a protocol used for email transmission over the internet. It is responsible for sending emails from the sender to the receiver. SMTP ensures that emails are delivered efficiently and securely.
    // Just like HTTP/HTTPS is used to establish connections with web-servers, SMTP is the protocol used to connect with the email-server to send emails over the internet.
    // SMTP ensures smooth and efficient email delivery by acting as a bridge between the application (e.g., our Node.js app) and the email-server.
     
    // -> 3 =  Configuring the Transporter Object:
    // -> 3.1 = Configuring the Host or service-Provider:
    // -> 3.2 = Configuring the Authentication Details:
    // -> 3.3 = Configuring Other Settings:





  });
}

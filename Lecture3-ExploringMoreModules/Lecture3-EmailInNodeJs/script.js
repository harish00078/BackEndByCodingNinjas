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
    // -> 3.2 = Configuring the Authentication Details:through which we are gonna be able to verify the (sender's identity):and send emails to the (users):
    // -> 3.3 = Configuring Other Settings:
    service:"gmail",
    auth:{
      user:"harishpathania150@gmail.com",
      // -> V.IMP: we have to use the (app-password) instead of the (gmail-password):because the (gmail-password) is not gonna be work with the (nodemailer) module:
      // this is security feature of the (gmail):which is not gonna be allow the (third-party-apps) to access the (gmail-account) with the (gmail-password):we have to use the (app-password) instead of the (gmail-password) to access the (gmail-account) with the (third-party-apps):
      pass:"ydokpxiljdbhkpyw"
    }

  });

  // -> 4 = Configuring the Email:which want to send to the user:
  // -> 4.1 = Configuring the Email Details or content:
  // before sending email to the user:we have to configure the email details:like (to),(from),(subject) and (text):
  // -> 4.2 = details or content of the email:will also with in the object:
  // we call this object as (mailOptions):
  const mailOptions ={
    from:"harishpathania150@gmail.com",
    to:"harishkunar987@gmail.com",  
    subject:"welcome to Nodejs App",
    text:"this is an email from Nodejs App:congratulations you have successfully signed up for the Nodejs App"
  }

  // -> 5 = Sending the Email:know we can send the email to the user:the email which we have configured or created:with the help of the (transporter-object) which we have created above:
  // -> 5.1 = Sending the Email:
  // -> 5.2 = Sending the Email:with the help of the (transporter-object) which we have created above:
  // -> V.IMP: 5.3 = for sending the email to the user:we have to call the (sendMail) method of the (transporter-object):and pass the (mailOptions) object as an argument to the (sendMail) method:
  // V.IMP:As we know that we basically use the (try-catch) block to handle the errors in the asynchronous-code or we can say in the (async-and-await) block:
  // because we did not want our application to crash:if there is any error in the asynchronous-code:
  try{
    // know here (sendMail) method also returns a (promise) to us:so we have to use the (await) keyword with the (sendMail) method to handle that promise:because using await keyword its gonna wait for the (promise) to be resolved:
    // IMP:we can also use the (then and catch) block:but using the (await) keyword:is more easy and readable:because of it we did not have to get into the (then and catch) block chain:
    const result = await transporter.sendMail(mailOptions);
    console.log("email sent successfully",result);
  }catch(error){
    console.log("Email sending failed",error);
  }

}


// V.IMP-NOTE:know we have created our nodemailer configuration:with in the function or async-function:now we have to call this function to send the email to the user:
// we have not created it directly on the file:because we have or want to use the (async-and-await) syntax:to handle the email-sending process:for the better readability and error-handling:
sendEmail();
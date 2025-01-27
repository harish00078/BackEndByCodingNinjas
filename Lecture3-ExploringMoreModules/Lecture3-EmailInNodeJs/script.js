// 1: Import nodemailer-module:
const nodemailer = require('nodemailer');

// 2: how we are gonna be use or configure our (nodemailer) to send an emails:

// => 1: first we have to configure the (email) and its (emailer-service) provider or server through which we are gonna be able to send emails to user:
// -> we have to create the function for that:its gonna be the async-function:so for converting a function to async-function we just need to add the async-keyword in front of the function-keyword:
// IMP: we are gonna be using the async-await syntax to send an email:

// -> V.IMP-NOTE: for configuring the (email) and its (emailer-service) provider or server through which we are gonna be able to send-emails to the (userS):
// we are gonna be using the (transporter) or (transporter-object):which is basically gonna help us to send the emails to the (email-server):and then that (email-server) is gonna be sending the email to the (user):

async function sendEmail(){

    // 1:To create a (transporter):we need to call the (createTransport)-method:which is available in the (nodemailer-module):
    // -> this (createTransport)-method is gonna be taking an object:which is gonna be containing the configuration of (email) and its (email-service) server:which we used to send the emails to the (users):
    // V.IMP: (createTransport)-method basically takes the (object) as an argument where we have basically configured the (email) and its (email-service) provider or the server:and after that it is going to be returning the (transporter-object) to us:

    // V.IMP-NOTE:With in the (createTransport)-method object: we basically have to provide or configure multiple things:
    // -> 1 = the (host) of the (email-service) server:like (Gmail):
    // -> 2 = the (user) and (password) key:To authenticate the user:who is sending the email:
    // and many more things:which depend on the (email-service) provider or server and our requirements:

    const transporter = nodemailer.createTransport({

       // => 2 = When communicating with servers, users typically rely on protocols like HTTP or HTTPS to establish a connection.
       // -> Similarly, when it comes to sending emails, we use specific protocols designed for this purpose. One such protocol is SMTP, which stands for Simple Mail Transfer Protocol. 
       // -> SMTP is the standard protocol for sending emails over the internet. It acts as the bridge between our email-sending application, such as a Node.js app, and the email server, ensuring that emails are delivered smoothly and efficiently. By leveraging SMTP, we can connect to email servers and handle email transmissions reliably.
        

    })


}

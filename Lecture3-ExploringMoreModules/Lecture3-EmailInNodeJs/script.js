// 1: Import nodemailer-module:
const nodemailer = require('nodemailer');

// 2: how we are gonna be use or configure our (nodemailer) to send an emails:

// -> 1: first we have to configure the (email) and its (emailer-service) to send emails:
// -> we have to create the function for that:its gonna be the async-function:so for converting a function to async-function we just need to add the async-keyword in front of the function-keyword:
// IMP: we are gonna be using the async-await syntax to send an email:

// -> V.IMP: for configuring the (email) and its (emailer-service) to send emails:we need to create a (transporter):which is basically gonna help us to send the email to the (email-server):and then the (email-server) is gonna be sending the email to the (user):

async function sendEmail(){

    // 1:To create a (transporter):we need to call the (createTransport)-method:which is available in the (nodemailer-module):
    // -> this (createTransport)-method is gonna be taking an object:which is gonna be containing the (service):which we are gonna be using to send the email:
    // -> this (service) basically gonna be the (email-server):which we are gonna be using to send the emails to the (user):
    // -> we gonna be using the (gmail) service to send the emails to the (user):


}

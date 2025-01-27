// 1: Import nodemailer-module:
const nodemailer = require('nodemailer');

// 2: how we are gonna be use or configure our (nodemailer) to send an emails:

// 2: for that first:we have to configure the (email) and (emailer-service) to send emails:
// -> we have to create the function for that:its gonna be the async-function:so for converting a function to async-function we just need to add the async-keyword in front of the function-keyword:
// IMP: we are gonna be using the async-await syntax to send an email:


// 1: first we have to configure the (email) or (email-service):through which we are basically gonna be sending the emails to the (user):this (email) basically first connect to the (email-server):and then send the email to the (user):
// -> for doing that:we need to create a (transporter):which is basically gonna help us to send the email to the (email-server):and then the (email-server) is gonna be sending the email to the (user):

async function sendEmail(){

    // 1:To create a (transporter):we need to call the (createTransport)-method:which is available in the (nodemailer-module):
    // -> this (createTransport)-method is gonna be taking an object:which is gonna be containing the (service):which we are gonna be using to send the email:
    // -> this (service) basically gonna be the (email-server):which we are gonna be using to send the emails to the (user):
    // -> we gonna be using the (gmail) service to send the emails to the (user):


}

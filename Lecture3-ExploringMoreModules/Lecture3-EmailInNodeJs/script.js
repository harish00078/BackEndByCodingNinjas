// 1: Import nodemailer-module:
const nodemailer = require('nodemailer');

// 2: how we are gonna be use or configure our (nodemailer) to send an emails:

// -> 1: first we have to configure the (email) and its (emailer-service) server through which we are gonna be able to send emails:
// -> we have to create the function for that:its gonna be the async-function:so for converting a function to async-function we just need to add the async-keyword in front of the function-keyword:
// IMP: we are gonna be using the async-await syntax to send an email:

// -> V.IMP: for configuring the (email) and its (emailer-service) server through which we are gonna be able to send emails to the (user):
// we need to create a (transporter) or (transporter-object):which is basically gonna help us to send the emails to the (email-server):and then the (email-server) is gonna be sending that email to the (user):

async function sendEmail(){

    // 1:To create a (transporter):we need to call the (createTransport)-method:which is available in the (nodemailer-module):
    // -> this (createTransport)-method is gonna be taking an object:which is gonna be containing the configuration of (email) and its (email-service) server:which we are gonna be used to send the emails to the (user):
    // V.IMP: (createTransport)-method basically takes the (object) as an argument where we have basically configuring the (email) and its (email-service) server:and after that it is going to be returning the (transporter-object) to us:
    const transporter = nodemailer.createTransport({

    })


}

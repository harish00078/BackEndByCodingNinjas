// 1: Import nodemailer module:
const nodemailer = require("nodemailer");

/*
  =========================
  CONFIGURING NODEMAILER TO SEND EMAILS
  =========================

  In order to send emails in Node.js, we use the 'nodemailer' package, which lets us configure an email service and transmit messages easily.

  Overview of the process:
    1. Create a "transporter" object that is configured with the email service and authentication information.
    2. Create an asynchronous function for sending the email, utilizing modern async/await practices for readability and better error handling.
    3. Define email details (recipient, subject, content).
    4. Use the transporter to send the email.
*/

/**
 * Sends an email using nodemailer based on the provided configuration.
 * This function uses async/await for clear asynchronous and error control.
 */
async function sendEmail() {
  /*
    -------------
    1. Creating the Transporter:
    -------------
    - We use nodemailer's 'createTransport' method.
    - This method accepts a configuration object that specifies:
        * The service you are using (e.g., Gmail, Outlook, etc.)
        * Authentication details (user and password -- note restrictions below!)
    - The returned transporter object is the component that knows how to communicate with the email server, and deliver your emails.
    - Under the hood, nodemailer uses the SMTP protocol (Simple Mail Transfer Protocol), which is the de facto standard for sending emails over the internet.
      - Just as HTTP is used for web, SMTP is standard for email transmission.
      - Most third-party email services use SMTP, but you can also set up your own if needed for advanced scenarios.
    - For Gmail: you MUST use an App Password (not your Gmail login!) due to Google's security rules restricting access by third-party apps.
      - Learn more: https://support.google.com/accounts/answer/185833
  */
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "harishpathania150@gmail.com",
      // IMPORTANT:
      // Use an App Password here, not your Google/Gmail account password!
      // This ensures third-party apps (like Node.js) can access your account securely.
      pass: "ydokpxiljdbhkpyw"
    }
  });

  /*
    -------------
    2. Setting Email Details (mailOptions)
    -------------
    - Before sending, you need to create an "email object" that holds:
        * 'from': sender address
        * 'to': recipient address
        * 'subject': the email subject line
        * 'text': the plain text version of your message
        * Optionally, 'html': for rich HTML content
  */
  const mailOptions = {
    from: "harishpathania150@gmail.com",
    to: "harishkunar987@gmail.com",
    subject: "Welcome to Nodejs App",
    text: "This is an email from Nodejs App: congratulations, you have signed up successfully for the Nodejs App."
    // html: "<b>This is an email from Nodejs App: congratulations, you have signed up successfully for the Nodejs App.</b>"
  };

  /*
    -------------
    3. Sending the Email
    -------------
    - Use the 'sendMail' method of the transporter.
    - 'sendMail' returns a promise, so we use 'await' to handle it, wrapped in a try-catch for robust error handling.
    - This ensures that any error thrown during sending is handled gracefully and doesn't crash your app.
    - Printing the result will help you debug and confirm the email sent.
  */
  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", result.response);
  } catch (error) {
    console.error("Email sending failed:", error);
  }
}

// ===========================
// Execute the sendEmail function
// ===========================
// - We invoke it at the bottom so the configuration and sending process happens when the script runs.
// - Wrapping this in an async function improves readability and error handling, especially for real projects.
sendEmail();
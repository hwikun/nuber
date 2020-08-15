import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: "sandboxf7b2d4592412417782d15c3f88b95ad6.mailgun.org",
});

const sendEmail = (subject: string, html: string) => {
  const emailData = {
    from: "leah8608@gmail.com",
    to: "leah8608@gmail.com",
    subject,
    html,
  };
  return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (fullName: string, key: string) => {
  const emailSubject = `Hello ${fullName}, please verify your email`;
  const emailBody = `Verify you email by click <a href="http://nuber.com/verify/${key}/">this link</a>`;
  return sendEmail(emailSubject, emailBody);
};

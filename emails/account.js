const sgMail = require('@sendgrid/mail')
const sendGridApiKey = "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"
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
 
const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "prabirvora@gmail.com",
        subject: "Thanks for joining in",
        text: `Welcome to the app ${name}. Let me know how you get along with the app.`
    }) 
}

module.exports = sendWelcomeEmail
// sgMail.send({
//     to: "prabirvora@gmail.com",
//     from: "prabirvora@gmail.com",
//     subject: "My first Node creation",
//     text: "You're killing it! Keep up the grind"
// }) 
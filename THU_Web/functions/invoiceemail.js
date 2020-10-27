require('dotenv').config()
const sgMail = require('@sendgrid/mail')
const { SENDGRID_API_KEY, SENDGRID_SENDER_EMAIL } = process.env

exports.handler =  async (event, context, callback) => {

    const payload = JSON.parse(event.body)
    const { email, message } = payload

    sgMail.setApiKey(SENDGRID_API_KEY)

    const msg = {
        to: email,
        bcc: "kingsleymadeline@gmail.com",
        from: SENDGRID_SENDER_EMAIL,
        subject: "Invoice Test",
        text: message,
    };

    try{
        await sgMail.send(msg)
        
        return {
            statusCode: 200,
            body: "Message sent"
        }
    } catch(e){
        return {
            statusCode: 500,
            body: e.message
        }
    }
};
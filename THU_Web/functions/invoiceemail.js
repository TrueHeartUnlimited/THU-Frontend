require('dotenv').config()
const sgMail = require('@sendgrid/mail')
const { SENDGRID_API_KEY, SENDGRID_SENDER_EMAIL } = process.env

exports.handler =  async (event, context, callback) => {

    const payload = JSON.parse(event.body)
    const { email, message } = payload

    sgMail.setApiKey(SENDGRID_API_KEY)

    const body = Object.keys(payload).map((k) => {
      return `${k}: ${payload[k]}`
    }).join("<br><br>");

    const msg = {
        to: email,
        bcc: "kingsleymadeline@gmail.com",
        from: SENDGRID_SENDER_EMAIL,
        subject: "Invoice Test",
        text:"test"
    };

    try{
        await sgMail.send(msg)
        
        return {
            statusCode: 200,
            body: "Message sent"
        }
    } catch(e){
        return {
            statusCode: e.code,
            body: e.message
        }
    }
};
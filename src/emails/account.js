const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = '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'

sgMail.setApiKey(process.env.SENDRGRID_API_KEY);

// sgMail.send({
//     to: 'jafare2010@gmail.com',
//     from: 'jafare2010@gmail.com',
//     subject:'This is my first creation',
//     text:'I hope this one actually get to you'
// })
const sendWellcomeEmail = (email, name) =>{
    sgMail.send({
        to:email,
        from: 'jafare2010@gmail.com',
        subject: 'Thanks for joininig',
        text:`Wellcone to the app, ${name} Let me know how you get along the app` 
    })
}

const sendCancelationEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from: 'jafare2010@gmail.com',
        subject: 'sorry to see you go',
        text:`Goodbye, ${name}. I hope to see you back sometime soon `
    })
}
module.exports = {
    sendWellcomeEmail,
    sendCancelationEmail
}
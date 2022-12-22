var nodemailer = require("nodemailer");

class clsSendMail{
    constructor(mail){
        this.To = mail.To;
        this.Subject=mail.Subject;
        this.Message=mail.Message;
        this.Attachment=mail.Attachment;
    }
    async funcsendmail(sendmailReqData){
        var mail = nodemailer.createTransport({
            // host: 'smtp.gmail.com',
            // port: 465,
            // secure: true,
            // auth: {
            // user: 'kawalevishakha93@gmail.com',
            // pass: 'vishukawale'
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
            user: 'kawalevishakha93@gmail.com',
            pass: 'vishukawale'
            
            }
        });
        
        var mailOptions = {
            from: 'kawalevishakha93@gmail.com',
            to: sendmailReqData.To,
            subject: sendmailReqData.Subject,
            html: sendmailReqData.Message
            // ,attachments: [{
            //     // filename: 'text1.txt',
            //     path: process.cwd()+'/admin/uploads/Title Report/1/All-Sale-Deed-2021-10-913-45-33.pdf'
            // }]
        }
        //router.get(''
        mail.sendMail(mailOptions, function(error, info){
                if (error) {
                console.log(error);
                } else {
                console.log('Email sent: ' + info.response);
                }
        });

    }
}
module.exports = new clsSendMail([]);
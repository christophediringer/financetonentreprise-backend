const nodemailer = require('nodemailer');
const config = require('../Config/config.json');

class EmailService {
    constructor() {
        if (!config.email || !config.email.host || !config.email.port || !config.email.auth) {
            console.error('Configuration email manquante ou incomplète');
            return;
        }

        this.transporter = nodemailer.createTransport({
            host: config.email.host,
            port: config.email.port,
            secure: config.email.secure || false, // true pour 465, false pour les autres ports
            auth: {
                user: config.email.auth.user,
                pass: config.email.auth.pass
            }
        });
    }

    async sendNewCommentNotification(comment) {
        if (!this.transporter) {
            console.error('Transporteur email non initialisé');
            return;
        }

        const article = await comment.getArticle();
        const mailOptions = {
            from: config.email.auth.user,
            to: article.notification_email,
            subject: 'Nouveau commentaire sur votre article',
            text: `Un nouveau commentaire a été posté sur votre article "${article.title}". Contenu : ${comment.content}`
        };

        return this.transporter.sendMail(mailOptions);
    }
}

module.exports = new EmailService();


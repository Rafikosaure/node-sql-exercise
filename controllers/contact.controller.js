import { Contact } from "../models/index.js";
import nodemailer from 'nodemailer'
import env from '../configuration/env.js'


const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "b3ef7564baa43c",
        pass: "b1bc5f130e5741"
    }
});


// J'export directement ma fonction
// Ca me permet d'eviter de faire un export en fin de fichier
export const sendMail = async (req, res) => {
    try {
        const contact = await Contact.create(req.body);

        await transport.sendMail({
            from: env.MAIL_FROM, // sender address
            to: "rafikbensadi@test.com", // list of receivers
            subject: "Nouvelle prise de contact via le site", // Subject line
            text: "Hello world?", // plain text body
            html: `
                <ul>
                    <li>Prénom : ${contact.firstname}</li>
                    <li>Nom : ${contact.lastname}</li>
                    <li>Numéro de téléphone : ${contact.phonenumber}</li>
                    <li>Email : ${contact.email}</li>
                    <li>Message : ${contact.message}</li>
                </ul>
            `, // html body
        });

        res.status(201).json(contact);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Erreur lors de l'envoi",
            trace: err
        })
    }
}
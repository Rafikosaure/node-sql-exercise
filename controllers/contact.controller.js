import { Contact } from "../models/index.js"

const add = async (req, res) => {
    try {
        const contact = await Contact.create(req.body);
        res.status(201).json("Contact added!")
    } catch (error) {
        // En cas d'erreur, renvoie une réponse avec le statut 500 (erreur interne du serveur) et le message d'erreur
        res.status(500).json({ error: "Error while creating contact!" })
    }
}

export { add }
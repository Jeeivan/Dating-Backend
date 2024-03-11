import '../../config/database.js'
import { Form } from '../../models/form.js'

export async function displayForms (req, res) {
    try {
        const forms = await Form.find()
        res.status(200).json(forms)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
    }
}

export async function submitForm (req, res) {
    try {
        const form = new Form({
            name: req.body.name,
            gender: req.body.gender,
            age: req.body.age,
            sexuality: req.body.sexuality
        })
        await form.save()
        res.json(form)
    } catch (err) {
        console.error('Error submitting form:', err)
        res.status(500).send(err.message)
    }
}
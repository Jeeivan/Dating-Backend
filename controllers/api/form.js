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

export async function displaySingleForm (req, res) {
    try {
        const { id } = req.params

        const form = await Form.findById(id)

        if (!form) {
            return res.status(404).json({ message: "Form not found"})
        }

        res.status(200).json(form)
    } catch (error) {
        console.error("Error getting form", error)
        res.status(500).json({ message: "Internal server error" })
    }
}

export async function submitForm (req, res) {
    try {
        const form = new Form({
            name: req.body.name
        })
        await form.save()
        res.json(form)
    } catch (err) {
        console.error('Error submitting form:', err)
        res.status(500).send(err.message)
    }
}

export async function updateForm (req, res) {
    try {
        const { id } = req.params

        let updatedForm = await Form.findByIdAndUpdate(id, req.body, {new: true})

        if (!updatedForm) {
            return res.status(404).json({ message: "Form not found" })
        }

        res.json(updateForm)
    } catch (err) {
        console.error("Error updating form", err)
        res.status(500).send(err.message)
    }
}

export async function addAnswers(req, res) {
    try {
        const { id } = req.params;

        // Update the form document with the provided data
        const updatedForm = await Form.findByIdAndUpdate(id, {
            $push: {
                answers: req.body.answers,
                points: req.body.points
            }
        }, { new: true });

        if (!updatedForm) {
            return res.status(404).json({ message: "Form not found" });
        }

        res.json(updatedForm);
    } catch (err) {
        console.error('Error updating form:', err);
        res.status(500).send(err.message);
    }
}
import {displayForms, submitForm } from '../../controllers/api/form.js'
import express from 'express'

const formRouter = express.Router()

formRouter.get('/display', async (req, res) => displayForms(req, res))

formRouter.post('/submit', async (req, res) => submitForm(req, res))

export default formRouter

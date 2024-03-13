import {displayForms, displaySingleForm, submitForm, updateForm, addAnswers } from '../../controllers/api/form.js'
import express from 'express'

const formRouter = express.Router()

formRouter.get('/display', async (req, res) => displayForms(req, res))

formRouter.get('/display/single/:id', async (req, res) => displaySingleForm(req, res))

formRouter.post('/submit', async (req, res) => submitForm(req, res))

formRouter.put('/update/:id', async (req, res) => updateForm(req, res))

formRouter.put('/add/:id', async (req, res) => addAnswers(req, res))

export default formRouter

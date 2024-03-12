import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    name: {
        type: String
    },
    her_age: {
        type: Number
    },
    his_age: {
        type: Number
    },
    answers: {
        type: [String]
    },
    points: {
        type: [Number]
    }
})

export const Form = mongoose.model('Form', formSchema)
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Project = new Schema(
    {
        name: { type: String, required: true },
        role: { type: [String], required: true },
        location: { type: [String], required: true },
        yearsExperience: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('projects', Project)
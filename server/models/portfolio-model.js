const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Project = new Schema(
    {
        name: { type: String, required: true },
        "role": { type: [String], required: true },
        client: { type: [String], required: true },
        technologies: { type: [String], required: true },
        location: { type: [String]},
        year: { type: Number},
    },
    { timestamps: true },
)

module.exports = mongoose.model('projects', Project)
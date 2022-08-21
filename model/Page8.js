import mongoose from 'mongoose'

const Page8Schema = new mongoose.Schema({

    title: { type: String, default: '' },
    map: { type: String, default: '' },


}, { timestamps: true, versionKey: false })

module.exports = mongoose.models.Page8 || mongoose.model('Page8', Page8Schema)
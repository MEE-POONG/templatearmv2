import mongoose from 'mongoose'

const Page6Schema = new mongoose.Schema({

    title: { type: String, default: '' },
    des: { type: String, default: '' },


}, { timestamps: true, versionKey: false })

module.exports = mongoose.models.Page6 || mongoose.model('Page6', Page6Schema)
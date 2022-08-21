import mongoose from 'mongoose'

const Page2Schema = new mongoose.Schema({
    des: { type: String, default: '' },
    des2: { type: String, default: '' },
    img: { type: String, default: '' },
    title: { type: String, default: '' },
}, { timestamps: true, versionKey: false })

module.exports = mongoose.models.Page2 || mongoose.model('Page2', Page2Schema)
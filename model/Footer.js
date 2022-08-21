import mongoose from 'mongoose'

const FooterSchema = new mongoose.Schema({
    des: { type: String, default: '' },
    local: { type: String, default: '' },
    email: { type: String, default: '' },
    tel: { type: Number, default: 0 },
    line: { type: String, default: '' },
    instagrm: { type: String, default: '' },
    facebook: { type: String, default: '' },
}, { timestamps: true, versionKey: false })

module.exports = mongoose.models.Footer || mongoose.model('Footer', FooterSchema)
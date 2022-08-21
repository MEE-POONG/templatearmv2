import mongoose from 'mongoose'

const Page4Schema = new mongoose.Schema({

    title: { type: String, default: '' },
    des: { type: String, default: '' },

    img: { type: String, default: '' },
    name: { type: String, default: '' },
    pice: { type: String, default: '' },
    desm: { type: String, default: '' },

    img2: { type: String, default: '' },
    name2: { type: String, default: '' },
    pice2: { type: String, default: '' },
    desm2: { type: String, default: '' },

    img3: { type: String, default: '' },
    name3: { type: String, default: '' },
    pice3: { type: String, default: '' },
    desm3: { type: String, default: '' },

}, { timestamps: true, versionKey: false })

module.exports = mongoose.models.Page4 || mongoose.model('Page4', Page4Schema)
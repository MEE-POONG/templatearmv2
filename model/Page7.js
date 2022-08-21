import mongoose from 'mongoose'

const Page7Schema = new mongoose.Schema({

    title: { type: String, default: '' },
    desban: { type: String, default: '' },
    img: { type: String, default: '' },
    name: { type: String, default: '' },
    des: { type: String, default: '' },

    desban2: { type: String, default: '' },
    img2: { type: String, default: '' },
    name2: { type: String, default: '' },
    des2: { type: String, default: '' },

    desban3: { type: String, default: '' },
    img3: { type: String, default: '' },
    name3: { type: String, default: '' },
    des3: { type: String, default: '' },
}, { timestamps: true, versionKey: false })

module.exports = mongoose.models.Page7 || mongoose.model('Page7', Page7Schema)
import mongoose from 'mongoose'

const Page5Schema = new mongoose.Schema({

    title: { type: String, default: '' },
    des: { type: String, default: '' },

    img1: { type: String, default: '' },
    name1: { type: String, default: '' },
    desm1: { type: String, default: '' },

    img2: { type: String, default: '' },
    name2: { type: String, default: '' },
    desm2: { type: String, default: '' },

    img3: { type: String, default: '' },
    name3: { type: String, default: '' },
    desm3: { type: String, default: '' },

    img4: { type: String, default: '' },
    name4: { type: String, default: '' },
    desm4: { type: String, default: '' },

    img5: { type: String, default: '' },
    name5: { type: String, default: '' },
    desm5: { type: String, default: '' },

    img6: { type: String, default: '' },
    name6: { type: String, default: '' },
    desm6: { type: String, default: '' },
    
}, { timestamps: true, versionKey: false })

module.exports = mongoose.models.Page5 || mongoose.model('Page5', Page5Schema)
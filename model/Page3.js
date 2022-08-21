import mongoose from 'mongoose'

const Page3Schema = new mongoose.Schema({
    title:{ type: String, default: '' },

    img1:{ type: String, default: '' },
    des1:{ type: String, default: '' },
    name1:{ type: String, default: '' },
    rank1:{ type: String, default: '' },
    desm1:{ type: String, default: '' },

    img2:{ type: String, default: '' },
    des2:{ type: String, default: '' },
    name2:{ type: String, default: '' },
    rank2:{ type: String, default: '' },
    desm2:{ type: String, default: '' },

   
}, { timestamps: true, versionKey: false })

module.exports = mongoose.models.Page3 || mongoose.model('Page3', Page3Schema)
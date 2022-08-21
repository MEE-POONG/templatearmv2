import mongoose from 'mongoose'

const Page1Schema = new mongoose.Schema({
    title: { type: String, default: '' },
    des: { type: String, default: '' },
    img1: { type: String, default: '' },
    type1: {type: String, default: ''},
    name1: {type: String, default: ''},
    desmanu1: {type: String, default: ''},

    img2: { type: String, default: '' },
    type2: {type: String, default: ''},
    name2: {type: String, default: ''},
    desmanu2: {type: String, default: ''},

    img3: { type: String, default: '' },
    type3: {type: String, default: ''},
    name3: {type: String, default: ''},
    desmanu3: {type: String, default: ''},
    
}, { timestamps: true, versionKey: false })

module.exports = mongoose.models.Page1 || mongoose.model('Page1', Page1Schema)
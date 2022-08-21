import mongoose from 'mongoose'

const AboutSchema = new mongoose.Schema({
    name: {type: String, default: ''},
    nickname: {type: String, default: ''},
    tal: {type: Number, default: ''},
    address: {type: String, default: ''},
    age: {type: Number, default: ''},
    
}, { timestamps: true, versionKey: false })

module.exports = mongoose.models.About || mongoose.model('About', AboutSchema)

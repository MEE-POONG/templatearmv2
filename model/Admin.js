import mongoose from 'mongoose'

const AdminSchema = new mongoose.Schema({
    
    name: { type: String, default: ''},
    rank: { type: String, default: ''},
    tel: { type: Number, default: 0 },
    createdBy: mongoose.Types.ObjectId,
    updatedBy: mongoose.Types.ObjectId
}, { timestamps: true, versionKey: false })

module.exports = mongoose.models.Admin || mongoose.model('Admin', AdminSchema)
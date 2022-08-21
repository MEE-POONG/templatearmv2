import mongoose from 'mongoose'

const BannerHomeSchema = new mongoose.Schema({
    img: { type: String, default: '' },
    title: { type: String, default: '' },
    des: { type: String, default: '' },
}, { timestamps: true, versionKey: false })

module.exports = mongoose.models.BannerHome || mongoose.model('BannerHome', BannerHomeSchema)
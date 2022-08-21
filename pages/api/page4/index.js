import dbConnect from '../../../lib/dbConnect'
import Page4 from '../../../model/page4.js'
export default async (req, res) => {
    const { method } = req 

    await dbConnect()
    
    switch (method) {
        case 'GET':
            try {
                const data = await Page4.findOne()
                res.status(200).json(data)
            } catch (error) {
                res.status(400).json({ error: error.message })
            }    
            break
        case 'POST':
            try {
                const data = await Page4.create(req.body)
                res.status(200).json(data)
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
                break
        default:
            res.status(404).json({ error: '404 NOT FOUND'})
            break
    }
}
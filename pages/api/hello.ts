
export default function handler(req, res) {

    res.status(200).json({ newNumber: Math.floor(Math.random() * 100) })
    
}
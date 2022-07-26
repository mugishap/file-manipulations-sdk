const jwt = require('jsonwebtoken')
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

exports.checkForAccess = async (req, res, next) => {
    try {
        if (!req.headers.authorization) return res.status(401).json({ error: "You are not authorized. Go to the '/getauthentication' endpoint to get access-token" })
        const token = req.headers.authorization.split(" ")[1]
        const decoded = await jwt.verify(token, JWT_SECRET_KEY)

        if (!decoded) return res.status(401).json({ message: "You are not authorized. Go to the '/getauthentication' endpoint to get access-token" })
        if (decoded.expiry < Date.now() / 1000) { return res.status(401).json({ message: "Token has expired" }) }

        req.user = decoded
        next()
    } catch (error) {
        //console.log(error)
        return res.status(500).json({ error: error.message })
    }
}

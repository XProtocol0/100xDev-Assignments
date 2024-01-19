const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    try {
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        if (decodedValue.username) {
            next();
        }
    } catch(e) {
        res.status(400).json({
            msg: "Authorization error"
        })
    }
    
}

module.exports = adminMiddleware;
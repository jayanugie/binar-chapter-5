const basicAuth = require('express-basic-auth');
const user = require('express').Router();
const users = {
    'jayanugie': 'passwordku',
    'fasil': 'passwordfasil',
    'binar': 'passwordbinar'
}

user.use(basicAuth({
    challenge: true, users     
}));

user.post('/login', (req, res) => {
    res.status(200).json({
        username: `${req.auth.user}`,
        password: `${req.auth.password}`
    });
});

module.exports = user;

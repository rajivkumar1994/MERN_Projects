const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const SignUpuser = require('../models/SignupModel');

router.get('/app', (req,res) => {
    res.send('Hello World');
});

router.post('/send', async (req,res) => {
    const bcryptPwd = await bcrypt.genSalt(10);
    const encryptedPwd = await bcrypt.hash(req.body.password, bcryptPwd);
    const signedupUser = new SignUpuser({
        fullName: req.body.fullName,
        userid: req.body.userid,
        email: req.body.email,
        password: encryptedPwd,
    });
    signedupUser.save().then(data => {
        res.status(200).json({
            data
        });
    }).catch(error => {
        res.status(404).json({
            error
        });
    })
})

module.exports = router;
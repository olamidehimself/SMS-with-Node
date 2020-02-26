const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const User = require('../../models/User')
const moment = require('moment');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../../middleware/auth');

router.get('/', auth, async (req, res) => {
    try {
        const user = await  User.findById(req.user.id).select('-password');
        res.json(user);
    } catch(err){
        console.error(err.message);
    }
});

router.post('/register',[
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Password cant be less than 6 characters').isLength({min: 6})
],async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {name, email, password, role} = req.body
    // console.log(req.body);
    // res.send(req.body);
    try {
        let user = await User.findOne({email});

        if(user){
            return res.status(400).json({ errors: [{msg: 'User already exists'}]});
        }

        const trial_until = moment().add(1, 'M');

        user = new User({
            name, email, password, role, trial_until
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);
        await user.save();

        const payload = {
            user:{
                id:user.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'),{ expiresIn: 360000},
            (err, token) => {
                if(err)
                    throw err;
                res.json({token});
            });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;
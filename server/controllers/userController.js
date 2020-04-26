const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const { User } = require('../models/user');

router.get('/api/users', (req, res) => {
    User.find((err, data) => {
        if(!err) res.send(data);
        else {console.log('error on getting lists')}
    })
})

module.exports = router;

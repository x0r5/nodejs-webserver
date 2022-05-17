const express = require('express');
const router = express.Router();

//base route: /users/

router.get('/', (req, res)=>{
    res.send('User List');
})

router.get('/new', (req, res)=>{
    res.send('User new form');
})

module.exports = router;
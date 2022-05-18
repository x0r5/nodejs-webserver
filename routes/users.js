const express = require('express');
const router = express.Router();

//base route: /users/

router.get('/', (req, res)=>{
    res.send('User List');
})

router.get('/new', (req, res)=>{
    res.send('User new form');
})

router.post('/', (req, res)=>{
    res.send('Create user post');
})

router.get('/:id', (req, res)=>{
    res.send(`User get: ${req.params.id}`);
})

router.put('/:id', (req, res)=>{
    res.send(`Update user with id: ${id}`);
})

router.delete('/:id', (req, res)=>{
    res.send(`Delete user with id: ${id}`);
})

module.exports = router;
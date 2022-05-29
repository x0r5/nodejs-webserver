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

router.route('/:id')
    .get((req, res)=>{
        res.send(`User get: ${req.params.id}`);
    })

    .put((req, res)=>{
        res.send(`Update user with id: ${id}`);
    })

    .delete((req, res)=>{
        res.send(`Delete user with id: ${id}`);
    })

module.exports = router;
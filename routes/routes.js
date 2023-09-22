const express = require('express');
const router = express.Router();
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');
localStorage.setItem('myFirstKey', 'myFirstValue');
console.log(localStorage.getItem('myFirstKey'));

router.get('/', (req, res) => {
    res.render('index')
})
router.post('/login', (req, res) => {
    window.alert()
    let data = {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
    }
    localStorage.setItem("user", JSON.stringify(data))
    // res.redirect(`/api/room?username=${data.name}&roomname=${data.email}`)
    // console.log("login called", io)
    res.send(data)
})
router.post('/room', (req, res) => {
    let data
    if (data) {
        roomname = data.email;
        username = data.name;
        res.redirect(`/room?username=${username}&roomname=${roomname}`)
    } else
        console.log("Login")
})
router.get('/room', (req, res) => {
    res.render('room')
})
module.exports = router;
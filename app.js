const express = require('express');
const bodyParser = require('body-parser');

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
const customjs = require("./public/custom")
var $ = require('jquery')(window);
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
var port = process.env.PORT || 3000;
var customerjs = require('./public/custom')
const { getUsers, users } = require('./utils/getUsers');
const store = require("store2")
//Render Index page
const server = app.listen(port, () => {
    console.log(`Server Running on ${port}`)
})
const io = require('socket.io')(server, {
    forceNew: true,
    transports: ["polling"],
})
global.io = io
app.get('/', (req, res) => {
    res.render('index')
})
app.set("socketio", io)
let socketid = ""
let sockobj
//Get username and roomname from form and pass it to room
app.post('/login', async (req, res) => {
    let data = {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
    }
    let response = await customjs.saveuser(req, res, data)

    res.redirect(`/`)

})
app.post('/loginuser', async (req, res) => {
    let data = {
        email: req.body.email,
        password: req.body.password
    }

    let response = await customjs.loginuser(req, res, data)
    // console.log(socketid, "socketid")
    // res.render('index')
    res.send({ response })
    // return response

})
//Rooms
app.get('/room', (req, res) => {
    res.render('room')
})
// app.get('/room/:id', async (req, res) => {
//     let id = req.param('id')
//     let response = await customjs.getAllUsers(id)
//     console.log(response)
//     res.render('room')
// })
app.post('/getUserMessage', async (req, res) => {
    console.log(req.body,"72")
    let response = await customjs.getUsersMessage(req.body)

    io.on('connection', (socket) => {
        socket.emit('changeschat', response.data)
    })
    res.send(response)
})
app.post('/addChat', async (req, res) => {
    let response = await customjs.savemessage(req.body)
    res.send(response)
})
app.post('/getAllUsers', async (req, res) => {
    let response = await customjs.getAllUsers(0, req.body.myid)
    res.send(response)
})
app.post('/searchuser', async (req, res) => {
    let response = await customjs.searchuser(req.body.searchvalue)
    res.send(response)
})
app.post('/changeProfile', async (req, res) => {
    let response = await customjs.changeprofile(req, res)
    res.send(response)
})
app.post('/updateUser', async (req, res) => {
    console.log(req.body.Email)
    let payload = {
        email: { Email: req.body.Email },
    }
    let insert_data = {
        isonline: 0,
    }
    let response = await customjs.updateuser(payload, insert_data)
    res.send(response)
})
app.post('/updateSocketID', async (req, res) => {
    console.log(req.body.Email)
    let payload = {
        email: { id: req.body.myid },
    }
    let insert_data = {
        isonline: 1,
        socketid: req.body.socketid
    }
    let response = await customjs.updateuser(payload, insert_data)
    res.send(response)
})
//Start Server


// const io = socket(server);
// require('./utils/socket')(io);
io.on('connection', async (socket) => {
    console.log("socket connection", socket.id)

    socket.join(socket.id);
    socketid = socket.id
    socket.emit('joined-user', store.get("userdata"))
    socket.emit('getsocketid', socket.id)
    socket.emit('online-users')
    socket.on('chat', (data) => {
        data["socketid"]=socket.id
        socket.broadcast.emit('chat', data);
    })
    //Broadcasting the user who is typing
    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data)
    })
    socket.on('joined-user', (data) => {
        socket.in(socket.id).emit('joined-user', data)
    })
    socket.on('online-users', () => {
        socket.broadcast.emit('online-users');
    })


    //Remove user from memory when they disconnect
    socket.on('disconnecting', () => {
        var rooms = Object.keys(socket.rooms);
        var ids = socket.id
        console.log(ids, "disconnec")
        let payload = {
            email: { socketid: socket.id },
        }
        let insert_data = {

            isonline: 0
        }
        // socket.emit('joined-user', response.data)
        customjs.updateuser(payload, insert_data)
        socket.broadcast.emit('online-users');
        // var socketId = rooms[0];
        // var roomname = rooms[1];
        // users[roomname].forEach((user, index) => {
        //     if (user[socketId]) {
        //         users[roomname].splice(index, 1)
        //     }
        // });

        //Send online users array
        // io.to(roomname).emit('online-users', getUsers(users[roomname]))
    })

})



module.exports = app;


const output = document.getElementById('output');
const message = document.getElementById('message');
const opens = document.getElementById('open');
const send = document.getElementById('send');
const feedback = document.getElementById('feedback');
const roomMessage = document.querySelector('.room-message');
const users = document.querySelector('.users');
const chatclicked = document.querySelector('.chatclicked');
const signout = document.getElementById('sign-out');
//Socket server URL

let url2 = window.location.origin + "/" + window.document.URL.split("/")[window.document.URL.split("/").length - 1]
const socket = io.connect();
socket.on('connect', () => { console.log(socket.connected); });
//Fetch URL Params from URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const username = urlParams.get('username');
const roomname = urlParams.get('roomname');

//Display the roomname the user is connected to
// roomMessage.innerHTML = `Connected in room ${roomname}`

//Emitting username and roomname of newly joined user to server
socket.emit('joined-user', {
    username: username,
    roomname: roomname
})
document.getElementById("OpenImgUpload").addEventListener('click', () => {
    $('#imgupload').trigger('click');
})
$( "#imgupload" ).change(function() {
    var formData = new FormData();
    formData.append('image', event.target.files[0]);
    formData.append('userid', JSON.parse(localStorage.getItem("User")).id);
    $.ajax({
        url: "/changeProfile",
        data: formData,
        type: "POST",
        success: function (result) {
            if (result.status) {
                var id = window.document.URL.split("#")[1];
                let data = {
                    userby: JSON.parse(localStorage.getItem("User")).id,
                    userto: id
                }
                getmessages(data)
                socket.emit("online-users")
            }

        },
        error: function (result) {
        }
    });
});
//Sending data when user clicks send
send.addEventListener('click', () => {

    socket.emit('chat', {
        username: JSON.parse(localStorage.getItem("User")).id,
        message: message.value,
        to: window.document.URL.split("#")[1],
        roomname: roomname
    })
    let payload = {
        sendid: JSON.parse(localStorage.getItem("User")).id,
        to: window.document.URL.split("#")[1],
        message: message.value
    }
    $.ajax({
        url: "/addChat",
        data: payload,
        type: "POST",
        success: function (result) {
            if (result.status) {
                var id = window.document.URL.split("#")[1];
                let data = {
                    userby: JSON.parse(localStorage.getItem("User")).id,
                    userto: id
                }
                getmessages(data)
                socket.emit("online-users")
            }

        },
        error: function (result) {
        }
    });
    message.value = '';
})

// Sending username if the user is typing
message.addEventListener('keypress', () => {
    console.log("41")
    socket.emit('typing', { username: JSON.parse(localStorage.getItem("User")).id, to: window.document.URL.split("#")[1], removeit: 0 })
})

//Displaying if new user has joined the room
socket.on('joined-user', (data) => {
    let user
    if (localStorage.getItem("User")) {
        user = JSON.parse(localStorage.getItem("User"))
    }

})

//Displaying the message sent from user
socket.on('chat', (data) => {

    let payload = {
        sendid: JSON.parse(localStorage.getItem("User")).id,
        to: window.document.URL.split("#")[1],
        message: data.message
    }
    if (data.username == JSON.parse(localStorage.getItem("User")).id) {
        console.log(data)
        getmessages(data)
    } else {

        let data = {
            userby: window.document.URL.split("#")[1],
            userto: JSON.parse(localStorage.getItem("User")).id
        }
        getmessages(data, "right")
        // $.ajax({
        //     url: "/getUserMessage",
        //     data: data,
        //     type: "POST",
        //     global: false,
        //     async: false,
        //     success: function (result) {
        //         if (result.status != 0) {
        //             output.innerHTML = ''
        //             if (data.length != 0) {
        //                 for (var i = 0; i < result.data.length; i++) {
        //                     var newNode = document.createElement('div');
        //                     if (result.data[i].display == 'left')
        //                         newNode.setAttribute("class", "comment other")
        //                     else
        //                         newNode.setAttribute("class", "comment me")
        //                     newNode.innerHTML = ` <img src = ${'https://placekitten.com/300/300?image=10'} alt = "" >
        //             <div class="bubble">
        //                 ${result.data[i].message}
        //             </div>`;

        //                     output.appendChild(newNode);
        //                 }
        //             }
        //         } else {
        //             output.innerHTML = ''
        //         }
        //     }
        // });
    }

    // feedback.innerHTML = '';
    // document.querySelector('.chat-message').scrollTop = document.querySelector('.chat-message').scrollHeight
    // document.querySelector('.chat-message').animate({
    //     scrollTop: document.querySelector('.chat-message').prop("scrollHeight")
    // }, 500);
    // $('html, body').animate({
    //     scrollTop: $(".chat-message").offset().top
    // }, 2000);
})

//Displaying if a user is typing
socket.on('typing', (data) => {
    let user = JSON.parse(localStorage.getItem("User"))
    if (user.id == data.to && window.document.URL.split("#")[1] == data.username && data.removeit == 0) {
        document.getElementById("typing").style.display = "block"
    } else if (user.id == data.to && window.document.URL.split("#")[1] == data.username && data.removeit == 1) {
        document.getElementById("typing").style.display = "none"
    }// feedback.innerHTML = '<p><em>' + user + ' is typing...</em></p>';
})
function onfocusout() {
    socket.emit('typing', { username: JSON.parse(localStorage.getItem("User")).id, to: window.document.URL.split("#")[1], removeit: 1 })
}

socket.on('getsocketid', (data) => {
    localStorage.setItem("SocketID", JSON.stringify(data))
    $.ajax({
        url: "/updateSocketID",
        data: { myid: JSON.parse(localStorage.getItem("User")).id, socketid: data },
        type: "POST",
        success: function (list) {
            socket.emit('online-users')
            // getusers(list, 1)
            // let url = window.location.origin
            // window.location.href = url

        }
    });
})
//Displaying online users
socket.on('online-users', () => {
    $.ajax({
        url: "/getAllUsers",
        data: { myid: JSON.parse(localStorage.getItem("User")).id },
        type: "POST",
        success: function (list) {
            getusers(list, 0)
        }
    });
})
function getusers(list, doit) {
    let data = list.data
    users.innerHTML = ''
    let currentuser = JSON.parse(localStorage.getItem("User"))
    // console.log(data, "150")
    if (data != undefined) {
        for (var i = 0; i < data.length; i++) {
            if (currentuser.email != data[i].email) {
                var online = ""
                if (data[i].isonline == 1)
                    online = "<div class='isonline2'></div>"
                let html = `<button class="cusbtn chatclicked " id="${data[i].id}">
                <span hidden class="${data[i].Name}"></span>
                 <div class="contact">
                 ${online}
                <a class="userlink" href="#${data[i].id}"><div class="icon">
                    <img src="https://placekitten.com/200/200" alt="kitten-image">
                </div>
                <div class="blurb">
                    <h2 class="name username${data[i].id}">
                        ${data[i].Name}
                    </h2>
                </div>
`
                let count = data[i].count > 0 ? `<div class="messgecount ${data[i].id}">${data[i].count}</div></a></div></button>` : `</a></div></button>`
                // let count = list.count.findIndex((x) => x.id == data[i].id) != -1 ? `<div class="messgecount">${list.count[list.count.findIndex((x) => x.id == data[i].id)].unread}</div></a></div></button>` : `</a></div></button>`
                users.innerHTML += html + count
            }
        }

        $(".chatclicked").click(function () {
            document.getElementById("typing").style.display = "none"
            message.value = ""
            // alert(window.document.URL.split("#")[1])
            var id = $(this).attr('id');
            let data = {
                userby: JSON.parse(localStorage.getItem("User")).id,
                userto: id,
                allowread: 1
            }
            let counters = document.getElementsByClassName(id)
            if (counters.length > 0)
                counters[0].style.display = "none"
            if (id != window.document.URL.split("#")[1]) {
                getmessages(data)
            }
        })
        if (doit == 1) {
            let url = window.location.origin + `/room#${JSON.parse(localStorage.getItem("User")).id == data[0].id ? data[1].id : data[0].id} `
            // console.log(url, "url")
            window.location.href = url
            let data3 = {
                userby: JSON.parse(localStorage.getItem("User")).id,
                userto: JSON.parse(localStorage.getItem("User")).id == data[0].id ? data[1].id : data[0].id,
                allowread: 1
            }
            getmessages(data3)
        }
    }
}
function getmessages(data, display = 'left') {
    $.ajax({
        url: "/getUserMessage",
        data: data,
        type: "POST",
        success: function (result) {
            opens.innerHTML = ''
            opens.innerHTML += `
                    <div class="headeruser">
                     <div class="icon">
                            <img src="https://placekitten.com/300/300?image=10" alt="kitten-image" height="60" width="60" class="kitty">
                            <div class='isonline'></div>
                        </div>
                        <div class="blurb">
                            <h2 class="name">
                                ${document.getElementById(window.document.URL.split("#")[1]).childNodes[1].className}
                            </h2>
                        </div>
                    </div>`
            if (result.status != 0) {
                let dataofheader
                output.innerHTML = ''

                if (result.data.length != 0) {
                    for (var i = 0; i < result.data.length; i++) {
                        if (result.data[i].sendid != JSON.parse(localStorage.getItem("User")).id && !dataofheader) {
                            dataofheader = result.data[i]
                        }
                        var newNode = document.createElement('div');
                        var submol
                        if (result.data[i].display == display) {
                            newNode.setAttribute("class", "comment me")
                            submol = `${result.data[i].readed == 1 ? '<span class="green">'+`<svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill="#64af50" d="M 23.28125 7.28125 L 11.5 19.0625 L 8.71875 16.28125 L 7.28125 17.71875 L 10.0625 20.5 L 8 22.5625 L 1.71875 16.28125 L 0.28125 17.71875 L 7.28125 24.71875 L 8 25.40625 L 8.71875 24.71875 L 11.5 21.9375 L 14.28125 24.71875 L 15 25.40625 L 15.71875 24.71875 L 31.625 8.71875 L 30.1875 7.28125 L 15 22.5625 L 12.9375 20.5 L 24.71875 8.71875 Z"/></svg>`+'</span>' : result.data[i].readed == 0 && result.data[i].isonline == 1 ? '<span class="">'+`<svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill="#72c5ff" d="M 23.28125 7.28125 L 11.5 19.0625 L 8.71875 16.28125 L 7.28125 17.71875 L 10.0625 20.5 L 8 22.5625 L 1.71875 16.28125 L 0.28125 17.71875 L 7.28125 24.71875 L 8 25.40625 L 8.71875 24.71875 L 11.5 21.9375 L 14.28125 24.71875 L 15 25.40625 L 15.71875 24.71875 L 31.625 8.71875 L 30.1875 7.28125 L 15 22.5625 L 12.9375 20.5 L 24.71875 8.71875 Z"/></svg>`+'</span>' : '<span class="green">'+`<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <polyline fill="none" stroke="#72c5ff" stroke-width="2" points="2 14 9 20 22 4"/>
                          </svg>`+'</span>'}`;
                        }
                        else{
                            newNode.setAttribute("class", "comment other")
                            submol=""
                        }
                        newNode.innerHTML = `<div><img src ='https://placekitten.com/300/300?image=10' alt = "${result.data[i].message}" />
                       
                <div class="date">${new Date(result.data[i].time).toLocaleTimeString().split(":")[0] + ":" + new Date(result.data[i].time).toLocaleTimeString().split(":")[1] + " " + new Date(result.data[i].time).toLocaleTimeString().split(" ")[1]}</div>
                        <div class="bubble">
                    ${result.data[i].message}
                </div></div>
                ${submol}   `;
                        output.appendChild(newNode);
                    }
                    // opens.innerHTML = ''
                    // opens.innerHTML += `
                    // <div class="headeruser">
                    //  <div class="icon">
                    //         <img src="https://placekitten.com/300/300?image=10" alt="kitten-image" height="70" width="70" class="kitty">
                    //         <div class='isonline'></div>
                    //     </div>
                    //     <div class="blurb">
                    //         <h2 class="name">
                    //             ${document.getElementById("10").childNodes[1].className}
                    //         </h2>
                    //     </div>
                    // </div>`
                    $(output).animate({ scrollTop: $(output).prop("scrollHeight") });
                }
            } else {
                // output.innerHTML = ''
                // opens.innerHTML = ''
                // opens.innerHTML += `
                // < div class="headeruser" >
                //      <div class="icon">
                //             <img src="https://placekitten.com/300/300?image=10" alt="kitten-image" height="70" width="70" class="kitty">
                //             <div class='isonline'></div>
                //         </div>
                //         <div class="blurb">
                //             <h2 class="name">
                //                 ${result.otherdata.username}
                //             </h2>
                //         </div>
                //     </div > `
            }

        }
    });
}
signout.addEventListener('click', () => {
    let data = {
        Email: JSON.parse(localStorage.getItem("User")).email
    }
    $.ajax({
        url: "/updateUser",
        data: data,
        type: "POST",
        success: function (result) {
            localStorage.clear()
            let url = window.location.origin
            window.location.href = url
            socket.emit('online-users')
        }
    })

})
function searchtheuser(event) {
    if (event.target.value) {
        let data = {
            searchvalue: event.target.value
        }
        $.ajax({
            url: "/searchuser",
            data: data,
            type: "POST",
            success: function (list) {
                let data = list.data
                users.innerHTML = ''
                let currentuser = JSON.parse(localStorage.getItem("User"))
                if (data != undefined) {
                    for (var i = 0; i < data.length; i++) {
                        if (currentuser.email != data[i].email) {
                            var online = ""
                            if (data[i].isonline == 1)
                                online = "<div class='isonline2'></div>"
                            let html = `<button class="cusbtn chatclicked" id ="${data[i].id}">
                    <div class="contact">
                        ${online}
                        <a class="userlink" href="#${data[i].id}"><div class="icon">
                            <img src="https://placekitten.com/200/200" alt="kitten-image">
                        </div>
                            <div class="blurb">
                                <h2 class="name">
                                    ${data[i].name}
                                </h2>
                            </div>
                        </a></div></button > `

                            // let count = list.count.findIndex((x) => x.id == data[i].id) != -1 ? `< div class="messgecount" > ${ list.count[list.count.findIndex((x) => x.id == data[i].id)].unread }</div ></a ></div ></button > ` : `</a ></div ></button > `
                            users.innerHTML += html
                        }
                    }
                    $(".chatclicked").click(function () {
                        document.getElementById("typing").style.display = "none"
                        message.value = ""
                        // alert(window.document.URL.split("#")[1])
                        var id = $(this).attr('id');
                        let data = {
                            userby: JSON.parse(localStorage.getItem("User")).id,
                            userto: id,
                            allowread: 1
                        }
                        let counters = document.getElementsByClassName(id)
                        if (counters.length > 0)
                            counters[0].style.display = "none"
                        if (id != window.document.URL.split("#")[1]) {
                            getmessages(data)
                        }
                    })
                }
            }
        })

    } else {
        $.ajax({
            url: "/getAllUsers",
            data: { myid: JSON.parse(localStorage.getItem("User")).id },
            type: "POST",
            success: function (list) {
                getusers(list, 0)
            }
        });
    }
}
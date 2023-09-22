require('dotenv').config();
const moment = require('moment');
const _ = require('lodash');
const sqlhelper = require("../utils/dbconttect");
// const Common = require("../../libraries/User.Common");
const req = require('express/lib/request');
const activity = {};

activity.saveuser = async (req, res, payload) => {
    console.log("login called")
    let response = {}
    let data = await sqlhelper.select("select * from users where email=?", [payload.email], (err, res) => {
        if (err || _.size(res) <= 0) {
            return 0;
        } else {
            return res;
        }
    });
    if (data == 0) {
        var insert_data = {
            email: payload.email,
            password: payload.password,
            name: payload.name
        };
        insert_data['entrydate'] = moment().format('YYYY-MM-DD hh:mm:ss')
        let user_data = await sqlhelper.insert('users', insert_data, (err, res) => {
            if (err) {
                // callback(json_response(err), null);
                console.log(err)
                return 0;
            } else {
                res = json_response(res);
                return res.insertId
            }
        });
        if (user_data == 0) {
            response = {
                'message': 'Somthing went wrong,please try again',
                'status': false,
            };
        } else {
            response = {
                'message': 'Sign Up successfull',
                'status': true,
            };
        }
    } else {
        response = {
            'message': 'Email already taken.',
            'status': false,
        };
    }
    return response
    // return callback(null, json_response(response));
}
activity.loginuser = async (req, res, payload) => {
    console.log("login called")
    let response = {}
    let data = await sqlhelper.select("select * from users where email=? AND password=?", [payload.email, payload.password], (err, res) => {
        if (err || _.size(res) <= 0) {
            return 0;
        } else {
            return res[0];
        }
    });
    if (data == 0) {
        response = {
            'message': 'Invalid Login.',
            'status': false,
        };
    } else {
        response = {
            'message': 'Login success',
            'status': true,
            'data': data
        };
    }
    return response
}

activity.getAllUsers = async (id, myid) => {
    console.log("login called")
    let response = {}
    let where = ''
    console.log(id, "id")
    if (id != 0) {
        where = " where id=" + id+" AND "
    }
    // let data = await sqlhelper.select(`SELECT count,if(time2!='',if(time2<time,time,time2),time) as timedata,sendby,id,toid,sendid,Name,email,isonline from (SELECT count(*) as count,Max(time) as time2,sendid as sendby  FROM messages as mg left join users as SU on SU.id=mg.sendid WHERE 1 ${where} AND mg.readed=0 AND toid=${myid} GROUP by sendid) as t2
    // right JOIN
    // (SELECT su.id,toid,Max(time) as time,sendid,SU.Name,SU.email,SU.isonline  FROM messages as mg left join users as SU on SU.id=mg.sendid WHERE 1 ${where} AND mg.readed=1 AND toid=${myid} GROUP by sendid order by time desc) as t1 on t2.sendby=t1.sendid GROUP by t1.sendid order by timedata desc;`, [], (err, res) => {
    let data = await sqlhelper.select(`SELECT SU.id,email,isonline,name as Name,max(time) as times,0 as count from messages as mg LEFT JOIN users as SU on SU.id=mg.sendid or SU.id=mg.toid  WHERE 1 AND ${where} mg.toid=${myid} or mg.sendid=${myid} group by SU.id order by times desc;`, [], (err, res) => {
        if (err || _.size(res) <= 0) {
            console.log(err)
            return 0;
        } else {
            return res;
        }
    });
    if (data == 0) {

    } else {
        response = {
            'status': true,
            'data': data,
        };
    }
    return response
}

activity.updateuser = async (payload, insert_data) => {

    let response = {}

    console.log("calling update user", insert_data)
    let user_data = await sqlhelper.update('users', insert_data, payload.email, "", (err, res) => {
        if (err) {
            console.log(err);
            // callback(json_response(err), null);
            return 0;
        } else {
            res = json_response(res);
            return res.affectedRows
        }
    });
    if (user_data == 0) {

    } else {
        response = {
            'status': true,
            'data': []
        };
    }
    return response

}
activity.getUsersMessage = async (payload) => {
    let response = {}
    let where = ''
    // if (id != 0) {
    //     where = " where id=" + id
    // }
    console.log(payload, 137)
    let user_data
    if (payload.allowread != undefined && payload.allowread == 1) {
        user_data = await sqlhelper.update('messages', { readed: 1 }, { sendid: payload.userto, toid: payload.userby }, "", (err, res) => {
            if (err) {
                console.log(err);
                // callback(json_response(err), null);
                return 0;
            } else {
                res = json_response(res);
                return 1
            }
        });
    } else {
        user_data = 1
    }

    if (user_data == 0 || user_data==1) {
        let query = 'select mg.message,us.id,mg.id as mgid,sendid,toid,time,us.name as username,"left" as display,readed,isonline  from users as us left join messages as mg on mg.sendid=us.id WHERE mg.sendid=? AND mg.toid=? UNION select mg.message,uss.id,mg.id as mgid,sendid,toid,time,uss.name as username,"right" as display,readed,isonline  from users as uss left join messages as mg on mg.sendid=uss.id WHERE mg.sendid=? AND mg.toid=? order by mgid asc'
        let data = await sqlhelper.select(query, [payload.userby, payload.userto, payload.userto, payload.userby], (err, res) => {
            if (err || _.size(res) <= 0) {
                console.log(err)
                return 0;
            } else {
                return res;
            }
        });
        if (data == 0) {
            let query = 'select id,uss.name as username from users as uss WHERE id=?'

            let otherdata = await sqlhelper.select(query, [payload.userto], (err, res) => {
                if (err || _.size(res) <= 0) {
                    console.log(err)
                    return 0;
                } else {
                    return res[0];
                }
            });
            response = {
                'status': false,
                'data': [],
                'otherdata': otherdata
            };
        } else {
            response = {
                'status': true,
                'data': data
            };
        }
    }
    return response
}
activity.savemessage = async (payload) => {
    let response = {}
    var insert_data = {
        sendid: payload.sendid,
        toid: payload.to,
        message: payload.message,
        readed: 0
    };
    insert_data['time'] = moment().format('YYYY-MM-DD HH:mm:ss')
    let user_data = await sqlhelper.insert('messages', insert_data, (err, res) => {
        if (err) {
            // callback(json_response(err), null);
            console.log(err)
            return 0;
        } else {
            res = json_response(res);
            return res.insertId
        }
    });
    if (user_data == 0) {
        response = {
            'message': 'Somthing went wrong,please try again',
            'status': false,
        };
    } else {
        response = {
            'message': 'message sent.',
            'status': true,
            'data': insert_data
        };
    }
    return response
    // return callback(null, json_response(response));
}
activity.searchuser = async (searchvalue) => {
    let response = {}
    let where = ' where name like "%' + searchvalue + '%" OR email like "%' + searchvalue + '%" '

    let data = await sqlhelper.select("select id,name,email,isonline from users " + where, [], (err, res) => {
        if (err || _.size(res) <= 0) {
            console.log(err)
            return 0;
        } else {
            return res;
        }
    });
    if (data == 0) {

    } else {
        response = {
            'status': true,
            'data': data,
        };
    }
    return response
}
activity.changeprofile = async (req,res) => {
  
}
json_response = (data) => {
    return JSON.parse(JSON.stringify(data));
}
module.exports = activity;